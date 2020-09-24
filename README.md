# Documentação
Esta API utiliza requisições GET, POST, PUT, DELETE e retorna dados em JSON. Presume-se que todas as requisições feitas pelo cliente contêm dados validos em seus formularios.

```javascript I'm A tab
npm i && npm run start
```
Para executar o projeto.

## API

| Método | URL       | Descrição                                            |
|--------|-----------|------------------------------------------------------|
| GET    | /user     | Retorna todos os usuarios cadastrados. Autenticado.  |
| GET    | /user/:id | Retorna usuario por ID ( login ). Autenticado        |
| POST   | /user     | Cria novo usuario. Autenticado. Master-only.         |
| PUT    | /user     | Edita e salva alteraçoes. Autenticado.               |
| DELETE | /user/:id | Deleta usuario. Autenticado. Master-only.            |


## Exemplo de requisição

### Login
**Enviado:**  Suas credenciais.
**Recebido:** Um `Token` com o qual você mais ações podem ser tomadas. 

**Request:**
```json
POST /login HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "username": "foo",
    "password": "1234567"
    "email":"foo@bar.com" 
}
```


