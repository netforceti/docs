module.exports = {
    title: 'NetForce',
    description: 'Documentação e helpers das aplicações NetForce.',
    head: [
        ['link', { rel: "shortcut icon", href: "https://static.textilnaweb.com/imgs/favicon_wire.png"}],
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
        ],
        nav: [
            { text: 'Guia',             link: '/main.md' },
            { text: 'NetForce',         link: 'http://www.netforce.com.br' },
        ]
    }
 }
