import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'luolei\'s blog',
    description: '这里是luolei的博客！这里有好玩的瞎折腾的东西，也有系统学习的笔记！',
    theme: defaultTheme({
        logo: '/logo.svg',
        colorMode: 'light',
        colorModeSwitch: false,
        navbar: [
            {
                text: '笔记',
                children: [
                    {
                        text: 'Java',
                        link: '/notebook/java/基础/01-Java概述.md'
                    },
                    {
                        text: '铁路货运员',
                        link: '/notebook/railway/技能鉴定/中级货运员.md'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/luolei200820'
            }
        ],
        sidebar: {
            '/notebook/java/': [
                {
                    text: '基础',
                    collapsible: false,
                    children: [
                        '/notebook/java/基础/01-Java概述.md',
                        '/notebook/java/基础/02-变量.md',
                        '/notebook/java/基础/03-运算符.md'
                    ]
                }
            ],
            '/notebook/railway/': [
                {
                    text: '技能鉴定',
                    collapsible: false,
                    children: [
                        '/notebook/railway/技能鉴定/中级货运员.md',
                        '/notebook/railway/技能鉴定/定职考试.md'
                    ]
                },
                {
                    text: '规章标准',
                    collapsible: false,
                    children: [
                        '/notebook/railway/规章标准/货车篷布管理规则.md'
                    ]
                }
            ]
        }
    })
})