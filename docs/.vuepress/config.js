module.exports = {
	base: '/tensorflow-docs/',
	title: 'MongoDB 中文文档',
	author: "veaba",
	description: '网站描述文档',
	displayAllHeaders: true, // 默认值：false
	// locales:{},//多语言支持 https://vuepress.vuejs.org/zh/guide/i18n.html
	scss: {},
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'Tensorflow中文API文档 rc2.0 API',
			description: 'Google Tensorflow Python CN API Docs'
		},
		// '/en/': {
		// 	lang: 'en-US',
		// 	title: 'Documentation',
		// 	description: 'Vue 驱动的静态网站生成器'
		// }
	},
	themeConfig: {
		repo:"veaba/tensorflow-docs",
		logo:"/images/tensorflow_logo.svg",
		locales:{
			//主站是中文版
			'/':{
				label:"简体中文",
				selectText:"选择语言",
				editLinkText:"在Github上编辑此页",
				nav: require('./nav/zh'),
				sidebar: require('./sidebar/zh')
			},
			// //英文版
			// '/en/':{
			// 	label:"English",
			// 	selectText:"Languages",
			// 	editLinkText:"Edit this page on Github",
			// 	nav: require('./nav/en'),
			// 	sidebar: require('./sidebar/en')
			// }
		},
	},
	// 修改内部webpack的配置
	chinWebpack: (config, isServer) => {
	
	},
	// vuepress-plugin-container 容器
	plugins: [
		// tip
		['container', {
			type: 'tip',
			before: title => `<div class="tip custom-block"> <p class="title">${title}</p>`,
			after: '</div>'
		}],
		['container', {
			type: 'warning',
			before: title => `<div class="warning custom-block"> <p class="title">${title}</p>`,
			after: '</div>'
		}],
		['container', {
			type: 'danger',
			before: title => `<div class="danger custom-block"> <p class="title">${title}</p>`,
			after: '</div>'
		}],
		// require('./vuepress-plugin-tensoflow')
	],
	extraWatchFiles: [
		'.vuepress/nav/en.js',
		'.vuepress/nav/zh.js',
	]
};
