'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const content = require('./lib/content');
const { renderPage, renderNotFound } = require('./lib/template');

const PORT = process.env.PORT || 3000;
const SITE_ROOT = path.join(__dirname, '..');

const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'application/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.ttf': 'font/ttf',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2'
};

function sendJson(res, status, data) {
	const body = JSON.stringify(data);
	res.writeHead(status, {
		'Content-Type': 'application/json; charset=utf-8',
		'Content-Length': Buffer.byteLength(body),
		'Cache-Control': 'no-store'
	});
	res.end(body);
}

function sendHtml(res, status, html, extraHeaders) {
	const headers = Object.assign(
		{
			'Content-Type': 'text/html; charset=utf-8',
			'Content-Length': Buffer.byteLength(html),
			'Cache-Control': 'no-cache'
		},
		extraHeaders || {}
	);
	res.writeHead(status, headers);
	res.end(html);
}

function sendFile(res, filePath) {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('404');
			return;
		}
		res.writeHead(200, {
			'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
			'Content-Length': data.length
		});
		res.end(data);
	});
}

function readCookie(req, name) {
	const header = req.headers.cookie;
	if (!header) return null;
	const parts = header.split(';');
	for (let i = 0; i < parts.length; i++) {
		const kv = parts[i].trim().split('=');
		if (kv[0] === name) return decodeURIComponent(kv[1] || '');
	}
	return null;
}

function resolveLang(req, query) {
	if (query.lang) return content.normalizeLang(query.lang);
	const cookie = readCookie(req, 'lang');
	if (cookie) return content.normalizeLang(cookie);
	return content.normalizeLang(content.defaultLang());
}

function notFoundPage(lang) {
	return renderNotFound(lang);
}

const server = http.createServer((req, res) => {
	const parsed = url.parse(req.url, true);
	const pathname = decodeURIComponent(parsed.pathname);
	const query = parsed.query;

	if (pathname.startsWith('/api/')) {
		const lang = resolveLang(req, query);

		if (pathname === '/api/meta') {
			return sendJson(res, 200, content.getMeta());
		}
		if (pathname === '/api/nav') {
			return sendJson(res, 200, content.getNav(lang));
		}
		if (pathname === '/api/pages') {
			return sendJson(res, 200, { lang, pages: content.listPages(lang) });
		}
		if (pathname === '/api/page') {
			const slug = query.slug || '';
			const page = content.getPage(lang, slug);
			if (!page) return sendJson(res, 404, { error: 'not_found', slug, lang });
			return sendJson(res, 200, { ...page, ...content.getPrevNext(lang, slug) });
		}
		if (pathname === '/api/search') {
			return sendJson(res, 200, {
				lang,
				query: query.q || '',
				results: content.search(lang, query.q || '')
			});
		}
		return sendJson(res, 404, { error: 'unknown_endpoint' });
	}

	const lang = resolveLang(req, query);

	if (pathname === '/docs' || pathname === '/docs/') {
		const first = content.listPages(lang)[0];
		res.writeHead(302, { Location: '/docs/' + (first ? first.slug : '') + '/' });
		return res.end();
	}

	if (pathname.startsWith('/docs/')) {
		const slug = pathname.slice('/docs/'.length).replace(/\/+$/, '').replace(/\.html$/, '');
		if (!slug) {
			const first = content.listPages(lang)[0];
			res.writeHead(302, { Location: '/docs/' + (first ? first.slug : '') + '/' });
			return res.end();
		}
		const html = renderPage(slug, lang);
		if (!html) return sendHtml(res, 404, notFoundPage(lang));
		return sendHtml(res, 200, html);
	}

	let filePath = pathname === '/' ? '/index.html' : pathname;
	const resolved = path.normalize(path.join(SITE_ROOT, filePath));
	if (!resolved.startsWith(SITE_ROOT)) {
		res.writeHead(403);
		return res.end('403');
	}
	if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
		return sendFile(res, resolved);
	}

	return sendHtml(res, 404, notFoundPage(lang));
});

server.listen(PORT, () => {
	console.log('Bingo wiki backend listening on http://localhost:' + PORT);
});
