# Informações do portal

Para carregar as informações e configurações do portal, pode ser utilizado a requisição abaixo:

<api method="get" uri="/portal/info" />

Retorna as informações do portal.

### Requisição

<tag text="portal-key" type="error"/> Deve ser informando o portal-key via header.

### Resposta

Exemplo:

```json
{
  "extensoes": {},
  "id": "2bf7a0b0d4fe4e1cacd9f62e29f7cb93",
  "ns": "netforce",
  "titulo": "Portal de Teste",
  "situacao": "atv",
  "url_sistema": "http://localhost/park/execute.php?arquivo=app/execute/portal.php",
  "url_logo": "https://static.netforce.com.br/clientes/escunaspirata/logo.png",
  "url_favicon": "https://static.netforce.com.br/clientes/escunaspirata/favicon.png",
  "created_at": "2021-04-06T20:06:22.000Z",
  "updated_at": "2021-04-06T20:06:22.000Z"
}
```