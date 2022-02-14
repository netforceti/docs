# Eventos

## Definição

Os eventos são disparados de forma sincrona (utilizando o sync/await).

## Eventos

### Auth

| Evento                                       | Descrição                                                                   | Parâmetros                               |
|:---------------------------------------------|:----------------------------------------------------------------------------|:-----------------------------------------|
| event.usuario.tentativa.login                | Disparado quando na ação de login antes da verificação das credenciais      |  email, inquilino                        |
| event.usuario.logado                         | Disparado quando na ação de login é bem sucedidade                          |  usuario, usuario.token                  |
| event.usuario.logout                         | Disparado quando na ação de logout é bem sucedidade                         |  accessToken                             |
| event.usuario.esqueci.senha                  | Disparado após ser registrado a ação para notificar o usuario sobre a senha |  usuario.acao, tipo.notificacao          |
| event.usuario.senha.alterada                 | Disparado após alterado a senha do usuario                                  |  usuario                                 |