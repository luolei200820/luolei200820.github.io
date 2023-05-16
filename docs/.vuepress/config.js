import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'

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
                        link: '/notebook/java/basic/第1章-Java概述.md'
                    },
                    {
                        text: 'CTF',
                        link: '/notebook/CTF/1-Web.md'
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
                        '/notebook/java/basic/第1章-Java概述.md',
                        '/notebook/java/basic/第2章-变量.md',
                        '/notebook/java/basic/第3章-运算符.md',
                        '/notebook/java/basic/第4章-面向对象.md',
                        '/notebook/java/basic/第5章-继承.md',
                        '/notebook/java/basic/第6章-接口、lambda表达式与内部类.md'
                    ]
                }
            ]
        }
    }),
    bundler: viteBundler({
        viteOptions: {
            server: {
                host: 'localhost'
            }
        },
    })
})