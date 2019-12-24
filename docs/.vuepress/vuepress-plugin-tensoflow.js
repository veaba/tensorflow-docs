/***********************
 * @desc 拓展一个插件~
 * @相关开发地址：
 *
 * @author Jo.gel
 * @date 2019/12/24 0024
 ***********************/

module.exports = (options, ctx) => {
	// const {isProd, pages, sourceDir, tempPath, outDir, base, writeTemp} = ctx;
	const {
		// name, plugins, chainWebpack, define,
		// alias, beforeDevServer, afterDevServer, extendMarkdown,
		// chainMarkdown, enhanceAppFiles, clientDynamicModules,
		extendPageData, clientRootMixin, additionalPages,
		globalUIComponents, extendCli
	} = options;
	
	console.info(111, extendPageData);
	console.info(options);
	
	return {
		extendPageData($page) {
			const {
				_filePath,           // 源文件的绝对路径
				_computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
				_content,            // 源文件的原始内容字符串
				_strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
				key,                 // 页面唯一的 hash key
				frontmatter,         // 页面的 frontmatter 对象
				regularPath,         // 当前页面遵循文件层次结构的默认链接
				path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
			} = $page;
			// console.info('111:',$page['themeConfig']);
			// console.info("_filePath:",_filePath);
			// console.info("_computed:",_computed);
			// console.info("key:",key);
			// console.info("regularPath:",regularPath);
			// themeConfig:
			// console.info(111,$page);
			let sidebarItem = $page['_context']['themeConfig']['locales']['/'];
			const {sidebar} = sidebarItem;
			console.info('sidebar：', sidebar);
			
			/*
			 [ { title: 'tf',
       collapsabel: false,
       isExperiment: true,
       children: [Array],
       llda: 1 },
      { title: 'All Symbols', type: 'group', link: '/All_Symbols' } ] }

			* */
		}
	};
};
