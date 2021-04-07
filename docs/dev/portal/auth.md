# Autenticação

Para ser utilizado a api com rotas privadas, você deve acessa-las utilizando um token de usuário. 
Para isso você deve fazer o login na api que irá retornar um access_token.

## Usuário

<api method="get" uri="/portal/auth/usuario" />

Retorna o usuário logado pelo access_token.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`.

### Resposta

| atributo                  | descrição                                    |
|:--------------------------|:---------------------------------------------|
| id                        | ID do usuário no sistema                     |
| nome                      | Nome completo do usuário                     |
| apelido                   | Nome curto do usuário                        |
| email                     | E-mail do usuário para acessar o sistema     |


## Login

<api method="post" uri="/portal/auth/login" />

Responsável por fazer o login de um usuário na estrutura.

### Requisição

Em formato JSON

| atributo  | descrição                                     |
|:----------|:----------------------------------------------|
| usuario   | E-mail do usuário <Badge text="obrigatório"/> |
| senha     | Senha do usuário <Badge text="obrigatório"/>  |

### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| access_token | Código do access token par aser usando nas apis privadas |


## Logout

<api method="post" uri="/portal/auth/logout" />

Responsável por encerrar uma token de acesso do usuário.

### Requisição

<tag text="auth" type="error"/> Somente deve ser executado essa rota sobre um `access_token`

### Resposta

| atributo     | descrição                                                |
|:-------------|:---------------------------------------------------------|
| status       | true                                                     |