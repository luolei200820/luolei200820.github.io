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
                        link: '/notebook/java/basic/introduction.md'
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
                        '/notebook/java/basic/introduction.md',
                        '/notebook/java/basic/variable.md',
                        '/notebook/java/basic/operator.md',
                        '/notebook/java/basic/object-oriented.md',
                        '/notebook/java/basic/inherit.md'
                    ]
                }
            ]
        }
    })
})