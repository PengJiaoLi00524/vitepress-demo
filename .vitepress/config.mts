import { defineConfig } from 'vitepress';
import { set_sidebar } from './utils/index';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/vitepress-demo/',
	head: [['link', { rel: 'icon', href: '/3.jpg' }]],
	title: "peng's docs",
	description: 'A VitePress Site',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		outlineTitle: '目录', //类似大纲
		outline: [2, 6], // 2级标题到6级标题的索引，默认索引二级标题
		logo: '/1.jpg',
		nav: [
			{
				text: 'home',
				items: [
					{ text: '首页', link: '/' },
					{ text: '介绍', link: '/introduce/page_one' },
				],
			},
			{ text: 'examples', link: '/markdown-examples' }, // link 绝对路径
		],
		// 文章页，默认三边栏，右边根据标题生成的，左边是sidebar---vitepress官网
		// 一个一个手写items比较麻烦，可以用脚本自动生成侧边栏
		sidebar: [
			{
				text: 'page_one',
				items: [{ text: 'Markdown 演示', link: '/page_one/vue' }],
			},
			{
				text: 'introduce',
				items: [
					{
						text: 'Markdown 演示',
						link: '/introduce/page_one',
						items: [
							{ text: '安装配置', link: '/introduce/page_one/安装配置' },
							{
								text: '主要功能',
								link: '/introduce/page_one/主要功能',
							},
							{
								text: '主要用途',
								link: '/introduce/page_one/主要用途',
							},
						],
					},
				],
			},
		],
		// sidebar: { '/page_one/vue': set_sidebar('/page_one/vue'), '/introduce/page_one': set_sidebar('/introduce/page_one') },
		// sidebar: false,
		// aside:"left", //设置右侧侧边栏在左侧使用
		// 社交链接，内置的都是国外的，国内只能通过svg设置
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/PengJiaoLi00524' },
			{
				icon: {
					svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>',
				},
				link: 'https://space.bilibili.com/501122856',
			},
		],
		// 设置搜索框的样式
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
						},
					},
				},
			},
		},
		// 底部设置
		footer: {
			message: '仅演示使用',
			copyright: 'Copyright@ 2024.08.21 PENG',
		},
	},
	// 配置markdown扩展
	markdown: {
		lineNumbers: true, // 开启代码块行号
		// options for markdown-it-anchor
		// https://github.com/valeriangalliat/markdown-it-anchor#usage
		// anchor: {
		//   permalink: markdownItAnchor.permalink.headerLink(),
		// },

		// // options for @mdit-vue/plugin-toc
		// // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
		// toc: { level: [2, 3] },
		// config: (md) => {
		//   // use more markdown-it plugins!
		//   md.use(tocPlugin);
		// },
	},
});
