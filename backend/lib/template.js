'use strict';

const { getMeta, getNav, getPage, getPrevNext, listPages, languages, defaultLang } = require('./content');

function esc(s) {
	return String(s)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function renderSidebar(nav, activeSlug) {
	let out = '';
	nav.sections.forEach((section) => {
		out += '<div class="sidebar-section">';
		out += '<p class="sidebar-title">' + esc(section.title) + '</p><ul>';
		section.items.forEach((item) => {
			const active = item.slug === activeSlug ? ' class="active"' : '';
			out +=
				'<li><a' + active + ' href="/docs/' + item.slug + '/">' + esc(item.title) + '</a></li>';
		});
		out += '</ul></div>';
	});
	return out;
}

function renderToc(toc, label) {
	if (!toc.length) return '';
	let out = '<p class="sidebar-title">' + esc(label) + '</p><ul>';
	toc.forEach((h) => {
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

function renderPagination(prevNext, ui) {
	let out = '';
	if (prevNext.prev) {
		out +=
			'<a class="prev" href="/docs/' +
			prevNext.prev.slug +
			'/"><span class="page-label">' +
			esc(ui.previous) +
			'</span><span class="page-title">' +
			esc(prevNext.prev.title) +
			'</span></a>';
	} else {
		out += '<span></span>';
	}
	if (prevNext.next) {
		out +=
			'<a class="next" href="/docs/' +
			prevNext.next.slug +
			'/"><span class="page-label">' +
			esc(ui.next) +
			'</span><span class="page-title">' +
			esc(prevNext.next.title) +
			'</span></a>';
	}
	return out;
}

function renderLangSwitch(lang, meta) {
	let out = '<div class="lang-switch" role="group" aria-label="Language">';
	meta.languages.forEach((l) => {
		out +=
			'<button type="button" data-lang="' +
			l.code +
			'"' +
			(l.code === lang ? ' class="active"' : '') +
			'>' +
			esc(l.short) +
			'</button>';
	});
	return out + '</div>';
}

function buildData(slug) {
	const meta = getMeta();
	const langs = languages();
	const data = {
		slug,
		defaultLanguage: defaultLang(),
		languages: langs,
		brand: meta.brand,
		ui: meta.ui,
		nav: {},
		page: {},
		prevNext: {}
	};
	langs.forEach((lang) => {
		const nav = getNav(lang);
		data.nav[lang] = {
			sections: nav.sections.map((s) => ({
				title: s.title,
				items: s.items.map((i) => ({ slug: i.slug, title: i.title }))
			}))
		};
		const page = getPage(lang, slug);
		if (page) {
			data.page[lang] = {
				title: page.title,
				description: page.description,
				html: page.html,
				toc: page.toc
			};
		}
		data.prevNext[lang] = getPrevNext(lang, slug);
	});
	return data;
}

function renderPage(slug, initialLang) {
	const meta = getMeta();
	const langs = languages();
	let lang = langs.includes(initialLang) ? initialLang : defaultLang();
	const data = buildData(slug);
	if (!data.page[lang]) {
		const alt = langs.find((l) => data.page[l]);
		if (!alt) return null;
		lang = alt;
	}
	data.initialLang = lang;
	const ui = meta.ui[lang];
	const page = data.page[lang];
	const nav = data.nav[lang];
	const prevNext = data.prevNext[lang];
	const first = listPages(lang)[0];
	const docsHref = '/docs/' + (first ? first.slug : slug) + '/';
	const json = JSON.stringify(data).replace(/</g, '\\u003c');

	return `<!doctype html>
<html lang="${lang}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${esc(page.title)} — ${esc(meta.brand.name)}</title>
		<meta name="description" content="${esc(page.description)}" />
		<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		<link rel="stylesheet" href="/styles/minecraftUI.css" />
		<link rel="stylesheet" href="/styles/global.css" />
		<link rel="stylesheet" href="/styles/site.css" />
	</head>
	<body data-page="${esc(slug)}">
		<div class="aurora-bg"></div>
		<div class="grid-bg"></div>

		<div class="docs-shell">
			<header class="docs-header">
				<a class="site-brand" href="/">
					<img src="/logo.svg" alt="${esc(meta.brand.name)}" />
					<span class="brand-name">${esc(meta.brand.name)}</span>
				</a>
				<div class="header-tools">
					<button class="menu-toggle" type="button" data-menu-toggle aria-label="Menu" aria-expanded="false"><span></span></button>
					<a class="minecraft-button" data-docs href="${docsHref}">${esc(ui.docs)}</a>
					${renderLangSwitch(lang, meta)}
				</div>
			</header>

			<div class="docs-sidebar-backdrop" data-menu-close></div>

			<div class="docs-layout">
				<aside class="docs-sidebar">${renderSidebar(nav, slug)}</aside>

				<article class="docs-content">
					${page.html}
					<div class="docs-pagination">${renderPagination(prevNext, ui)}</div>
				</article>

				<aside class="docs-toc">${renderToc(page.toc, ui.onThisPage)}</aside>
			</div>

			<footer class="site-footer">
				<div class="footer-inner">
					<span class="footer-brand">${esc(meta.brand.name)}</span>
					<span class="footer-brand">${esc(ui.footerNote)}</span>
					<a class="footer-brand footer-link" href="/docs/legal/">${esc(ui.legal)}</a>
				</div>
			</footer>
		</div>
		<script id="wiki-data" type="application/json">${json}</script>
		<script src="/scripts/wiki.js" defer></script>
	</body>
</html>`;
}

function renderNotFound(lang) {
	const meta = getMeta();
	const ui = meta.ui[lang] || meta.ui[defaultLang()];
	return `<!doctype html>
<html lang="${lang}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${esc(ui.notFound)} — ${esc(meta.brand.name)}</title>
		<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		<link rel="stylesheet" href="/styles/minecraftUI.css" />
		<link rel="stylesheet" href="/styles/global.css" />
		<link rel="stylesheet" href="/styles/site.css" />
	</head>
	<body>
		<div class="aurora-bg"></div>
		<div class="grid-bg"></div>
		<div class="docs-shell">
			<div class="docs-content" style="max-width:720px;margin:12vh auto;text-align:center;">
				<h1>${esc(ui.notFound)}</h1>
				<p>${esc(ui.notFoundText)}</p>
				<p><a class="minecraft-button" href="/">${esc(ui.backHome)}</a></p>
			</div>
		</div>
	</body>
</html>`;
}

module.exports = { renderPage, renderNotFound };
