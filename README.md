# Microservices NestJS Example

Este projeto demonstra uma arquitetura de microserviços utilizando [NestJS](https://nestjs.com/) com comunicação via RabbitMQ. Ele é composto por três serviços principais:

- **api-gateway**: Gateway de API HTTP que orquestra as chamadas para os microserviços.
- **user-service**: Serviço responsável por usuários.
- **product-service**: Serviço responsável por produtos.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Subindo o projeto

Execute o comando abaixo na raiz do projeto para subir todos os serviços (incluindo o RabbitMQ):

```sh
docker-compose up --build
```

- O **api-gateway** ficará disponível em `http://localhost:3000`.
- O painel do **RabbitMQ** estará em `http://localhost:15672` (usuário/senha padrão: guest/guest).

## Testando os endpoints

Com os containers rodando, você pode testar os endpoints:

### Listar usuários

```sh
curl http://localhost:3000/users
```

### Listar produtos

```sh
curl http://localhost:3000/products
```

## Executando os testes

Para rodar os testes unitários e e2e de cada serviço, acesse o diretório do serviço desejado e execute:

```sh
# Exemplo para user-service
cd user-service
npm install
npm run test         # Testes unitários
npm run test:e2e     # Testes end-to-end
```

Repita para `product-service` e `api-gateway` conforme necessário.

## Estrutura do Projeto

```
api-gateway/
product-service/
user-service/
docker-compose.yml
Dockerfile
```

Cada serviço possui seu próprio README com instruções específicas.

## Observações

- Certifique-se de que as portas 3000, 5672 e 15672 estejam livres.
- Para customizar variáveis de ambiente, edite os arquivos `.env` de cada serviço (se existirem).

---

Feito com [NestJS](https://nestjs.com/) e Docker 🐳