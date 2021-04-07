# Referência da API - /portal

Esta referência ajuda a implementar a API RESTful NetForce v1. Da aplicação do portal da netforce.

## Portal Key

O POrtal Key é um token id único que serve para identificar o portal na API.

A **portal-key**, deve ser informada em todas as requisições desta API, no headers:

```json
{
    "portal-key": "netforce"
}
```