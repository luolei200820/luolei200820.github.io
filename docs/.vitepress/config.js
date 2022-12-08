export default {
    title: 'luolei\'s blog',
    description: '这里是罗磊的博客！这里有好玩的瞎折腾的东西，也有系统学习的笔记！',
    themeConfig: {
        siteTitle: '罗磊的博客',
        logo: '/nerv.svg',
        nav: [
            {
                text: '笔记',
                items: [
                    { text: 'Java', link: '/notebook/java/基础/01-Java概述.md' },
                    // { text: 'JavaScript', link: '/notebook/javascript/' },
                    { text: '铁路货运员', link: '/notebook/铁路货运员/' },
                    { text: 'WebGL', link: '/notebook/webgl/' }
                ]
            },
            // { text: '博客', link: '/blog' },
            { text: 'Github', link: 'https://github.com/luolei200820' }
        ],
        sidebar: {
            '/notebook/java/': [
                {
                    text: 'Java笔记',
                    items: [
                        {
                            text: '基础',
                            items: [
                                { text: 'Java概述', link: '/notebook/java/基础/01-Java概述.md' },
                                { text: '变量', link: '/notebook/java/基础/02-变量.md' },
                                { text: '运算符', link: '/notebook/java/基础/03-运算符.md' }
                            ]
                        },
                    ]
                }
            ],
            '/notebook/铁路货运员': [
                {
                    text: '铁路货运员',
                    items: [
                        { text: '货物运到期限的计算', link: '/notebook/铁路货运员/货物运到期限的计算.md' },
                    ]
                }
            ]
        },
        outlineTitle: '导航',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            message: 'Power by VitePress',
            copyright: 'Copyright &copy; 2022 luolei'
        }
    }
}