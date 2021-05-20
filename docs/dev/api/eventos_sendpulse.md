# Eventos SendPulse

O sistema dispara alguns eventos para as APIs do SendPulse, conforme descrito abaixo:

## Ações de usuário

Quando um usuário esquece uma nova ou precisar confirmar o seu e-mail o sistema dispara um evento contra essa API, com os parâmetros abaixo:

```json
{
    "email"  : "fulano@gmail.com",
    "tipo"   : "chk",
    "nome"   : "Nome Completo",
    "apelido": "Nome curto",
    "token"  : "123456789"
}
```

**Os tipos suportados são:**

 - **chk** - Checar validade do e-mail através do token.
 - **pas** - Receber o token para traocar se senha, quando esqueceu a senha.