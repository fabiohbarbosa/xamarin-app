[ ![Codeship Status for gswteam/xamarin-app](https://codeship.com/projects/d5a7cb60-6f24-0134-a04a-4eee7f819805/status?branch=master)](https://codeship.com/projects/178021)

## URIs

API foi hospedada no Heroku, usando MLabs para armazenar os dados no Mongo. Todos serviços estão presentes em: http://gsw-xamarin-app.herokuapp.com/

---

### EMAIL
#### POST /api/email
Cadastrar e-mail para o sorteio.

##### Request
```json
{
  "email": "example@linux.com"
}
```

##### Response
Http Status
```
204: Sucesso
401: Duplicado
500: Erro Inesperado
```

---

#### DELETE /api/email
Deletar todos e-mail cadastrados.

##### Response
Http Status
```
204: Sucesso
500: Erro Inesperado
```

---

### RAFFLE
#### POST /api/raffle

Efetuar sorteio.

##### Response
Body
```json
{
  "id": "ObjectId(UUID)",
  "email": "example@linux.com"
}
```

Http Status
```
204: Sucesso
500: Erro Inesperado
```

---

#### GET /api/raffle

Retorna o e-mail sorteado.

##### Response
Body
```json
{
  "id": "ObjectId(UUID)",
  "email": "example@linux.com"
}
```

Http Status
```
200: Sucesso
403: Sorteio não Efetuado
500: Erro Inesperado
```

---

#### DELETE /api/raffle
Cancelar o sorteio.

##### Response
Http Status
```
204: Sucesso
500: Erro Inesperado
```
