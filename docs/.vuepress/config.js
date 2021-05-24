module.exports = {
    title: 'NetForce',
    description: 'Documentação e helpers das aplicações NetForce.',
    head: [
        ['link', { rel: "shortcut icon", href: "https://www.netforce.com.br/img/favicon.png"}],
    ],
    locales: {
        '/': {
            lang: 'pt-BR',
        },
    },
    themeConfig: {
        repo: 'netforceti/docs',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'main',
        editLinkText: 'Edite essa página no Github',
        lastUpdated: 'Última atualização',
        sidebar: [
            { title: "Guia", children: [
                "/main.md"
            ] },
            { title: "Desenvolvimento", children: [
                "/dev/",
                "/dev/erros.md",
                "/dev/sdk.md",                
                
                { title: "Aplicativos", children: require('../dev/api/config.js') },
                { title: "Theme", children: require('../dev/theme/config.js') },
                
            ] },
        ],
        nav: [
            { text: 'Guia',             link: '/main.md' },
            { text: 'Desenvolvimento',  link: '/dev/' },
            { text: 'NetForce',         link: 'http://www.netforce.com.br' },
        ]
    }
 }
