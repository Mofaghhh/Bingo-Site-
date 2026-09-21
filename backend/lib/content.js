'use strict';

const fs = require('fs');
const path = require('path');
const { render, stripMarkdown } = require('./markdown');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const meta = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'meta.json'), 'utf8'));
const navRaw = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'nav.json'), 'utf8'));

const pageCache = new Map();

function languages() {
	return meta.languages.map((l) => l.code);
}

function defaultLang() {
	return navRaw.defaultLanguage || languages()[0];
}

function normalizeLang(lang) {
	return languages().includes(lang) ? lang : defaultLang();
}

function flatItems() {
	const list = [];
	navRaw.sections.forEach((section) => {
		section.items.forEach((item) => list.push({ sectionId: section.id, item }));
	});
	return list;
}

function getMeta() {
	return meta;
}

function getNav(lang) {
	lang = normalizeLang(lang);
	return {
		lang,
		sections: navRaw.sections.map((section) => ({
			id: section.id,
			title: section.title[lang] || section.title.ru,
			items: section.items.map((item) => ({
				slug: item.slug,
				title: item.title[lang] || item.title.ru,
				description: (item.description && (item.description[lang] || item.description.ru)) || ''
			}))
		}))
	};
}

function listPages(lang) {
	lang = normalizeLang(lang);
	return flatItems().map(({ sectionId, item }) => ({
		slug: item.slug,
		sectionId,
		title: item.title[lang] || item.title.ru,
		description: (item.description && (item.description[lang] || item.description.ru)) || ''
	}));
}

function findNavItem(slug) {
	return flatItems().find(({ item }) => item.slug === slug);
}

function readRaw(lang, slug) {
	const key = lang + '::' + slug;
	if (pageCache.has(key)) return pageCache.get(key);
	const file = path.join(CONTENT_DIR, lang, slug + '.md');
	let raw = '';
	try {
		raw = fs.readFileSync(file, 'utf8');
	} catch (e) {
		const fallback = path.join(CONTENT_DIR, navRaw.defaultLanguage, slug + '.md');
		try {
			raw = fs.readFileSync(fallback, 'utf8');
		} catch (e2) {
			raw = '';
		}
	}
	raw = raw.replace(/^\uFEFF/, '');
	pageCache.set(key, raw);
	return raw;
}

function getPage(lang, slug) {
	lang = normalizeLang(lang);
	const entry = findNavItem(slug);
	if (!entry) return null;
	const raw = readRaw(lang, slug);
	if (!raw) return null;
	const { html, toc } = render(raw);
	return {
		slug,
		lang,
		sectionId: entry.sectionId,
		title: entry.item.title[lang] || entry.item.title.ru,
		description:
			(entry.item.description && (entry.item.description[lang] || entry.item.description.ru)) || '',
		markdown: raw,
		html,
		toc
	};
}

function getPrevNext(lang, slug) {
	lang = normalizeLang(lang);
	const list = flatItems();
	const idx = list.findIndex(({ item }) => item.slug === slug);
	if (idx === -1) return { prev: null, next: null };
	const localize = (entry) =>
		entry
			? { slug: entry.item.slug, title: entry.item.title[lang] || entry.item.title.ru }
			: null;
	return {
		prev: idx > 0 ? localize(list[idx - 1]) : null,
		next: idx < list.length - 1 ? localize(list[idx + 1]) : null
	};
}

function search(lang, query) {
	lang = normalizeLang(lang);
	const q = String(query || '').trim().toLowerCase();
	if (!q) return [];
	const results = [];
	flatItems().forEach(({ sectionId, item }) => {
		const title = item.title[lang] || item.title.ru;
		const description =
			(item.description && (item.description[lang] || item.description.ru)) || '';
		const body = stripMarkdown(readRaw(lang, item.slug));
		const haystack = (title + ' ' + description + ' ' + body).toLowerCase();
		const inTitle = title.toLowerCase().includes(q);
		const at = body.toLowerCase().indexOf(q);
		if (!haystack.includes(q)) return;
		let excerpt = description;
		if (at >= 0) {
			const start = Math.max(0, at - 60);
			excerpt = (start > 0 ? '…' : '') + body.slice(start, at + q.length + 80).trim() + '…';
		}
		results.push({ slug: item.slug, sectionId, title, excerpt, score: inTitle ? 2 : 1 });
	});
	results.sort((a, b) => b.score - a.score);
	return results;
}

module.exports = {
	languages,
	defaultLang,
	normalizeLang,
	getMeta,
	getNav,
	listPages,
	getPage,
	getPrevNext,
	search
};
