# Definições

Estrutura de checkouts para ser utilizado nos aplicativos e projetos.

## Adquirentes

 - <check :checked="true"> Getnet
 - <check :checked="false"> Cielo
 - <check :checked="false"> Stone
 - <check :checked="false"> PagSeguro
 - <check :checked="false"> PayPal
 - <check :checked="false"> MercadoPago
 - <check :checked="false"> PicPay
 - <check :checked="false"> Pix

## Registrar uma nova transação

<api method="post" uri="/checkouts/transacoes" />

Registrar uma nova inteção de pagamento para o checkout.

### Requisição

```json
{
	"checkout_id": "5ea91155d36a4b2a84dbb96ec12a46ea",
	"pedido_numero": "123456789",
	"valor": 12.34,
	"cliente": {
		"nome": "Nome do cliente",
		"email": "email@do_cliente.com",
		"telefone": "48999991010",
		"documento_tipo": "cpf",
		"documento_num": "00500100232"
	},
	"endereco": {
		"cep": "88040000",
		"logradouro": "Rua 2 de setembro",
		"numero": "100",
		"bairro": "centro",
		"pais": "bra",
		"estado": "sc",
		"municipio": "florianopolis"
	}
}
```

### Resposta

```json
{
  "status": true,
  "trans_id": "6accb00734664e6995eb92e9d8c561f5",
  "pedido_numero": "123456789",
  "situacao": "REGISTRADO"
}
```

## Confirmar uma transação de pagamento

<api method="post" uri="/checkouts/transacoes/{trans_id}/confirmar" />

Confirmar o pagamento da transação com as informações de pagamento do cartão de credito ou debito.

### Requisição

```json
{
	"forma": "cartao_credito",
	"parcelas": 1,
	"cartao": {
		"numero": "5155901222280001",
		"nome": "Fulano de Teste",
		"bandeira": "Visa",
		"validade": "2025-10",
		"cvv": "123"
	}
}
```

### Resposta

```json
{
  "status": true,
  "trans_id": "6accb00734664e6995eb92e9d8c561f5",
  "pedido_numero": "123456789",
  "situacao": "AUTORIZADO"
}
```