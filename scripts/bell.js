(function () {
	'use strict';

	var bellSounds = ['/Bingo-Site-/sounds/bell1.ogg', '/Bingo-Site-/sounds/bell2.ogg'];

	function getBasePath() {
		var script = document.querySelector('script[src*="bell.js"]');
		if (script) {
			var src = script.getAttribute('src');
			var idx = src.indexOf('/Bingo-Site-/scripts/bell.js');
			if (idx !== -1) {
				return src.substring(0, idx);
			}
		}
		var link = document.querySelector('link[rel="stylesheet"][href*="/"]');
		if (link) return '';
		return '';
	}

	var basePath = getBasePath();

	function spawnBellParticles(el) {
		var rect = el.getBoundingClientRect();
		var centerX = rect.left + rect.width / 2;
		var centerY = rect.top + rect.height * 0.45;
		var count = 8;

		for (var i = 0; i < count; i++) {
			var p = document.createElement('div');
			p.className = 'bell-particle';

			var angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
			var dist = 32 + Math.random() * 40;
			var dx = Math.cos(angle) * dist;
			var dy = Math.sin(angle) * dist - 8;

			p.style.left = centerX + 'px';
			p.style.top = centerY + 'px';
			p.style.setProperty('--dx', dx + 'px');
			p.style.setProperty('--dy', dy + 'px');

			document.body.appendChild(p);
			setTimeout(
				(function (elem) {
					return function () {
						if (elem.parentNode) elem.parentNode.removeChild(elem);
					};
				})(p),
				700
			);
		}
	}

	function ringBell(el) {
		if (!el) return;

		// Play vanilla Minecraft bell sound with slight pitch variance
		try {
			var pick = bellSounds[Math.floor(Math.random() * bellSounds.length)];
			var audio = new Audio(basePath + pick);
			audio.volume = 0.8;
			// Minecraft bell pitch variation
			audio.playbackRate = 0.94 + Math.random() * 0.12;
			audio.play().catch(function () {});
		} catch (e) {}

		// Visual strike effect
		el.classList.remove('bell-hit');
		void el.offsetWidth; // trigger reflow
		el.classList.add('bell-hit');

		spawnBellParticles(el);
	}

	function initBells() {
		var isRu = document.documentElement.lang !== 'en';
		var tooltipText = isRu ? 'Ударить по колоколу' : 'Ring the bell';

		// All candidate bell elements
		var bells = document.querySelectorAll('.hero-art img, .site-brand img, [data-bell]');

		bells.forEach(function (bell) {
			bell.setAttribute('title', tooltipText);
			bell.style.cursor = 'pointer';

			bell.addEventListener('click', function (e) {
				// If inside brand link, prevent page reload on home page
				var brandLink = bell.closest('.site-brand');
				if (brandLink) {
					var path = window.location.pathname;
					var isHome =
						path === '/' ||
						path === '/' ||
						path.endsWith('/index.html') ||
						path.endsWith('');
					if (isHome) {
						e.preventDefault();
					}
				}
				ringBell(bell);
			});

			bell.addEventListener('animationend', function (e) {
				if (e.animationName === 'bell-strike') {
					bell.classList.remove('bell-hit');
				}
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initBells);
	} else {
		initBells();
	}

	// Expose for external calls
	window.ringBell = ringBell;
})();
