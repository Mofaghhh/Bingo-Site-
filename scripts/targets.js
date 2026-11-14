(function () {
	'use strict';

	var categories = window.PEPE_GOALS_CATEGORIES || [];
	var container = document.getElementById('pepe-catalog');
	var searchInput = document.getElementById('pepe-search');
	var countEl = document.getElementById('pepe-count');
	var cyclingToggle = document.getElementById('pepe-cycling-toggle');
	var categoryTabs = document.getElementById('pepe-category-tabs');
	var tooltip = document.getElementById('pepe-tooltip');
	var modal = document.getElementById('pepe-modal');
	var modalTitle = document.getElementById('pepe-modal-title');
	var modalSubtitle = document.getElementById('pepe-modal-subtitle');
	var modalGrid = document.getElementById('pepe-modal-grid');
	var modalClose = document.getElementById('pepe-modal-close');

	var ASSETS_DIR = '/Bingo-Site-/assets/trading-zone/';
	var SPRITE_SIZE = 34; // px

	var currentCategory = 'all';
	var searchQuery = '';
	var isCycling = true;
	var cycleTimer = null;
	var variantIndices = {};

	// Map of all goals by ID for quick lookup
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

	function getSpriteStyle(sprite) {
		if (!sprite || !sprite.file) return '';
		var cols = sprite.cols || 8;
		var x = sprite.x || 0;
		var y = sprite.y || 0;
		return 'background-image: url(\'' + ASSETS_DIR + sprite.file + '\'); ' +
			'background-size: calc(' + cols + ' * ' + SPRITE_SIZE + 'px) auto; ' +
			'background-position: calc(-' + x + ' * ' + SPRITE_SIZE + 'px) calc(-' + y + ' * ' + SPRITE_SIZE + 'px);';
	}

	function renderCategoryTabs() {
		if (!categoryTabs) return;
		var en = isEn();
		var html = '<button type="button" class="pepe-tab-btn active" data-cat="all">' +
			(en ? 'All Categories' : 'Все категории') +
			' <span class="pepe-tab-badge">' + totalGoalsCount + '</span></button>';

		categories.forEach(function (cat) {
			var catName = cat.title.replace(/^Категория \d+:\s*/, '');
			html += '<button type="button" class="pepe-tab-btn" data-cat="' + cat.id + '">' +
				catName +
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
				var spriteStyle = getSpriteStyle(activeSprite);

				html += '<button type="button" class="pepe-tile' + (hasVariants ? ' has-variants' : '') + '" ' +
					'data-goal-id="' + goal.id + '" ' +
					'aria-label="' + goal.name.replace(/"/g, '&quot;') + '">';

				html += '<span class="pepe-sprite" style="' + spriteStyle + '"></span>';

				if (goal.count && goal.count > 1) {
					html += '<span class="pepe-count">' + goal.count + '</span>';
				}

				if (hasVariants) {
					html += '<span class="pepe-variant-dot" title="Группа вариантов">⇄</span>';
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

	// Tooltip handling
	function showTooltip(tileEl) {
		if (!tooltip) return;
		var goalId = tileEl.getAttribute('data-goal-id');
		var goal = goalsById[goalId];
		if (!goal) return;

		var hasVariants = goal.variants && goal.variants.length > 1;
		var curIdx = (hasVariants && variantIndices[goal.id]) || 0;
		var currentVariant = hasVariants ? goal.variants[curIdx] : null;

		var itemName = currentVariant ? currentVariant.name : goal.name;
		var itemId = currentVariant ? currentVariant.id : goal.id;

		var html = '<div class="pepe-tip-header">' + goal.name + '</div>';
		html += '<div class="pepe-tip-sub">' + itemName + ' <code class="pepe-tip-code">minecraft:' + itemId + '</code></div>';

		html += '<div class="pepe-tip-meta">';
		if (goal.count && goal.count > 1) {
			html += '<span class="pepe-tip-tag count-tag">' + goal.count + ' шт.</span>';
		}
		if (goal.type) {
			html += '<span class="pepe-tip-tag type-tag">' + goal.type + '</span>';
		}
		if (hasVariants) {
			html += '<span class="pepe-tip-tag var-tag">' + goal.variants.length + ' вар.</span>';
		}
		html += '</div>';

		if (hasVariants) {
			html += '<div class="pepe-tip-action">⇄ Нажмите, чтобы открыть все ' + goal.variants.length + ' вариантов</div>';
		}

		tooltip.innerHTML = html;
		tooltip.style.display = 'block';

		positionTooltip(tileEl);
	}

	function positionTooltip(tileEl) {
		if (!tooltip || tooltip.style.display === 'none') return;
		var rect = tileEl.getBoundingClientRect();
		var tipRect = tooltip.getBoundingClientRect();

		var top = rect.top - tipRect.height - 8;
		var left = rect.left + (rect.width / 2) - (tipRect.width / 2);

		// If overflows top, show below
		if (top < 10) {
			top = rect.bottom + 8;
		}

		// Horizontal clamping
		if (left < 10) left = 10;
		if (left + tipRect.width > window.innerWidth - 10) {
			left = window.innerWidth - tipRect.width - 10;
		}

		tooltip.style.top = (top + window.scrollY) + 'px';
		tooltip.style.left = (left + window.scrollX) + 'px';
	}

	function hideTooltip() {
		if (!tooltip) return;
		tooltip.style.display = 'none';
	}

	// Variant Modal
	function openVariantModal(goalId) {
		var goal = goalsById[goalId];
		if (!goal || !goal.variants || !goal.variants.length) return;
		if (!modal || !modalGrid) return;

		if (modalTitle) {
			modalTitle.textContent = goal.name;
		}
		if (modalSubtitle) {
			modalSubtitle.textContent = 'Любой из ' + goal.variants.length + ' предметов засчитывает эту цель (требуется ' + (goal.count || 1) + ' шт.):';
		}

		var html = '';
		goal.variants.forEach(function (v) {
			var style = getSpriteStyle(v.sprite);
			html += '<div class="pepe-modal-item">';
			html += '<div class="pepe-modal-tile">';
			html += '<span class="pepe-sprite" style="' + style + '"></span>';
			html += '</div>';
			html += '<div class="pepe-modal-item-info">';
			html += '<div class="pepe-modal-item-name">' + v.name + '</div>';
			html += '<code class="pepe-modal-item-id">minecraft:' + v.id + '</code>';
			html += '</div>';
			html += '</div>';
		});

		modalGrid.innerHTML = html;
		modal.classList.add('open');
		document.body.style.overflow = 'hidden';
	}

	function closeVariantModal() {
		if (!modal) return;
		modal.classList.remove('open');
		document.body.style.overflow = '';
	}

	// Cycling timer for variant goals
	function startCycling() {
		if (cycleTimer) clearInterval(cycleTimer);
		cycleTimer = setInterval(function () {
			if (!isCycling) return;

			var hasUpdatedAny = false;

			Object.keys(variantIndices).forEach(function (goalId) {
				var goal = goalsById[goalId];
				if (!goal || !goal.variants || goal.variants.length <= 1) return;

				var nextIdx = (variantIndices[goalId] + 1) % goal.variants.length;
				variantIndices[goalId] = nextIdx;

				var tileEl = container.querySelector('.pepe-tile[data-goal-id="' + goalId + '"]');
				if (tileEl) {
					var spriteEl = tileEl.querySelector('.pepe-sprite');
					if (spriteEl) {
						var newSprite = goal.variants[nextIdx].sprite;
						spriteEl.style.cssText = getSpriteStyle(newSprite);
						hasUpdatedAny = true;
					}
				}
			});
		}, 1500);
	}

	// Event listeners
	if (container) {
		container.addEventListener('mouseenter', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (tile) showTooltip(tile);
		}, true);

		container.addEventListener('mouseleave', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (tile) hideTooltip();
		}, true);

		container.addEventListener('mousemove', function (e) {
			var tile = e.target.closest('.pepe-tile');
			if (tile && tooltip && tooltip.style.display !== 'none') {
				positionTooltip(tile);
			}
		});

		container.addEventListener('click', function (e) {
			var tile = e.target.closest('.pepe-tile.has-variants');
			if (tile) {
				var goalId = tile.getAttribute('data-goal-id');
				hideTooltip();
				openVariantModal(goalId);
			}
		});
	}

	if (searchInput) {
		searchInput.addEventListener('input', function () {
			searchQuery = searchInput.value;
			render();
		});
	}

	if (cyclingToggle) {
		cyclingToggle.addEventListener('change', function () {
			isCycling = cyclingToggle.checked;
		});
	}

	if (modalClose) {
		modalClose.addEventListener('click', closeVariantModal);
	}

	if (modal) {
		modal.addEventListener('click', function (e) {
			if (e.target === modal) closeVariantModal();
		});
	}

	window.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
			closeVariantModal();
		}
	});

	// Initialize
	renderCategoryTabs();
	render();
	startCycling();
})();
