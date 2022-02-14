# Eventos

## Definição

Os eventos são disparados de forma sincrona (utilizando o `sync/await`).

## Legenda
 - [s] : string
 - [o] : objetos

## Auth

| Evento                                           | Descrição                                                                   | Parâmetros                               |
|:-------------------------------------------------|:----------------------------------------------------------------------------|:-----------------------------------------|
| **event.usuario.tentativa.login**                | Disparado quando na ação de login antes da verificação das credenciais      |  email [s], inquilino [s]                |
| **event.usuario.logado**                         | Disparado quando na ação de login é bem sucedidade                          |  usuario [o], usuario.token [o]          |
| **event.usuario.logout**                         | Disparado quando na ação de logout é bem sucedidade                         |  accessToken [s]                         |
| **event.usuario.esqueci.senha**                  | Disparado após ser registrado a ação para notificar o usuario sobre a senha |  usuario.acao [o], tipo.notificacao [s]  |
| **event.usuario.senha.alterada**                 | Disparado após alterado a senha do usuario                                  |  usuario [o]                             |