const path = require("path")
const rootpath = path.dirname(__dirname, '..') //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');
// utils.genSidebar('Guide', filehelper.getFileName(rootpath+"/notes/"), false)
// const notes = utils.genSidebar('Guide', filehelper.getFileName(rootpath+"/notes/"), false)
const notes = filehelper.getFileName(rootpath+"/notes/guide", 'guide')
console.log(notes)
module.exports = {
  dest: 'dist',
  theme: 'reco',
  title: "Paradox",
  // description: 'The day is still young, hope to see you around',
  description: 'Hope is a dangerous thing.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'referrer', content: 'never' }],
  ],
  themeConfig: {
    type: 'blog',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Notes', link: '/notes/', icon: 'reco-document' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // { text: 'PhotoAlbum', link: 'https://htwm623.github.io/', icon: 'reco-blog'},
      // { text: 'About', link: '/about/', icon: 'reco-account'},
      { text: 'GitHub', link: 'https://github.com/htwm623/htwm623.github.io', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: 'V2EX',
        desc: 'way to explore',
        avatar: "https://www.v2ex.com/static/img/v2ex@2x.png",
        link: 'https://www.v2ex.com/?r=htwm623'
      },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/notes/': [
        {
          title: '网站导航',
          collapsable: false,
          children: filehelper.getFileName(rootpath+"/notes/guide", 'guide')
        },
        {
          title: '技术笔记',
          collapsable: false,
          children: filehelper.getFileName(rootpath+"/notes/", )
        },
      ],
    },
    lastUpdated: 'Last Updated',
    author: 'Paradox',
    authorAvatar: '/head.png',
    record: '',
    recordLink: '',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',
    startYear: '2017',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true, 
        separator: '-'
      }
    ],
    [
      'meting',
      {
        meting: {
          // server: 'netease', // 音乐源
          // type: 'playlist', // 资源类型
          // mid: '2539599584', // 资源 id
          auto: 'https://y.qq.com/n/yqq/playlist/8104692113.html'
        },
        aplayer: {
          lrcType: 0,
          autoplay: false
        },
      },
    ]
    // [
    //   // https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html
    //   require('./plugins/BgMusic'),
    //   {
    //     audios: [
    //       {
    //         name: 'Secret',
    //         artist: '茶太',
    //         url: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret1.mp3',
    //         cover: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret1.jpg'
    //       },
    //       {
    //         name: '吉祥话',
    //         artist: 'Hanser,yousa,祖娅纳惜,鹿乃',
    //         url: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/ji-xiang-hua.mp3',
    //         cover: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/ji-xiang-hua.jpg'
    //       },
    //       {
    //         name: 'Secret (eclipse改)',
    //         artist: '茶太',
    //         url: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret.mp3',
    //         cover: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret.jpg'
    //       }
    //     ],
        
    //     autoShrink: false, // 自动缩小
    //   }
    // ]
  ]
}  
