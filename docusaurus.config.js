const versions = require('./versions.json');
const path = require('path');

module.exports = {
  title: 'imgenius',
  tagline: '让每一个服务/运维商，都成为智慧的团队',
  url: 'https://idongmobility.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iDongMobility', // Usually your GitHub org/user name.
  projectName: 'imgenius-docs', // Usually your repo name.  
  scripts: [    
    '/js/index.js'
  ],
  plugins: [
    path.resolve(__dirname, 'plugins', 'imagezoom')
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig: {    
    zoom: {
      selector: '.markdown img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },    
    navbar: {
      hideOnScroll: true,
      title: 'imgenius',
      logo: {
        alt: 'imgenius Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/简介/概述',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
          items: [
            {
              label: '开发中（待发布）',
              to: 'docs/next/简介/概述',
            },
            {
              label: `${versions[0]}（最新版）`,
              to: 'docs/简介/概述',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/简介/概述`,
            })),
          ],
        },
        {
          to: 'blog',
          label: '博客',
          position: 'left'
        },
        {
          to: 'docs/发布说明/发布记录',
          label: `发布记录`,
          position: 'right',
        },
        {
          href: "http://www.idongmobility.com/index.php/zh/",
          label: "艾动官网",
          position: "right"
        },
        {
          href: 'https://github.com/iDongMobility/imgenius-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '安装',
              to: 'docs/安装/系统要求',
            },
            {
              label: '用户使用手册',
              to: 'docs/用户使用手册/网页端/登录',
            },
            {
              label: '系统配置手册',
              to: 'docs/系统配置手册/授权管理',
            },
            {
              label: '系统维护指南',
              to: 'docs/系统维护指南/运行监控和维护',
            },
            {
              label: '系统扩展指南',
              to: 'docs/系统扩展指南/主页定制扩展开发',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/iDongMobility/imgenius-docs',
            },
            {
              label: '微博',
              href: 'https://weibo.com/idongmobility',
            },
            {
              label: '微信',
              href: 'https://mp.weixin.qq.com/s/eLjZg1xII3Zchg00Z44ZCQ',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/idong-mobility-technologies/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '客户故事',
              href: 'http://www.idongmobility.com/index.php/zh/clients.html',
            },
            {
              label: '联系我们',
              href: 'http://www.idongmobility.com/index.php/zh/about.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 上海艾动信息科技有限公司 Built with Docusaurus.`,
    },
    docs:{
      sidebar:{
        hideable:true,
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/iDongMobility/imgenius-docs/edit/master/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iDongMobility/imgenius-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
