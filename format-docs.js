
const fs = require('fs');
const path = require('path');

const MAX_LENGTH = 120;
const DOCS_DIR = path.join(__dirname, 'docs');

function wrapLine(line, maxLength) {
	if (line.length <= maxLength) return [line];
	const indentMatch = line.match(/^\s*/);
	const indent = indentMatch ? indentMatch[0] : '';
	// Regex to match markdown links: [text](url)
	const linkRegex = /\[[^\]]+\]\([^\)]+\)/g;
	let links = [];
	let tempLine = line;
	let match;
	// Extract all links and replace them with a placeholder
	while ((match = linkRegex.exec(line)) !== null) {
		links.push(match[0]);
		tempLine = tempLine.replace(match[0], `__LINK${links.length - 1}__`);
	}
	const words = tempLine.trim().split(' ');
	let lines = [];
	let current = '';
	for (const word of words) {
		// If word is a link placeholder, restore the link and keep it together
		let actualWord = word;
		const linkMatch = word.match(/__LINK(\d+)__/);
		if (linkMatch) {
			actualWord = links[parseInt(linkMatch[1], 10)];
		}
		if ((indent + current + actualWord).length + 1 > maxLength) {
			lines.push(indent + current.trim());
			current = '';
		}
		current += actualWord + ' ';
	}
	if (current.trim()) lines.push(indent + current.trim());
	return lines;
}

function isHtmlTag(line) {
	// Single-line HTML tag (e.g., <img ... /> or <div>text</div>)
	const singleTag = /^\s*<[^>]+>.*<\/[^>]+>\s*$|^\s*<[^>]+\/?>\s*$/;
	return singleTag.test(line);
}

function isHtmlBlockStart(line) {
	// Start of a multi-line HTML block (e.g., <div>)
	return /^\s*<([a-zA-Z0-9]+)(\s[^>]*)?>\s*$/.test(line);
}

function isHtmlBlockEnd(line, tagName) {
	// End of a multi-line HTML block (e.g., </div>)
	const re = new RegExp(`^\s*<\/${tagName}>\s*$`);
	return re.test(line);
}

function processFile(filePath) {
	const content = fs.readFileSync(filePath, 'utf8');
	const lines = content.split(/\r?\n/);
	let newLines = [];
	let inCodeBlock = false;
	let inHtmlBlock = false;
	let htmlTagName = '';
	for (let line of lines) {
		if (line.trim().startsWith('```')) {
			inCodeBlock = !inCodeBlock;
			newLines.push(line);
			continue;
		}
		if (inCodeBlock || line.trim().startsWith('    ')) {
			newLines.push(line);
			continue;
		}
		if (inHtmlBlock) {
			newLines.push(line);
			if (isHtmlBlockEnd(line, htmlTagName)) {
				inHtmlBlock = false;
				htmlTagName = '';
			}
			continue;
		}
		if (isHtmlTag(line)) {
			newLines.push(line);
			continue;
		}
		const htmlBlockStartMatch = line.match(/^\s*<([a-zA-Z0-9]+)(\s[^>]*)?>\s*$/);
		if (htmlBlockStartMatch) {
			inHtmlBlock = true;
			htmlTagName = htmlBlockStartMatch[1];
			newLines.push(line);
			continue;
		}
		newLines.push(...wrapLine(line, MAX_LENGTH));
	}
	fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
	console.log('Formatted:', filePath);
}

function walkDir(dir) {
	fs.readdirSync(dir).forEach(file => {
		const fullPath = path.join(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			walkDir(fullPath);
		} else if (file.endsWith('.md') || file.endsWith('.mdx')) {
			processFile(fullPath);
		}
	});
}

walkDir(DOCS_DIR);
console.log('All docs formatted to max', MAX_LENGTH, 'characters per line, skipping code and HTML blocks.');
