# Parque

São funções do modulo de portal dos parques

## Consulta Ingresso

Par acarregar as informações de um ingresso, pode ser utilizado a requisição abaixo:

<api method="get" uri="/portal/parque/consulta-ingresso/{ingresso}" />

Retorna as informações do ingresso.

### Requisição

<tag text="portal-key" type="error"/> Deve ser informando o portal-key via header.

### Resposta

Exemplo:

```json
{
  "numero": "53275796",
  "handle": 397,
  "lote": "00162",
  "emissao": "26/09/2012 10:06:53",
  "validade": "26/09/2022 23:59:59",
  "bilheteria": "TESTE",
  "cliente": "NOME DO CLIENTE",
  "modalidade": "NORMAL",
  "situacao": "ATIVO",
  "valor": 15,
  "atracao": "YOUHOO",
  "tipo": "I",
  "tipoStr": "INGRESSO",
  "pulseira": "",
  "extra": -1,
  "extra_val": 0,
  "queimas": [
    {
      "id": "127.0.0.1_LEITURA",
      "data": "26/06/2019 10:27:23",
      "acao": "L",
      "catraca": "127.0.0.1"
    },
    {
      "id": "127.0.0.1_LEITURA",
      "data": "26/06/2019 10:30:35",
      "acao": "L",
      "catraca": "127.0.0.1"
    },
    {
      "id": "127.0.0.1_LEITURA",
      "data": "26/06/2019 10:31:23",
      "acao": "L",
      "catraca": "127.0.0.1"
    },
    {
      "id": "TROCAVOUCHER",
      "data": "03/08/2020 10:35:51",
      "acao": "T",
      "catraca": null
    }
  ]
}
```

## Bilheteria Remota

Algumas funções da bilheteria remota, são possiveis fazer pelo portal, veja a baixo como fazer isso:

### Produtos

Retorna a lista de produtos disponível para o usuário pela data da visita

<api method="get" uri="/portal/parque/bilheteria/produtos" />

### Requisição

Em formato JSON

| atributo   | descrição                                     |
|:-----------|:----------------------------------------------|
| dataVisita | A data da visita para retornar os ingressos disponíveis. No formato yyyy-mm-dd <Badge text="obrigatório"/> |

<tag text="portal-key" type="error"/> Deve ser informando o portal-key via header.

### Resposta

Exemplo:

```json
[
  {
    "id": 2,
    "nome": "Ingresso Adulto",
    "valor": 35,
    "atracao": "Entrada"
  },
  {
    "id": 1,
    "nome": "Ingresso Infantil",
    "valor": 70,
    "atracao": "Entrada"
  },
  {
    "id": 1,
    "nome": "Almoço Adulto",
    "valor": 25,
    "atracao": "Restaurante"
  }
]
```