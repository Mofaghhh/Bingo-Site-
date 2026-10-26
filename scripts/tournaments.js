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
		updateHeadersLang();
		storeLang(lang);
	}

	document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
		b.addEventListener('click', function (e) {
			e.preventDefault();
			applyLang(b.getAttribute('data-lang'));
		});
	});

	// --- Bracket Modes Configuration ---
	var MODES = {
		finals: {
			rounds: [16, 8, 4, 2, 1],
			names_ru: ['1/8 финала', '1/4 финала', 'Полуфинал', 'Финал', 'Чемпион'],
			names_en: ['Round of 16', 'Quarterfinals', 'Semifinals', 'Final', 'Champion'],
			baseStep: 48,
			slotW: 140,
			slotH: 28,
			colGap: 72
		},
		pool1: {
			rounds: [64, 32, 16, 8, 4, 2, 1],
			names_ru: ['1/32 финала', '1/16 финала', '1/8 финала', '1/4 финала', 'Полуфинал', 'Финал сетки', 'Победитель 1–64'],
			names_en: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Bracket Final', 'Winner 1–64'],
			baseStep: 38,
			slotW: 140,
			slotH: 26,
			colGap: 68
		},
		pool2: {
			rounds: [64, 32, 16, 8, 4, 2, 1],
			names_ru: ['1/32 финала', '1/16 финала', '1/8 финала', '1/4 финала', 'Полуфинал', 'Финал сетки', 'Победитель 65–128'],
			names_en: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Bracket Final', 'Winner 65–128'],
			baseStep: 38,
			slotW: 140,
			slotH: 26,
			colGap: 68
		},
		pool3: {
			rounds: [64, 32, 16, 8, 4, 2, 1],
			names_ru: ['1/32 финала', '1/16 финала', '1/8 финала', '1/4 финала', 'Полуфинал', 'Финал сетки', 'Победитель 129–192'],
			names_en: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Bracket Final', 'Winner 129–192'],
			baseStep: 38,
			slotW: 140,
			slotH: 26,
			colGap: 68
		},
		pool4: {
			rounds: [64, 32, 16, 8, 4, 2, 1],
			names_ru: ['1/32 финала', '1/16 финала', '1/8 финала', '1/4 финала', 'Полуфинал', 'Финал сетки', 'Победитель 193–256'],
			names_en: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Bracket Final', 'Winner 193–256'],
			baseStep: 38,
			slotW: 140,
			slotH: 26,
			colGap: 68
		},
		all: {
			rounds: [256, 128, 64, 32, 16, 8, 4, 2, 1],
			names_ru: ['1/128', '1/64', '1/32', '1/16', '1/8', '1/4', '1/2', 'Финал', 'Чемпион'],
			names_en: ['1/128', '1/64', '1/32', '1/16', '1/8', '1/4', '1/2', 'Final', 'Champion'],
			baseStep: 36,
			slotW: 135,
			slotH: 24,
			colGap: 65
		}
	};

	var currentModeKey = 'finals';
	var viewportWrapper = document.getElementById('bracket-viewport');
	var stageContainer = document.getElementById('bracket-stage');
	var headersRow = document.getElementById('bracket-headers');
	var svgContainer = document.getElementById('bracket-svg');
	var zoomLabel = document.getElementById('zoom-val');

	if (!viewportWrapper || !stageContainer || !svgContainer) return;

	var PAD_X = 24;
	var PAD_Y = 20;

	var curPositions = [];
	var curTotalW = 1200;
	var curTotalH = 800;

	// Fast lookup tables & highlighted elements stack for O(1) operations
	var slotLookup = {};
	var lineLookup = {};
	var highlightedSlots = [];
	var highlightedLines = [];

	// Pan & Zoom state
	var scale = 1.0;
	var panX = 40;
	var panY = 20;
	var isDragging = false;
	var isTouchDragging = false;
	var startX = 0, startY = 0, startPanX = 0, startPanY = 0;
	var lastPinchDist = 0;
	var rafId = null;

	var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
	if (window.matchMedia) {
		try {
			window.matchMedia('(hover: hover)').addEventListener('change', function (e) {
				canHover = e.matches;
			});
		} catch (err) {}
	}

	function calculatePositions(mode) {
		var rounds = mode.rounds;
		var baseStep = mode.baseStep;
		var positions = [];

		for (var c = 0; c < rounds.length; c++) {
			positions[c] = [];
			var count = rounds[c];
			for (var i = 0; i < count; i++) {
				var y;
				if (c === 0) {
					y = PAD_Y + i * baseStep + baseStep / 2;
				} else {
					var y1 = positions[c - 1][2 * i];
					var y2 = positions[c - 1][2 * i + 1];
					y = (y1 + y2) / 2;
				}
				positions[c][i] = y;
			}
		}
		return positions;
	}

	function updateHeadersLang() {
		if (!headersRow) return;
		var mode = MODES[currentModeKey];
		var lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
		var names = lang === 'en' ? mode.names_en : mode.names_ru;
		var headers = headersRow.querySelectorAll('.bracket-round-header');
		headers.forEach(function (h, idx) {
			if (names[idx]) h.textContent = names[idx];
		});
	}

	function renderHeaders(mode) {
		if (!headersRow) return;
		var lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
		var names = lang === 'en' ? mode.names_en : mode.names_ru;

		headersRow.innerHTML = '';
		headersRow.style.width = curTotalW + 'px';
		headersRow.style.paddingLeft = PAD_X + 'px';
		headersRow.style.gap = mode.colGap + 'px';

		for (var c = 0; c < mode.rounds.length; c++) {
			var div = document.createElement('div');
			div.className = 'bracket-round-header';
			div.style.width = mode.slotW + 'px';
			div.textContent = names[c] || ('R' + (c + 1));
			headersRow.appendChild(div);
		}
	}

	function clearSlotHover() {
		while (highlightedSlots.length > 0) {
			var s = highlightedSlots.pop();
			s.classList.remove('highlighted');
		}
		while (highlightedLines.length > 0) {
			var l = highlightedLines.pop();
			l.classList.remove('highlighted');
			l.setAttribute('marker-end', 'url(#bracket-arrow)');
		}
	}

	function highlightPath(startCol, startIdx) {
		clearSlotHover();
		var startSlot = slotLookup[startCol + '_' + startIdx];
		if (startSlot) {
			startSlot.classList.add('highlighted');
			highlightedSlots.push(startSlot);
		}

		var curCol = startCol;
		var curIdx = startIdx;
		var maxCol = MODES[currentModeKey].rounds.length - 1;

		while (curCol < maxCol) {
			var nextCol = curCol + 1;
			var nextIdx = Math.floor(curIdx / 2);
			var line = lineLookup[nextCol + '_' + nextIdx];
			if (line) {
				line.classList.add('highlighted');
				line.setAttribute('marker-end', 'url(#bracket-arrow-hi)');
				highlightedLines.push(line);
			}
			var nextSlot = slotLookup[nextCol + '_' + nextIdx];
			if (nextSlot) {
				nextSlot.classList.add('highlighted');
				highlightedSlots.push(nextSlot);
			}
			curCol = nextCol;
			curIdx = nextIdx;
		}
	}

	function buildSvg(mode) {
		var rounds = mode.rounds;
		var slotW = mode.slotW;
		var slotH = mode.slotH;
		var colGap = mode.colGap;
		var colStep = slotW + colGap;

		curPositions = calculatePositions(mode);
		curTotalW = PAD_X * 2 + (rounds.length - 1) * colStep + slotW + 40;
		curTotalH = curPositions[0][rounds[0] - 1] + PAD_Y + mode.baseStep;

		svgContainer.setAttribute('width', curTotalW);
		svgContainer.setAttribute('height', curTotalH);
		svgContainer.innerHTML = '';

		// Reset lookup maps
		slotLookup = {};
		lineLookup = {};
		highlightedSlots = [];
		highlightedLines = [];

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

		// Render connector brackets
		for (var col = 0; col < rounds.length - 1; col++) {
			var x0 = PAD_X + col * colStep + slotW;
			var x1 = PAD_X + (col + 1) * colStep;
			var dx = x1 - x0;
			var nextCount = rounds[col + 1];

			for (var m = 0; m < nextCount; m++) {
				var y1 = curPositions[col][2 * m];
				var y2 = curPositions[col][2 * m + 1];
				var yMid = curPositions[col + 1][m];

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

				lineLookup[(col + 1) + '_' + m] = path;
				linesGroup.appendChild(path);
			}
		}

		// Render slot rectangles (clean and empty)
		for (var c = 0; c < rounds.length; c++) {
			var count = rounds[c];
			var x = PAD_X + c * colStep;
			var isChampion = (c === rounds.length - 1);

			for (var i = 0; i < count; i++) {
				var y = curPositions[c][i];

				var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				rect.setAttribute('x', x);
				rect.setAttribute('y', y - slotH / 2);
				rect.setAttribute('width', slotW);
				rect.setAttribute('height', slotH);
				rect.setAttribute('rx', '5');
				rect.setAttribute('ry', '5');
				rect.setAttribute('class', 'bracket-slot-rect' + (isChampion ? ' champion-slot' : ''));
				rect.setAttribute('data-col', c);
				rect.setAttribute('data-idx', i);

				slotLookup[c + '_' + i] = rect;
				slotsGroup.appendChild(rect);

				if (isChampion) {
					var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
					text.setAttribute('x', x + slotW / 2);
					text.setAttribute('y', y);
					text.setAttribute('class', 'bracket-slot-text champion-text');
					text.textContent = 'Champion';
					slotsGroup.appendChild(text);
				}
			}
		}

		renderHeaders(mode);
	}

	// Delegated hover handlers for desktop only (avoids memory churn & mobile touch lag)
	svgContainer.addEventListener('mouseover', function (e) {
		if (!canHover || isDragging || isTouchDragging) return;
		var target = e.target;
		if (target && target.classList && target.classList.contains('bracket-slot-rect')) {
			var col = parseInt(target.getAttribute('data-col'), 10);
			var idx = parseInt(target.getAttribute('data-idx'), 10);
			highlightPath(col, idx);
		}
	});

	svgContainer.addEventListener('mouseout', function (e) {
		if (!canHover) return;
		var target = e.target;
		if (target && target.classList && target.classList.contains('bracket-slot-rect')) {
			clearSlotHover();
		}
	});

	function updateStageTransform() {
		rafId = null;
		stageContainer.style.transform = 'translate3d(' + panX + 'px, ' + panY + 'px, 0) scale(' + scale + ')';
		if (zoomLabel) {
			var pct = Math.round(scale * 100);
			if (zoomLabel.dataset.pct !== String(pct)) {
				zoomLabel.dataset.pct = String(pct);
				zoomLabel.textContent = pct + '%';
			}
		}
	}

	function applyTransform(smooth) {
		if (smooth) {
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
			stageContainer.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)';
			stageContainer.style.transform = 'translate3d(' + panX + 'px, ' + panY + 'px, 0) scale(' + scale + ')';
			if (zoomLabel) {
				var pct = Math.round(scale * 100);
				zoomLabel.dataset.pct = String(pct);
				zoomLabel.textContent = pct + '%';
			}
			setTimeout(function () {
				stageContainer.style.transition = '';
			}, 260);
		} else {
			stageContainer.style.transition = '';
			if (!rafId) {
				rafId = requestAnimationFrame(updateStageTransform);
			}
		}
	}

	function fitToView() {
		var vW = viewportWrapper.clientWidth || 1200;
		var vH = viewportWrapper.clientHeight || 680;
		var scaleW = (vW - 48) / curTotalW;
		var scaleH = (vH - 48) / curTotalH;
		scale = Math.max(0.1, Math.min(1.0, Math.min(scaleW, scaleH)));
		panX = Math.max(16, (vW - curTotalW * scale) / 2);
		panY = Math.max(16, (vH - curTotalH * scale) / 2);
		applyTransform(true);
	}

	function switchMode(key) {
		if (!MODES[key]) return;
		currentModeKey = key;
		var mode = MODES[key];
		buildSvg(mode);
		fitToView();
	}

	// Desktop Mouse Drag
	viewportWrapper.addEventListener('mousedown', function (e) {
		if (e.button !== 0) return;
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
		startPanX = panX;
		startPanY = panY;
		clearSlotHover();
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

	// Mobile Touch Handling (Optimized 60/120fps with Focal Pinch-to-Zoom)
	viewportWrapper.addEventListener('touchstart', function (e) {
		clearSlotHover();
		if (e.touches.length === 1) {
			isTouchDragging = true;
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
			startPanX = panX;
			startPanY = panY;
		} else if (e.touches.length === 2) {
			isTouchDragging = false;
			var t0 = e.touches[0];
			var t1 = e.touches[1];
			var dx = t0.clientX - t1.clientX;
			var dy = t0.clientY - t1.clientY;
			lastPinchDist = Math.hypot(dx, dy);
		}
	}, { passive: false });

	viewportWrapper.addEventListener('touchmove', function (e) {
		if (e.cancelable) {
			e.preventDefault(); // Prevents native page scrolling conflicts on touch
		}
		if (isTouchDragging && e.touches.length === 1) {
			var dx = e.touches[0].clientX - startX;
			var dy = e.touches[0].clientY - startY;
			panX = startPanX + dx;
			panY = startPanY + dy;
			applyTransform(false);
		} else if (e.touches.length === 2) {
			var t0 = e.touches[0];
			var t1 = e.touches[1];
			var dx = t0.clientX - t1.clientX;
			var dy = t0.clientY - t1.clientY;
			var dist = Math.hypot(dx, dy);

			if (lastPinchDist > 0 && dist > 0) {
				var rect = viewportWrapper.getBoundingClientRect();
				var midX = (t0.clientX + t1.clientX) / 2 - rect.left;
				var midY = (t0.clientY + t1.clientY) / 2 - rect.top;

				var factor = dist / lastPinchDist;
				var prevScale = scale;
				var newScale = Math.min(2.5, Math.max(0.1, prevScale * factor));

				panX = midX - (midX - panX) * (newScale / prevScale);
				panY = midY - (midY - panY) * (newScale / prevScale);
				scale = newScale;

				applyTransform(false);
			}
			lastPinchDist = dist;
		}
	}, { passive: false });

	viewportWrapper.addEventListener('touchend', function (e) {
		if (e.touches.length === 0) {
			isTouchDragging = false;
			lastPinchDist = 0;
		} else if (e.touches.length === 1) {
			isTouchDragging = true;
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
			startPanX = panX;
			startPanY = panY;
			lastPinchDist = 0;
		}
	}, { passive: false });

	viewportWrapper.addEventListener('touchcancel', function () {
		isTouchDragging = false;
		lastPinchDist = 0;
	}, { passive: true });

	// Wheel zoom
	viewportWrapper.addEventListener('wheel', function (e) {
		e.preventDefault();
		var rect = viewportWrapper.getBoundingClientRect();
		var mouseX = e.clientX - rect.left;
		var mouseY = e.clientY - rect.top;

		var prevScale = scale;
		var zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
		var newScale = Math.min(2.0, Math.max(0.1, prevScale * zoomFactor));

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
			var newScale = Math.max(0.1, scale * 0.8);
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

	// Pool Tabs
	var poolTabs = document.querySelectorAll('.bracket-tab-btn');
	poolTabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			poolTabs.forEach(function (t) { t.classList.remove('active'); });
			tab.classList.add('active');
			var modeKey = tab.getAttribute('data-pool');
			switchMode(modeKey);
		});
	});

	// Initial render
	switchMode('finals');
	applyLang(storedLang());

	window.addEventListener('resize', function () {
		fitToView();
	});
})();
