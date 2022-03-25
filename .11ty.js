const prism   = require("@11ty/eleventy-plugin-syntaxhighlight");
const mdIt    = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');
const yaml    = require("js-yaml");

module.exports = function(cnf) {

	cnf.addDataExtension("yaml", contents => yaml.load(contents));
	cnf.addDataExtension('yml', contents => yaml.load(contents));
	cnf.addPassthroughCopy('app/assets');
	cnf.addPassthroughCopy('app/js');
	cnf.setUseGitIgnore(true);

	// ? Конфигурация Prism
	cnf.addPlugin(prism, {

    templateFormats: ["*"],

    init: function({ Prism }) {
      Prism.languages.myCustomLanguage = 'md';
    },

    alwaysWrapLineHighlights: true,
    trim: true,
    lineSeparator: "<br>",
    preAttributes: { tabindex: 0 },
    codeAttributes: {}

  });

	// ? Конфигурация BrowserConfig
	cnf.setBrowserSyncConfig({

		server: {
			baseDir: [
				'./dist',
			]
		},
		files: [
			'app/styles/**/*.*',
			'app/scripts/**/*.*'
		],

		ghostMode: false,
		watch: true,
		notify: false,
		ui: false,
		open: true,
		browser: ["chromium-browser"]

	});

	// ? Конфигурация markdown-it
	let markdownLibrary = mdIt({

		html: true,
		breaks: true,
		linkify: true,

		// highlight: function(str, lang) {

		// 	const content = markdownLibrary.utils.escapeHtml(str)

		// 	return lang
		// 		? `<pre data-lang="${lang}"><code>${content}</code></pre>`
		// 		: `<pre>${content}</pre>`

		// }

	}).use(mdAttrs, {
		// optional, these are default options
		leftDelimiter: '{',
		rightDelimiter: '}',
		allowedAttributes: []  // empty array = all attributes are allowed
	});

	cnf.setLibrary('md', markdownLibrary);

	return {

		dir: {
			input: 'app',
			output: 'dist',
			includes: 'njk/includes/',
			layouts: 'njk/layouts/',
			data: "data"
		},

		templateFormats: ['md', 'njk'],
		// markdownTemplateEngine: "njk",
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		jsDataFileSuffix: ".data"

	}

}