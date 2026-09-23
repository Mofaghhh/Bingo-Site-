(function () {
	'use strict';

	var el = document.getElementById('wiki-data');
	if (!el) return;
	var data;
	try {
		data = JSON.parse(el.textContent);
	} catch (e) {
		return;
	}
	if (!data || !data.slug) return;

	var rendered = data.initialLang;

	function esc(s) {
		return String(s == null ? '' : s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function buildSidebar(nav, activeSlug) {
		var out = '';
		nav.sections.forEach(function (section) {
			out +=
				'<div class="sidebar-section"><p class="sidebar-title">' +
				esc(section.title) +
				'</p><ul>';
			section.items.forEach(function (item) {
				var active = item.slug === activeSlug ? ' class="active"' : '';
				out +=
					'<li><a' + active + ' href="/Bingo-Site-/docs/' + item.slug + '/">' + esc(item.title) + '</a></li>';
			});
			out += '</ul></div>';
		});
		return out;
	}

	function buildToc(toc, label) {
		if (!toc || !toc.length) return '';
		var out = '<p class="sidebar-title">' + esc(label) + '</p><ul>';
		toc.forEach(function (h) {
			out +=
				'<li><a class="' +
				(h.level === 3 ? 'sub' : '') +
				'" href="#' +
				h.id +
				'">' +
				esc(h.text) +
				'</a></li>';
		});
		return out + '</ul>';
	}

	function buildPagination(prevNext, ui) {
		var out = '';
		if (prevNext && prevNext.prev) {
			out +=
				'<a class="prev" href="/Bingo-Site-/docs/' +
				prevNext.prev.slug +
				'/"><span class="page-label">' +
				esc(ui.previous) +
				'</span><span class="page-title">' +
				esc(prevNext.prev.title) +
				'</span></a>';
		} else {
			out += '<span></span>';
		}
		if (prevNext && prevNext.next) {
			out +=
				'<a class="next" href="/Bingo-Site-/docs/' +
				prevNext.next.slug +
				'/"><span class="page-label">' +
				esc(ui.next) +
				'</span><span class="page-title">' +
				esc(prevNext.next.title) +
				'</span></a>';
		}
		return out;
	}

	function firstSlug(lang) {
		var nav = data.nav[lang];
		if (nav && nav.sections.length && nav.sections[0].items.length) {
			return nav.sections[0].items[0].slug;
		}
		return data.slug;
	}

	function markActive(lang) {
		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
			b.classList.toggle('active', b.getAttribute('data-lang') === lang);
		});
	}

	function store(lang) {
		try {
			localStorage.setItem('lang', lang);
		} catch (e) {}
		document.cookie = 'lang=' + lang + '; Path=/; Max-Age=31536000; SameSite=Lax';
	}

	function render(lang) {
		var page = data.page[lang];
		if (!page) return;
		var ui = data.ui[lang];
		var sidebar = document.querySelector('.docs-sidebar');
		var article = document.querySelector('.docs-content');
		var toc = document.querySelector('.docs-toc');
		if (sidebar) sidebar.innerHTML = buildSidebar(data.nav[lang], data.slug);
		if (article) {
			article.innerHTML =
				page.html + '<div class="docs-pagination">' + buildPagination(data.prevNext[lang], ui) + '</div>';
		}
		if (toc) toc.innerHTML = buildToc(page.toc, ui.onThisPage);
		document.title = page.title + ' — ' + data.brand.name;
		document.documentElement.lang = lang;
		var docsBtn = document.querySelector('[data-docs]');
		if (docsBtn) docsBtn.setAttribute('href', '/Bingo-Site-/docs/' + firstSlug(lang) + '/');
		rendered = lang;
		markActive(lang);
		store(lang);
	}

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
		return null;
	}

	var stored = storedLang();
	if (stored && stored !== rendered && data.page[stored]) {
		var y = window.scrollY;
		render(stored);
		window.scrollTo(0, y);
	}

	document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
		b.addEventListener('click', function (e) {
			e.preventDefault();
			var lang = b.getAttribute('data-lang');
			if (!lang || lang === rendered || !data.page[lang]) return;
			var y = window.scrollY;
			render(lang);
			window.scrollTo(0, y);
		});
	});
})();
