'use strict';

const fs = require('fs');
const path = require('path');
const content = require('./lib/content');
const { renderPage, renderNotFound } = require('./lib/template');

const SITE_ROOT = path.join(__dirname, '..');
const BASE = (process.env.BASE_PATH || '').replace(/\/+$/, '');
const OUT = process.env.OUT_DIR ? path.resolve(SITE_ROOT, process.env.OUT_DIR) : SITE_ROOT;
const TO_ROOT = OUT === SITE_ROOT;

const ASSET_DIRS = ['styles', 'fonts', 'scripts', 'images'];
const ASSET_FILES = ['logo.svg', 'favicon.svg'];

function mkdirp(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

function write(rel, data) {
	const full = path.join(OUT, rel);
	mkdirp(path.dirname(full));
	fs.writeFileSync(full, data);
}

function copyDir(src, dest) {
	mkdirp(dest);
	for (const name of fs.readdirSync(src)) {
		const s = path.join(src, name);
		const d = path.join(dest, name);
		if (fs.statSync(s).isDirectory()) copyDir(s, d);
		else if (s !== d) fs.copyFileSync(s, d);
	}
}

const STALE_BASES = /\/(?:bingo-ranked|bingo-ranked|Bingo-Site-|bingo-site)/g;

function applyBase(text) {
	if (!BASE) return text;
	text = text.replace(STALE_BASES, '');
	return text.replace(
		/(["'(])\/(docs|styles|scripts|fonts|images|logo\.svg|favicon\.svg)/g,
		'$1' + BASE + '/$2'
	);
}

function applyBaseToJs(dir) {
	if (!BASE) return;
	for (const name of fs.readdirSync(dir)) {
		const full = path.join(dir, name);
		if (fs.statSync(full).isDirectory()) applyBaseToJs(full);
		else if (name.endsWith('.js')) fs.writeFileSync(full, applyBase(fs.readFileSync(full, 'utf8')));
	}
}

if (!TO_ROOT && fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
mkdirp(OUT);

const defaultLang = content.defaultLang();
const pages = content.listPages(defaultLang);

for (const page of pages) {
	const html = renderPage(page.slug, defaultLang);
	if (!html) continue;
	write(path.join('docs', page.slug, 'index.html'), applyBase(html));
}

const first = pages[0];
write(
	'docs/index.html',
	'<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=' +
		BASE +
		'/docs/' +
		first.slug +
		'/">'
);

write('404.html', applyBase(renderNotFound(defaultLang)));
write('.nojekyll', '');

if (TO_ROOT) {
	if (BASE) {
		fs.writeFileSync(
			path.join(OUT, 'index.html'),
			applyBase(fs.readFileSync(path.join(SITE_ROOT, 'index.html'), 'utf8'))
		);
		applyBaseToJs(path.join(OUT, 'scripts'));
	}
} else {
	write('index.html', applyBase(fs.readFileSync(path.join(SITE_ROOT, 'index.html'), 'utf8')));
	for (const dir of ASSET_DIRS) {
		copyDir(path.join(SITE_ROOT, dir), path.join(OUT, dir));
	}
	for (const f of ASSET_FILES) {
		fs.copyFileSync(path.join(SITE_ROOT, f), path.join(OUT, f));
	}
	applyBaseToJs(path.join(OUT, 'scripts'));
}

console.log('Built ' + pages.length + ' pages into ' + OUT + (BASE ? ' (base ' + BASE + ')' : ''));