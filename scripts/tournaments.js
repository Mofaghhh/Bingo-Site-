(function () {
	'use strict';

	// --- Language management ---
	function storedLang() {
		try {
			var ls = localStorage.getItem('lang');
			if (ls === 'ru' || ls === 'en') return ls;
		} catch (e) {}
		var m = document.cookie.match(/(?:^|; )lang=([^;]*)/);
		if (m) {
			var v = decodeURIComponent(m[1]);
			if (v === 'ru' || v === 'en') return v;
		}
		return 'ru';
	}

	function storeLang(lang) {
		try {
			localStorage.setItem('lang', lang);
		} catch (e) {}
		document.cookie = 'lang=' + lang + '; Path=/; Max-Age=31536000; SameSite=Lax';
	}

	function applyLang(lang) {
		if (lang !== 'ru' && lang !== 'en') return;
		document.documentElement.lang = lang;
		document.querySelectorAll('[data-ru][data-en]').forEach(function (el) {
			var val = el.getAttribute('data-' + lang);
			if (val != null) {
				el.textContent = val;
			}
		});
		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
			b.classList.toggle('active', b.getAttribute('data-lang') === lang);
		});
		updateHeadersLang(lang);
		storeLang(lang);
	}

	document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
		b.addEventListener('click', function (e) {
			e.preventDefault();
			applyLang(b.getAttribute('data-lang'));
		});
	});

	// --- Bracket Configuration & Rendering ---
	var ROUND_COUNTS = [256, 128, 64, 32, 16, 8, 4, 2, 1];
	var ROUND_NAMES = {
		ru: ['1/128 финала', '1/64 финала', '1/32 финала', '1/16 финала', '1/8 финала', '1/4 финала', 'Полуфинал', 'Финал', '🏆 Чемпион'],
		en: ['Round of 256', 'Round of 128', 'Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Final', '🏆 Champion']
	};

	var SLOT_W = 140;
	var SLOT_H = 26;
	var COL_GAP = 68;
	var COL_STEP = SLOT_W + COL_GAP;
	var BASE_STEP = 38;
	var PAD_X = 24;
	var PAD_Y = 20;

	var viewportWrapper = document.getElementById('bracket-viewport');
	var stageContainer = document.getElementById('bracket-stage');
	var headersRow = document.getElementById('bracket-headers');
	var svgContainer = document.getElementById('bracket-svg');
	var zoomLabel = document.getElementById('zoom-val');

	if (!viewportWrapper || !stageContainer || !svgContainer) return;

	// Calculate all slot center positions
	var positions = [];
	for (var c = 0; c < ROUND_COUNTS.length; c++) {
		positions[c] = [];
		var count = ROUND_COUNTS[c];
		for (var i = 0; i < count; i++) {
			var y;
			if (c === 0) {
				y = PAD_Y + i * BASE_STEP + BASE_STEP / 2;
			} else {
				var y1 = positions[c - 1][2 * i];
				var y2 = positions[c - 1][2 * i + 1];
				y = (y1 + y2) / 2;
			}
			positions[c][i] = y;
		}
	}

	var totalW = PAD_X * 2 + (ROUND_COUNTS.length - 1) * COL_STEP + SLOT_W + 40;
	var totalH = positions[0][255] + PAD_Y + BASE_STEP;

	function updateHeadersLang(lang) {
		if (!headersRow) return;
		var names = ROUND_NAMES[lang] || ROUND_NAMES.ru;
		var headers = headersRow.querySelectorAll('.bracket-round-header');
		headers.forEach(function (h, idx) {
			if (names[idx]) h.textContent = names[idx];
		});
	}

	function renderHeaders() {
		if (!headersRow) return;
		headersRow.innerHTML = '';
		headersRow.style.width = totalW + 'px';
		headersRow.style.paddingLeft = PAD_X + 'px';
		headersRow.style.gap = (COL_GAP) + 'px';

		var currentLang = document.documentElement.lang === 'en' ? 'en' : 'ru';
		var names = ROUND_NAMES[currentLang] || ROUND_NAMES.ru;

		for (var c = 0; c < ROUND_COUNTS.length; c++) {
			var div = document.createElement('div');
			div.className = 'bracket-round-header';
			div.style.width = SLOT_W + 'px';
			div.textContent = names[c] || ('Round ' + (c + 1));
			headersRow.appendChild(div);
		}
	}

	function buildSvgBracket() {
		svgContainer.setAttribute('width', totalW);
		svgContainer.setAttribute('height', totalH);
		svgContainer.innerHTML = '';

		// Definitions: Marker Arrow
		var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
		defs.innerHTML =
			'<marker id="bracket-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">' +
			'<polygon points="0,1 6.5,3.5 0,6" fill="#843254" />' +
			'</marker>' +
			'<marker id="bracket-arrow-hi" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">' +
			'<polygon points="0,1 6.5,3.5 0,6" fill="#f2cf4e" />' +
			'</marker>';
		svgContainer.appendChild(defs);

		var linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		linesGroup.setAttribute('class', 'bracket-lines-group');
		svgContainer.appendChild(linesGroup);

		var slotsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		slotsGroup.setAttribute('class', 'bracket-slots-group');
		svgContainer.appendChild(slotsGroup);

		// 1. Render all connector brackets
		for (var col = 0; col < ROUND_COUNTS.length - 1; col++) {
			var x0 = PAD_X + col * COL_STEP + SLOT_W;
			var x1 = PAD_X + (col + 1) * COL_STEP;
			var dx = x1 - x0;
			var nextCount = ROUND_COUNTS[col + 1];

			for (var m = 0; m < nextCount; m++) {
				var y1 = positions[col][2 * m];
				var y2 = positions[col][2 * m + 1];
				var yMid = positions[col + 1][m];

				var xTurn = x0 + dx * 0.45;
				var xMerge = x0 + dx * 0.65;

				var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				var d =
					'M ' + x0 + ' ' + y1 +
					' L ' + (x0 + 8) + ' ' + y1 +
					' C ' + xTurn + ' ' + y1 + ', ' + (xTurn - 3) + ' ' + yMid + ', ' + xMerge + ' ' + yMid +
					' L ' + (x1 - 1) + ' ' + yMid +
					' M ' + x0 + ' ' + y2 +
					' L ' + (x0 + 8) + ' ' + y2 +
					' C ' + xTurn + ' ' + y2 + ', ' + (xTurn - 3) + ' ' + yMid + ', ' + xMerge + ' ' + yMid;

				path.setAttribute('d', d);
				path.setAttribute('class', 'bracket-connector-line');
				path.setAttribute('marker-end', 'url(#bracket-arrow)');
				path.setAttribute('data-target-col', col + 1);
				path.setAttribute('data-target-idx', m);
				path.setAttribute('data-source-col', col);
				path.setAttribute('data-source-top', 2 * m);
				path.setAttribute('data-source-bot', 2 * m + 1);

				linesGroup.appendChild(path);
			}
		}

		// 2. Render all slot rectangles
		for (var c = 0; c < ROUND_COUNTS.length; c++) {
			var count = ROUND_COUNTS[c];
			var x = PAD_X + c * COL_STEP;

			for (var i = 0; i < count; i++) {
				var y = positions[c][i];
				var isChampion = (c === ROUND_COUNTS.length - 1);

				var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				rect.setAttribute('x', x);
				rect.setAttribute('y', y - SLOT_H / 2);
				rect.setAttribute('width', SLOT_W);
				rect.setAttribute('height', SLOT_H);
				rect.setAttribute('rx', '5');
				rect.setAttribute('ry', '5');
				rect.setAttribute('class', 'bracket-slot-rect' + (isChampion ? ' champion-slot' : ''));
				rect.setAttribute('data-col', c);
				rect.setAttribute('data-idx', i);

				// Slot hover interactions
				rect.addEventListener('mouseenter', handleSlotHover);
				rect.addEventListener('mouseleave', clearSlotHover);

				slotsGroup.appendChild(rect);

				if (isChampion) {
					var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
					text.setAttribute('x', x + SLOT_W / 2);
					text.setAttribute('y', y);
					text.setAttribute('class', 'bracket-slot-text champion-text');
					text.textContent = '★ Champion ★';
					slotsGroup.appendChild(text);
				}
			}
		}
	}

	function handleSlotHover(e) {
		var col = parseInt(e.target.getAttribute('data-col'), 10);
		var idx = parseInt(e.target.getAttribute('data-idx'), 10);
		e.target.classList.add('highlighted');

		// Highlight forward to champion
		var curCol = col;
		var curIdx = idx;
		while (curCol < ROUND_COUNTS.length - 1) {
			var nextCol = curCol + 1;
			var nextIdx = Math.floor(curIdx / 2);
			var line = svgContainer.querySelector('.bracket-connector-line[data-target-col="' + nextCol + '"][data-target-idx="' + nextIdx + '"]');
			if (line) {
				line.classList.add('highlighted');
				line.setAttribute('marker-end', 'url(#bracket-arrow-hi)');
			}
			var nextSlot = svgContainer.querySelector('.bracket-slot-rect[data-col="' + nextCol + '"][data-idx="' + nextIdx + '"]');
			if (nextSlot) nextSlot.classList.add('highlighted');
			curCol = nextCol;
			curIdx = nextIdx;
		}
	}

	function clearSlotHover() {
		svgContainer.querySelectorAll('.bracket-slot-rect.highlighted').forEach(function (el) {
			el.classList.remove('highlighted');
		});
		svgContainer.querySelectorAll('.bracket-connector-line.highlighted').forEach(function (el) {
			el.classList.remove('highlighted');
			el.setAttribute('marker-end', 'url(#bracket-arrow)');
		});
	}

	// --- Pan and Zoom System ---
	var scale = 0.22;
	var panX = 40;
	var panY = 20;

	var isDragging = false;
	var startX = 0;
	var startY = 0;
	var startPanX = 0;
	var startPanY = 0;

	function applyTransform(smooth) {
		if (smooth) {
			stageContainer.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
			setTimeout(function () {
				stageContainer.style.transition = '';
			}, 320);
		} else {
			stageContainer.style.transition = '';
		}
		stageContainer.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
		if (zoomLabel) {
			zoomLabel.textContent = Math.round(scale * 100) + '%';
		}
	}

	function fitToView() {
		var vW = viewportWrapper.clientWidth || 1200;
		var vH = viewportWrapper.clientHeight || 700;
		var scaleW = (vW - 40) / totalW;
		var scaleH = (vH - 40) / totalH;
		scale = Math.max(0.06, Math.min(scaleW, scaleH));
		panX = Math.max(20, (vW - totalW * scale) / 2);
		panY = Math.max(20, (vH - totalH * scale) / 2);
		applyTransform(true);
	}

	function focusRegion(targetY, targetScale, targetX) {
		var vW = viewportWrapper.clientWidth || 1200;
		var vH = viewportWrapper.clientHeight || 700;
		scale = targetScale || 0.65;
		var tX = targetX != null ? targetX : 40;
		panX = tX;
		panY = (vH / 2) - (targetY * scale);
		applyTransform(true);
	}

	// Pointer Drag Handling
	viewportWrapper.addEventListener('mousedown', function (e) {
		if (e.button !== 0) return;
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
		startPanX = panX;
		startPanY = panY;
	});

	window.addEventListener('mousemove', function (e) {
		if (!isDragging) return;
		var dx = e.clientX - startX;
		var dy = e.clientY - startY;
		panX = startPanX + dx;
		panY = startPanY + dy;
		applyTransform(false);
	});

	window.addEventListener('mouseup', function () {
		isDragging = false;
	});

	// Touch Drag Handling
	var lastTouchDist = 0;
	viewportWrapper.addEventListener('touchstart', function (e) {
		if (e.touches.length === 1) {
			isDragging = true;
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
			startPanX = panX;
			startPanY = panY;
		} else if (e.touches.length === 2) {
			isDragging = false;
			var dx = e.touches[0].clientX - e.touches[1].clientX;
			var dy = e.touches[0].clientY - e.touches[1].clientY;
			lastTouchDist = Math.hypot(dx, dy);
		}
	}, { passive: true });

	viewportWrapper.addEventListener('touchmove', function (e) {
		if (isDragging && e.touches.length === 1) {
			var dx = e.touches[0].clientX - startX;
			var dy = e.touches[0].clientY - startY;
			panX = startPanX + dx;
			panY = startPanY + dy;
			applyTransform(false);
		} else if (e.touches.length === 2) {
			var dx2 = e.touches[0].clientX - e.touches[1].clientX;
			var dy2 = e.touches[0].clientY - e.touches[1].clientY;
			var dist = Math.hypot(dx2, dy2);
			if (lastTouchDist > 0) {
				var factor = dist / lastTouchDist;
				scale = Math.min(2.0, Math.max(0.06, scale * factor));
				applyTransform(false);
			}
			lastTouchDist = dist;
		}
	}, { passive: true });

	viewportWrapper.addEventListener('touchend', function () {
		isDragging = false;
		lastTouchDist = 0;
	});

	// Wheel Zoom
	viewportWrapper.addEventListener('wheel', function (e) {
		e.preventDefault();
		var rect = viewportWrapper.getBoundingClientRect();
		var mouseX = e.clientX - rect.left;
		var mouseY = e.clientY - rect.top;

		var prevScale = scale;
		var zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
		var newScale = Math.min(2.0, Math.max(0.06, prevScale * zoomFactor));

		// Zoom towards cursor
		panX = mouseX - (mouseX - panX) * (newScale / prevScale);
		panY = mouseY - (mouseY - panY) * (newScale / prevScale);
		scale = newScale;

		applyTransform(false);
	}, { passive: false });

	// Control Buttons
	var zoomInBtn = document.getElementById('btn-zoom-in');
	var zoomOutBtn = document.getElementById('btn-zoom-out');
	var zoomResetBtn = document.getElementById('btn-zoom-reset');
	var fullscreenBtn = document.getElementById('btn-fullscreen');

	if (zoomInBtn) {
		zoomInBtn.addEventListener('click', function () {
			var vW = viewportWrapper.clientWidth;
			var vH = viewportWrapper.clientHeight;
			var newScale = Math.min(2.0, scale * 1.25);
			panX = (vW / 2) - ((vW / 2) - panX) * (newScale / scale);
			panY = (vH / 2) - ((vH / 2) - panY) * (newScale / scale);
			scale = newScale;
			applyTransform(true);
		});
	}

	if (zoomOutBtn) {
		zoomOutBtn.addEventListener('click', function () {
			var vW = viewportWrapper.clientWidth;
			var vH = viewportWrapper.clientHeight;
			var newScale = Math.max(0.06, scale * 0.8);
			panX = (vW / 2) - ((vW / 2) - panX) * (newScale / scale);
			panY = (vH / 2) - ((vH / 2) - panY) * (newScale / scale);
			scale = newScale;
			applyTransform(true);
		});
	}

	if (zoomResetBtn) {
		zoomResetBtn.addEventListener('click', function () {
			fitToView();
		});
	}

	if (fullscreenBtn) {
		fullscreenBtn.addEventListener('click', function () {
			var isFull = viewportWrapper.classList.toggle('is-fullscreen');
			document.body.style.overflow = isFull ? 'hidden' : '';
			setTimeout(fitToView, 60);
		});
	}

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && viewportWrapper.classList.contains('is-fullscreen')) {
			viewportWrapper.classList.remove('is-fullscreen');
			document.body.style.overflow = '';
			setTimeout(fitToView, 60);
		}
	});

	// Pool Filter Tabs
	var poolTabs = document.querySelectorAll('.bracket-tab-btn');
	poolTabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			poolTabs.forEach(function (t) { t.classList.remove('active'); });
			tab.classList.add('active');

			var pool = tab.getAttribute('data-pool');
			if (pool === 'all') {
				fitToView();
			} else if (pool === 'p1') {
				// Pool 1: slots 0..63
				focusRegion(positions[0][32], 0.65, 40);
			} else if (pool === 'p2') {
				// Pool 2: slots 64..127
				focusRegion(positions[0][96], 0.65, 40);
			} else if (pool === 'p3') {
				// Pool 3: slots 128..191
				focusRegion(positions[0][160], 0.65, 40);
			} else if (pool === 'p4') {
				// Pool 4: slots 192..255
				focusRegion(positions[0][224], 0.65, 40);
			} else if (pool === 'finals') {
				// Finals: Top-16 rounds (c=4 to 8)
				var finalsX = PAD_X + 4 * COL_STEP;
				var vW = viewportWrapper.clientWidth || 1200;
				scale = 0.85;
				panX = -finalsX * scale + 60;
				panY = (viewportWrapper.clientHeight / 2) - (positions[8][0] * scale);
				applyTransform(true);
			}
		});
	});

	// Init
	renderHeaders();
	buildSvgBracket();
	fitToView();
	applyLang(storedLang());

	window.addEventListener('resize', function () {
		if (scale < 0.25) fitToView();
	});
})();
