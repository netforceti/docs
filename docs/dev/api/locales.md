# Locales (i18n)

Abaixo será mostrado a estrutura dos locales (i18n).

Na pasta de locales, teremos as bibliotecas de linguagem, nisso deveremos ter algo parecido com a estrutura abaixo:

 - /locales

  - /pt_br
   - /index.js
   - /auth.js
   - /pessoas.js
   - /financeiro.js

  - /en
   - /index.js
   - /auth.js
   - /pessoas.js
   - /financeiro.js

  - index.js

# Estrutura base do index.js da linguagem

/pt_br/index.js
```json
{
    // Definições
    "general": {
        "label": "Português (Brasil)",
        "version": "1.0.0",
        "contributors": [
            "Bruno Gonçalves",
            "Tiago Gonçalves"
        ]
    },

    // Módulos
    "auth"    : require("./auth.js"),
    "pessoas" : require("./pessoas.js"),
}
```

# Estrutura de um arquivo de módulo

/pt_br/auth.js
```json
{
    "msg": {
        // Erros
        "senha_invalida": "Senha inválida",
        "usuario_incorreto": "Usuário ou senha incorreto",

        // Info
        "email_enviado": "E-mail enviado com sucesso"
    },

    "sidebar": {
        "usuarios" : "Usuários",
        "grupos"   : "Grupos de segurança",
        "seguranca": "Permissões de segurança"
    },

    "pages": {
        // Labels
        "email": "E-mail",
        "email_placeholder": "Informe o seu e-mail",
        "senha": "Senha",
        "senha_placeholder": "Informe a sua senha",

        // Outros
        "login_subtitle": "Informe suas credenciais nso campos abaixo",
        "resetpassword_subtitle": "Informe o seu e-mail para enviarmos as instituições para reiniciar a senha"
    }
}
```