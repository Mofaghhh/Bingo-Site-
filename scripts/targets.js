(function () {
	'use strict';

	var categories = window.PEPE_GOALS_CATEGORIES || [];
	var container = document.getElementById('pepe-catalog');
	var searchInput = document.getElementById('pepe-search');
	var countEl = document.getElementById('pepe-count');
	var cyclingToggle = document.getElementById('pepe-cycling-toggle');
	var categoryTabs = document.getElementById('pepe-category-tabs');
	var tooltip = document.getElementById('pepe-tooltip');
	var popover = document.getElementById('pepe-popover');

	var ASSETS_DIR = '/Bingo-Site-/assets/trading-zone/';
	var SPRITE_SIZE = 46; // px - large, clean 3D isometric render

	var currentCategory = 'all';
	var searchQuery = '';
	var isCycling = true;
	var cycleTimer = null;
	var variantIndices = {};

	// Popover & Pinned state
	var pinnedGoalId = null;
	var popoverHideTimeout = null;

	// Lookup map
	var goalsById = {};
	var totalGoalsCount = 0;

	categories.forEach(function (cat) {
		cat.goals.forEach(function (goal) {
			goalsById[goal.id] = goal;
			totalGoalsCount++;
			if (goal.variants && goal.variants.length > 1) {
				variantIndices[goal.id] = 0;
			}
		});
	});

	function isEn() {
		return document.documentElement.lang === 'en';
	}

	function getSpriteStyle(sprite, size) {
		var s = size || SPRITE_SIZE;
		if (!sprite || !sprite.file) return '';
		var cols = sprite.cols || 8;
		var x = sprite.x || 0;
		var y = sprite.y || 0;
		return 'background-image: url(\'' + ASSETS_DIR + sprite.file + '\'); ' +
			'background-size: calc(' + cols + ' * ' + s + 'px) auto; ' +
			'background-position: calc(-' + x + ' * ' + s + 'px) calc(-' + y + ' * ' + s + 'px);';
	}

	function renderCategoryTabs() {
		if (!categoryTabs) return;
		var en = isEn();
		var html = '<button type="button" class="pepe-tab-btn active" data-cat="all">' +
			(en ? 'All' : 'Все') +
			' <span class="pepe-tab-badge">' + totalGoalsCount + '</span></button>';

		categories.forEach(function (cat) {
			html += '<button type="button" class="pepe-tab-btn" data-cat="' + cat.id + '">' +
				cat.title +
				' <span class="pepe-tab-badge">' + cat.goals.length + '</span></button>';
		});

		categoryTabs.innerHTML = html;

		categoryTabs.addEventListener('click', function (e) {
			var btn = e.target.closest('.pepe-tab-btn');
			if (!btn) return;
			var catId = btn.getAttribute('data-cat');
			currentCategory = catId;
			categoryTabs.querySelectorAll('.pepe-tab-btn').forEach(function (b) {
				b.classList.toggle('active', b === btn);
			});
			closePopover();
			render();
		});
	}

	function render() {
		if (!container) return;
		var query = searchQuery.trim().toLowerCase();
		var en = isEn();
		var visibleTotal = 0;

		var html = '';

		categories.forEach(function (cat) {
			if (currentCategory !== 'all' && cat.id !== currentCategory) return;

			var matchingGoals = cat.goals.filter(function (goal) {
				if (!query) return true;
				if (goal.name.toLowerCase().indexOf(query) !== -1) return true;
				if (goal.id.toLowerCase().indexOf(query) !== -1) return true;
				if (goal.type && goal.type.toLowerCase().indexOf(query) !== -1) return true;
				if (goal.variants && goal.variants.length) {
					return goal.variants.some(function (v) {
						return v.name.toLowerCase().indexOf(query) !== -1 ||
							v.id.toLowerCase().indexOf(query) !== -1;
					});
				}
				return false;
			});

			if (matchingGoals.length === 0) return;

			visibleTotal += matchingGoals.length;

			html += '<section class="pepe-category" data-cat-id="' + cat.id + '">';
			html += '<div class="pepe-cat-header">';
			html += '<h2 class="pepe-cat-title">' + cat.title + '</h2>';
			html += '<span class="pepe-cat-badge">' + matchingGoals.length + (matchingGoals.length !== cat.goals.length ? ' / ' + cat.goals.length : '') + '</span>';
			html += '</div>';

			html += '<div class="pepe-item-grid">';

			matchingGoals.forEach(function (goal) {
				var hasVariants = goal.variants && goal.variants.length > 1;
				var curIdx = (hasVariants && variantIndices[goal.id]) || 0;
				var activeSprite = hasVariants ? goal.variants[curIdx].sprite : goal.sprite;
				var spriteStyle = getSpriteStyle(activeSprite, SPRITE_SIZE);

				html += '<button type="button" class="pepe-tile' + (hasVariants ? ' has-variants' : '') + '" ' +
					'data-goal-id="' + goal.id + '" ' +
					'aria-label="' + goal.name.replace(/"/g, '&quot;') + '">';

				html += '<span class="pepe-sprite" style="' + spriteStyle + '"></span>';

				if (goal.count && goal.count > 1) {
					html += '<span class="pepe-count">' + goal.count + '</span>';
				}

				if (hasVariants) {
					html += '<span class="pepe-variant-dot" title="Варианты (наведите или ПКМ)">⇄</span>';
				}

				html += '</button>';
			});

			html += '</div>';
			html += '</section>';
		});

		if (countEl) {
			countEl.textContent = visibleTotal + ' / ' + totalGoalsCount;
		}

		if (visibleTotal === 0) {
			html = '<div class="pepe-empty-state">' +
				'<p>' + (en ? 'No matching objectives found.' : 'По вашему запросу целей не найдено.') + '</p>' +
				'</div>';
		}

		container.innerHTML = html;
	}

	// Tooltip for single-item tiles
	function showTooltip(tileEl) {
		if (!tooltip) return;
		var goalId = tileEl.getAttribute('data-goal-id');
		var goal = goalsById[goalId];
		if (!goal) return;

		var html = '<div class="pepe-tip-header">' + goal.name + '</div>';
		html += '<div class="pepe-tip-sub"><code class="pepe-tip-code">minecraft:' + goal.id + '</code></div>';

		html += '<div class="pepe-tip-meta">';
		if (goal.count && goal.count > 1) {
			html += '<span class="pepe-tip-tag count-tag">' + goal.count + ' шт.</span>';
		}
		if (goal.type) {
			html += '<span class="pepe-tip-tag type-tag">' + goal.type + '</span>';
		}
		html += '</div>';

		tooltip.innerHTML = html;
		tooltip.style.display = 'block';

		positionElement(tooltip, tileEl);
	}

	function hideTooltip() {
		if (!tooltip) return;
		tooltip.style.display = 'none';
	}

	// Popover for variant tiles (PepeLand style, 7 cols grid)
	function showPopover(tileEl, isPinned) {
		if (!popover) return;
		var goalId = tileEl.getAttribute('data-goal-id');
		var goal = goalsById[goalId];
		if (!goal || !goal.variants || goal.variants.length <= 1) return;

		clearTimeout(popoverHideTimeout);
		hideTooltip();

		var curIdx = variantIndices[goal.id] || 0;
		var curVariant = goal.variants[curIdx] || goal.variants[0];

		// Clean title without extra prefix
		var cleanTitle = goal.name
			.replace(/^Сруби любые \d+ /, '')
			.replace(/^Скрафти любую /, '')
			.replace(/^Скрафти любые /, '')
			.replace(/^Скрафти любой /, '')
			.replace(/^Добудь \d+ любой /, '')
			.replace(/^Добудь \d+ любого /, '')
			.replace(/^Собери \d+ любых /, '')
			.replace(/^Скрафти \d+ любых /, '')
			.replace(/^Скрафти \d+ /, '')
			.replace(/^Переплавь \d+ /, '')
			.replace(/^Обпали \d+ /, '');

		cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

		var html = '<div class="pepe-popover-header">';
		html += '<span class="pepe-popover-title">' + cleanTitle + '</span>';
		html += '<span class="pepe-popover-badge">' + goal.variants.length + '</span>';
		if (isPinned) {
			html += '<button type="button" class="pepe-popover-close-btn" aria-label="Закрыть">✕</button>';
		}
		html += '</div>';

		html += '<div class="pepe-popover-sub" id="pepe-popover-sub-text">' +
			curVariant.name + ' <code class="pepe-tip-code">minecraft:' + curVariant.id + '</code>' +
			'</div>';

		html += '<div class="pepe-popover-grid">';

		goal.variants.forEach(function (v, idx) {
			var vStyle = getSpriteStyle(v.sprite, 26);
			var isActive = idx === curIdx;

			html += '<button type="button" class="pepe-popover-item' + (isActive ? ' active' : '') + '" ' +
				'data-goal-id="' + goal.id + '" ' +
				'data-idx="' + idx + '" ' +
				'data-name="' + v.name.replace(/"/g, '&quot;') + '" ' +
				'data-id="' + v.id + '" ' +
				'title="' + v.name.replace(/"/g, '&quot;') + '">';
			html += '<span class="pepe-sprite popover-sprite" style="' + vStyle + '"></span>';
			html += '</button>';
		});

		html += '</div>';

		popover.innerHTML = html;
		popover.setAttribute('data-target-goal', goal.id);
		popover.classList.toggle('is-pinned', !!isPinned);
		popover.style.display = 'block';

		positionElement(popover, tileEl);

		// Popover items hover & click handlers
		var items = popover.querySelectorAll('.pepe-popover-item');
		var subText = document.getElementById('pepe-popover-sub-text');

		items.forEach(function (item) {
			item.addEventListener('mouseenter', function () {
				var name = item.getAttribute('data-name');
				var id = item.getAttribute('data-id');
				if (subText) {
					subText.innerHTML = name + ' <code class="pepe-tip-code">minecraft:' + id + '</code>';
				}
			});

			item.addEventListener('click', function (e) {
				e.stopPropagation();
				var idx = parseInt(item.getAttribute('data-idx'), 10);
				variantIndices[goal.id] = idx;

				// Update active border in popover
				items.forEach(function (it) {
					it.classList.toggle('active', it === item);
				});

				// Update sprite on main tile
				var mainTile = container.querySelector('.pepe-tile[data-goal-id="' + goal.id + '"]');
				if (mainTile) {
					var spr = mainTile.querySelector('.pepe-sprite');
					if (spr) {
						spr.style.cssText = getSpriteStyle(goal.variants[idx].sprite, SPRITE_SIZE);
					}
				}
			});
		});

		var closeBtn = popover.querySelector('.pepe-popover-close-btn');
		if (closeBtn) {
			closeBtn.addEventListener('click', function (e) {
				e.stopPropagation();
				closePopover();
			});
		}
	}

	function closePopover() {
		if (!popover) return;
		popover.style.display = 'none';
		popover.classList.remove('is-pinned');
		pinnedGoalId = null;
	}

	function scheduleClosePopover() {
		if (pinnedGoalId) return; // Keep pinned open
		clearTimeout(popoverHideTimeout);
		popoverHideTimeout = setTimeout(function () {
			if (!pinnedGoalId) {
				closePopover();
			}
		}, 180);
	}

	function positionElement(elem, targetEl) {
		if (!elem || elem.style.display === 'none') return;
		var rect = targetEl.getBoundingClientRect();
		var elemRect = elem.getBoundingClientRect();

		var top = rect.top - elemRect.height - 10;
		var left = rect.left + (rect.width / 2) - (elemRect.width / 2);

		// If overflows top, display below
		if (top < 10) {
			top = rect.bottom + 10;
		}

		// Horizontal bounds clamping
		if (left < 10) left = 10;
		if (left + elemRect.width > window.innerWidth - 10) {
			left = window.innerWidth - elemRect.width - 10;
		}

		elem.style.top = (top + window.scrollY) + 'px';
		elem.style.left = (left + window.scrollX) + 'px';
	}

	// Cycling animation for variant goals
	function startCycling() {
		if (cycleTimer) clearInterval(cycleTimer);
		cycleTimer = setInterval(function () {
			if (!isCycling) return;

			Object.keys(variantIndices).forEach(function (goalId) {
				// Don't cycle if popover is open for this goal
				if (popover && popover.style.display !== 'none' && popover.getAttribute('data-target-goal') === goalId) {
					return;
				}

				var goal = goalsById[goalId];
				if (!goal || !goal.variants || goal.variants.length <= 1) return;

				var nextIdx = (variantIndices[goalId] + 1) % goal.variants.length;
				variantIndices[goalId] = nextIdx;

				var tileEl = container.querySelector('.pepe-tile[data-goal-id="' + goalId + '"]');
				if (tileEl) {
					var spriteEl = tileEl.querySelector('.pepe-sprite');
					if (spriteEl) {
						var newSprite = goal.variants[nextIdx].sprite;
						spriteEl.style.cssText = getSpriteStyle(newSprite, SPRITE_SIZE);
					}
				}
			});
		}, 1500);
	}

	// Global event listeners
	if (container) {
		// Hover on tile
		container.addEventListener('mouseenter', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (!tile) return;

			var goalId = tile.getAttribute('data-goal-id');
			var goal = goalsById[goalId];
			if (!goal) return;

			if (goal.variants && goal.variants.length > 1) {
				if (!pinnedGoalId || pinnedGoalId === goalId) {
					showPopover(tile, pinnedGoalId === goalId);
				}
			} else {
				if (!pinnedGoalId) {
					closePopover();
					showTooltip(tile);
				}
			}
		}, true);

		// Mouse leave on tile
		container.addEventListener('mouseleave', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (!tile) return;

			hideTooltip();
			scheduleClosePopover();
		}, true);

		// Right Click (ПКМ) - locks the popover open on this tile
		container.addEventListener('contextmenu', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (!tile) return;

			e.preventDefault();
			var goalId = tile.getAttribute('data-goal-id');
			var goal = goalsById[goalId];
			if (!goal) return;

			if (goal.variants && goal.variants.length > 1) {
				if (pinnedGoalId === goalId) {
					closePopover();
				} else {
					pinnedGoalId = goalId;
					showPopover(tile, true);
				}
			} else {
				showTooltip(tile);
			}
		});

		// Left click on variant tile also pins/toggles
		container.addEventListener('click', function (e) {
			var tile = e.target.closest('.pepe-tile.has-variants');
			if (!tile) return;

			var goalId = tile.getAttribute('data-goal-id');
			if (pinnedGoalId === goalId) {
				closePopover();
			} else {
				pinnedGoalId = goalId;
				showPopover(tile, true);
			}
		});
	}

	// Keep popover open while hovering inside it
	if (popover) {
		popover.addEventListener('mouseenter', function () {
			clearTimeout(popoverHideTimeout);
		});

		popover.addEventListener('mouseleave', function () {
			scheduleClosePopover();
		});
	}

	// Click outside closes pinned popover
	document.addEventListener('click', function (e) {
		if (pinnedGoalId) {
			if (!e.target.closest('#pepe-popover') && !e.target.closest('.pepe-tile')) {
				closePopover();
			}
		}
	});

	// Escape closes popover
	window.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closePopover();
			hideTooltip();
		}
	});

	if (searchInput) {
		searchInput.addEventListener('input', function () {
			searchQuery = searchInput.value;
			closePopover();
			render();
		});
	}

	if (cyclingToggle) {
		cyclingToggle.addEventListener('change', function () {
			isCycling = cyclingToggle.checked;
		});
	}

	// Initialize
	renderCategoryTabs();
	render();
	startCycling();
})();
