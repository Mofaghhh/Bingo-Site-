(function () {
	'use strict';

	var targets = window.BINGO_TARGETS || [];
	var container = document.getElementById('targets-grid');
	var searchInput = document.getElementById('targets-search');
	var countEl = document.getElementById('targets-count');
	var cyclingToggle = document.getElementById('targets-cycling-toggle');
	var modal = document.getElementById('targets-modal');
	var modalBody = document.getElementById('targets-modal-body');
	var modalTitle = document.getElementById('targets-modal-title');
	var modalClose = document.getElementById('targets-modal-close');

	var currentCategory = 'all';
	var currentDifficulty = 'all';
	var currentSearch = '';
	var isCycling = true;
	var cycleInterval = null;
	var variantIndices = {};

	// Base path helper
	var BASE = (function () {
		var p = window.location.pathname;
		var match = p.match(/^(\/[^\/]+)/);
		return (match && (match[1] === '' || match[1] === '')) ? match[1] : '';
	})();

	function getImgUrl(filename) {
		return BASE + '/Bingo-Site-/assets/targets/' + filename;
	}

	function isEn() {
		return document.documentElement.lang === 'en';
	}

	function getDiffBadge(diff) {
		var en = isEn();
		if (diff === 'easy') return '<span class="target-diff diff-easy">' + (en ? 'Easy' : 'Легко') + '</span>';
		if (diff === 'hard') return '<span class="target-diff diff-hard">' + (en ? 'Hard' : 'Сложно') + '</span>';
		return '<span class="target-diff diff-medium">' + (en ? 'Medium' : 'Средне') + '</span>';
	}

	function getCatLabel(cat) {
		var en = isEn();
		var map = {
			blocks: en ? 'Block' : 'Блок',
			items: en ? 'Item' : 'Предмет',
			food: en ? 'Food' : 'Еда',
			redstone: en ? 'Mechanism' : 'Механизм',
			nether: en ? 'Nether' : 'Незер'
		};
		return map[cat] || (en ? 'Objective' : 'Цель');
	}

	function render() {
		if (!container) return;
		var en = isEn();
		var query = currentSearch.trim().toLowerCase();

		var filtered = targets.filter(function (t) {
			if (currentCategory !== 'all' && t.category !== currentCategory) return false;
			if (currentDifficulty !== 'all' && t.difficulty !== currentDifficulty) return false;
			if (query) {
				var title = (en ? t.titleEn : t.title) || '';
				var desc = (en ? t.descriptionEn : t.description) || '';
				var tip = (en ? t.tipEn : t.tip) || '';
				var matchesSelf = title.toLowerCase().indexOf(query) !== -1 ||
					desc.toLowerCase().indexOf(query) !== -1 ||
					tip.toLowerCase().indexOf(query) !== -1;
				if (matchesSelf) return true;
				if (t.variants && t.variants.length) {
					return t.variants.some(function (v) {
						var vName = (en ? v.nameEn : v.name) || '';
						return vName.toLowerCase().indexOf(query) !== -1;
					});
				}
				return false;
			}
			return true;
		});

		if (countEl) {
			countEl.textContent = String(filtered.length);
		}

		if (!filtered.length) {
			container.innerHTML = '<div class="targets-empty">' +
				'<p>' + (en ? 'No matching objectives found.' : 'Ни одной подходящей цели не найдено.') + '</p>' +
				'</div>';
			return;
		}

		var html = '';
		filtered.forEach(function (t) {
			var hasVariants = t.variants && t.variants.length > 1;
			var idx = variantIndices[t.id] || 0;
			if (idx >= (t.variants ? t.variants.length : 1)) idx = 0;

			var activeItem = hasVariants ? t.variants[idx] : null;
			var iconFile = activeItem ? activeItem.icon : t.icon;
			var displayName = activeItem ? (en ? activeItem.nameEn : activeItem.name) : (en ? t.titleEn : t.title);
			var groupTitle = en ? t.titleEn : t.title;
			var desc = en ? t.descriptionEn : t.description;
			var tip = en ? t.tipEn : t.tip;

			html += '<div class="target-card" data-id="' + t.id + '"' + (hasVariants ? ' data-group="true"' : '') + ' tabindex="0">';
			html += '  <div class="target-slot">';
			html += '    <img src="' + getImgUrl(iconFile) + '" alt="' + displayName + '" class="target-icon" id="target-img-' + t.id + '" />';
			if (hasVariants) {
				html += '    <span class="target-group-badge" title="' + (en ? 'Has variants' : 'Группа вариантов') + '">⇄ ' + t.variants.length + '</span>';
			}
			html += '  </div>';
			html += '  <div class="target-info">';
			html += '    <span class="target-name" id="target-name-' + t.id + '">' + displayName + '</span>';
			if (hasVariants && displayName !== groupTitle) {
				html += '    <span class="target-parent-name">' + groupTitle + '</span>';
			}
			html += '    <div class="target-meta">';
			html += '      <span class="target-cat-badge">' + getCatLabel(t.category) + '</span>';
			html += '      ' + getDiffBadge(t.difficulty);
			html += '    </div>';
			html += '  </div>';

			// Minecraft Tooltip
			html += '  <div class="mc-tooltip">';
			html += '    <div class="mc-tooltip-title">' + (hasVariants ? groupTitle : displayName) + '</div>';
			html += '    <div class="mc-tooltip-desc">' + desc + '</div>';
			if (tip) {
				html += '    <div class="mc-tooltip-tip">💡 ' + tip + '</div>';
			}
			if (hasVariants) {
				html += '    <div class="mc-tooltip-variants-hint">⚡ ' + (en ? 'Click card to view all ' + t.variants.length + ' variants' : 'Нажмите, чтобы открыть все ' + t.variants.length + ' вариантов') + '</div>';
			}
			html += '  </div>';
			html += '</div>';
		});

		container.innerHTML = html;

		// Attach click events for cards with variants
		container.querySelectorAll('.target-card[data-group="true"]').forEach(function (card) {
			card.addEventListener('click', function () {
				var id = card.getAttribute('data-id');
				openGroupModal(id);
			});
			card.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					var id = card.getAttribute('data-id');
					openGroupModal(id);
				}
			});
		});
	}

	function openGroupModal(targetId) {
		var target = targets.find(function (t) { return t.id === targetId; });
		if (!target || !target.variants) return;
		var en = isEn();

		if (modalTitle) {
			modalTitle.textContent = (en ? target.titleEn : target.title) + ' (' + target.variants.length + ')';
		}

		if (modalBody) {
			var out = '<p class="modal-target-desc">' + (en ? target.descriptionEn : target.description) + '</p>';
			if (target.tip) {
				out += '<p class="modal-target-tip">💡 ' + (en ? target.tipEn : target.tip) + '</p>';
			}
			out += '<div class="modal-variants-grid">';
			target.variants.forEach(function (v) {
				var vName = en ? v.nameEn : v.name;
				out += '<div class="modal-variant-card">';
				out += '  <div class="target-slot small">';
				out += '    <img src="' + getImgUrl(v.icon) + '" alt="' + vName + '" class="target-icon" />';
				out += '  </div>';
				out += '  <span class="modal-variant-name">' + vName + '</span>';
				out += '</div>';
			});
			out += '</div>';
			modalBody.innerHTML = out;
		}

		if (modal) {
			modal.classList.add('open');
			document.body.style.overflow = 'hidden';
		}
	}

	function closeModal() {
		if (modal) {
			modal.classList.remove('open');
			document.body.style.overflow = '';
		}
	}

	if (modalClose) {
		modalClose.addEventListener('click', closeModal);
	}
	if (modal) {
		modal.addEventListener('click', function (e) {
			if (e.target === modal) closeModal();
		});
	}
	window.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeModal();
	});

	// Variant Cycling Engine
	function startCycling() {
		if (cycleInterval) clearInterval(cycleInterval);
		cycleInterval = setInterval(function () {
			if (!isCycling) return;
			var en = isEn();
			targets.forEach(function (t) {
				if (!t.variants || t.variants.length <= 1) return;
				var cur = variantIndices[t.id] || 0;
				var next = (cur + 1) % t.variants.length;
				variantIndices[t.id] = next;

				var item = t.variants[next];
				var img = document.getElementById('target-img-' + t.id);
				var nameEl = document.getElementById('target-name-' + t.id);

				if (img) {
					img.src = getImgUrl(item.icon);
					img.alt = en ? item.nameEn : item.name;
				}
				if (nameEl) {
					nameEl.textContent = en ? item.nameEn : item.name;
				}
			});
		}, 1400);
	}

	// Filter Tabs
	document.querySelectorAll('#targets-category-tabs [data-category]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			document.querySelectorAll('#targets-category-tabs [data-category]').forEach(function (b) { b.classList.remove('active'); });
			btn.classList.add('active');
			currentCategory = btn.getAttribute('data-category');
			render();
		});
	});

	// Difficulty Tabs
	document.querySelectorAll('#targets-diff-tabs [data-diff]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			document.querySelectorAll('#targets-diff-tabs [data-diff]').forEach(function (b) { b.classList.remove('active'); });
			btn.classList.add('active');
			currentDifficulty = btn.getAttribute('data-diff');
			render();
		});
	});

	// Search Input
	if (searchInput) {
		searchInput.addEventListener('input', function (e) {
			currentSearch = e.target.value;
			render();
		});
	}

	// Cycling Toggle
	if (cyclingToggle) {
		cyclingToggle.addEventListener('change', function () {
			isCycling = cyclingToggle.checked;
			if (isCycling) {
				startCycling();
			} else {
				if (cycleInterval) clearInterval(cycleInterval);
			}
		});
	}

	// Listen to site language changes
	window.addEventListener('languagechange', function () {
		render();
	});

	// Initialize
	render();
	startCycling();
})();
