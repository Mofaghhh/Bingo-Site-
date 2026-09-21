'use strict';

const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
	html: true,
	linkify: false,
	typographer: false,
	breaks: false
});

function slugify(text) {
	return String(text)
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, '')
		.trim()
		.replace(/\s+/g, '-');
}

md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
	const inline = tokens[idx + 1];
	if (inline && inline.type === 'inline') {
		const text = inline.content.replace(/[*_`]/g, '');
		tokens[idx].attrSet('id', slugify(text));
	}
	return self.renderToken(tokens, idx, options);
};

function makeToken(store, html) {
	const key = 'xGITBOOK' + store.length + 'x';
	store.push({ key, html });
	return '\n\n' + key + '\n\n';
}

function restore(html, store) {
	store.forEach((entry) => {
		html = html.split(entry.key).join(entry.html);
	});
	return html;
}

function renderInner(text) {
	return md.render(text.trim());
}

function extractHints(src) {
	const store = [];
	const hintLabels = {
		warning: 'Warning',
		info: 'Info',
		tip: 'Tip',
		danger: 'Danger',
		note: 'Note'
	};
	const re = /\{%\s*hint\s+style="([^"]+)"\s*%\}([\s\S]*?)\{%\s*endhint\s*%\}/g;
	src = src.replace(re, (m, style, body) => {
		const label = hintLabels[style] || 'Note';
		const html =
			'<div class="admonition admonition-' +
			style +
			'"><p class="admonition-title">' +
			label +
			'</p>' +
			renderInner(body) +
			'</div>';
		return makeToken(store, html);
	});
	return { src, store };
}

function extractSteppers(src) {
	const store = [];
	const stepperRe = /\{%\s*stepper\s*%\}([\s\S]*?)\{%\s*endstepper\s*%\}/g;
	src = src.replace(stepperRe, (m, body) => {
		const steps = [];
		const stepRe = /\{%\s*step\s*%\}([\s\S]*?)\{%\s*endstep\s*%\}/g;
		let s;
		while ((s = stepRe.exec(body)) !== null) {
			steps.push('<li class="docs-step">' + renderInner(s[1]) + '</li>');
		}
		return makeToken(store, '<ol class="docs-steps">' + steps.join('') + '</ol>');
	});
	return { src, store };
}

function preprocess(src) {
	src = src.replace(/^\uFEFF/, '');
	src = src.replace(/^>\s*For the complete documentation index[\s\S]*?\n\n/, '');
	src = src.replace(/\(\/mofagh\/([^)]+?)\.md\)/g, '(/docs/$1/)');
	src = src.replace(/\(\/mofagh\/([^)]+?)\)/g, '(/docs/$1/)');
	src = src.replace(/\(\/docs\/([^)]*?[^\/)\s])\)/g, '(/docs/$1/)');
	return src;
}

function extractToc(html) {
	const toc = [];
	const re = /<h([23])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
	let m;
	while ((m = re.exec(html)) !== null) {
		const text = m[3].replace(/<[^>]+>/g, '').trim();
		toc.push({ level: Number(m[1]), id: m[2], text });
	}
	return toc;
}

function render(markdown) {
	let src = preprocess(markdown);
	const steppers = extractSteppers(src);
	src = steppers.src;
	const hints = extractHints(src);
	src = hints.src;
	let html = md.render(src);
	html = restore(html, hints.store);
	html = restore(html, steppers.store);
	return { html, toc: extractToc(html) };
}

function stripMarkdown(markdown) {
	return preprocess(markdown)
		.replace(/\{%[\s\S]*?%\}/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/[#>*`_|:-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

module.exports = { render, stripMarkdown, slugify };
