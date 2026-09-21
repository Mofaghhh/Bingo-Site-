(function () {
	'use strict';

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

	function apply(lang) {
		if (lang !== 'ru' && lang !== 'en') return;
		document.documentElement.lang = lang;
		document.querySelectorAll('[data-ru][data-en]').forEach(function (el) {
			var value = el.getAttribute('data-' + lang);
			if (value != null) el.textContent = value;
		});
		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
			b.classList.toggle('active', b.getAttribute('data-lang') === lang);
		});
		store(lang);
	}

	document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
		b.addEventListener('click', function (e) {
			e.preventDefault();
			apply(b.getAttribute('data-lang'));
		});
	});

	apply(storedLang());
})();
