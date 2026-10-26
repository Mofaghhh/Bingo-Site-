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

	function store(lang) {
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
				if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
					el.setAttribute('placeholder', val);
				} else {
					el.textContent = val;
				}
			}
		});
		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
			b.classList.toggle('active', b.getAttribute('data-lang') === lang);
		});
		store(lang);
	}

	document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
		b.addEventListener('click', function (e) {
			e.preventDefault();
			applyLang(b.getAttribute('data-lang'));
		});
	});

	// --- Interactive Fork Paths ---
	var forkCards = document.querySelectorAll('.fork-card');
	forkCards.forEach(function (card) {
		card.addEventListener('click', function (e) {
			if (e.target.closest('button') || e.target.closest('a')) return;
			forkCards.forEach(function (c) {
				c.classList.remove('active');
			});
			card.classList.add('active');
		});
	});

	// --- Formats Tabs ---
	var formatTabs = document.querySelectorAll('.format-tab-btn');
	var formatPanels = document.querySelectorAll('.format-content-panel');

	formatTabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			var target = tab.getAttribute('data-tab');
			formatTabs.forEach(function (t) {
				t.classList.remove('active');
			});
			formatPanels.forEach(function (p) {
				p.classList.remove('active');
			});
			tab.classList.add('active');
			var panel = document.getElementById('format-panel-' + target);
			if (panel) panel.classList.add('active');
		});
	});

	// --- Registration Modal ---
	var modalOverlay = document.getElementById('reg-modal');
	var closeBtn = document.querySelector('.modal-close-btn');
	var radioOptions = document.querySelectorAll('.modal-radio-option');
	var regForm = document.getElementById('tournament-reg-form');
	var successMsg = document.getElementById('modal-success');
	var selectedPath = 'creator';

	function openModal(defaultPath) {
		if (defaultPath) {
			selectedPath = defaultPath;
			radioOptions.forEach(function (opt) {
				opt.classList.toggle('selected', opt.getAttribute('data-path') === selectedPath);
			});
		}
		if (successMsg) successMsg.style.display = 'none';
		if (regForm) regForm.style.display = 'block';
		if (modalOverlay) {
			modalOverlay.classList.add('open');
			document.body.style.overflow = 'hidden';
		}
	}

	function closeModal() {
		if (modalOverlay) {
			modalOverlay.classList.remove('open');
			document.body.style.overflow = '';
		}
	}

	document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			var path = btn.getAttribute('data-open-modal');
			openModal(path);
		});
	});

	if (closeBtn) {
		closeBtn.addEventListener('click', closeModal);
	}

	if (modalOverlay) {
		modalOverlay.addEventListener('click', function (e) {
			if (e.target === modalOverlay) closeModal();
		});
	}

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeModal();
	});

	radioOptions.forEach(function (opt) {
		opt.addEventListener('click', function () {
			radioOptions.forEach(function (o) {
				o.classList.remove('selected');
			});
			opt.classList.add('selected');
			selectedPath = opt.getAttribute('data-path');
		});
	});

	if (regForm) {
		regForm.addEventListener('submit', function (e) {
			e.preventDefault();
			var nickInput = document.getElementById('reg-nick');
			var discordInput = document.getElementById('reg-discord');
			if (!nickInput || !discordInput) return;

			if (!nickInput.value.trim() || !discordInput.value.trim()) {
				alert(document.documentElement.lang === 'ru' ? 'Пожалуйста, заполните ник и Discord' : 'Please fill in nickname and Discord');
				return;
			}

			regForm.style.display = 'none';
			if (successMsg) successMsg.style.display = 'block';

			setTimeout(function () {
				closeModal();
				regForm.reset();
			}, 3500);
		});
	}

	applyLang(storedLang());
})();
