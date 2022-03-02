# 
# FULL CYCLE Desafios

Esses são alguns dos desafios do curso full cycle [FULL-CYCLE](https://fullcycle.com.br)


## Installation

1) Você precisa instalar o docker [DOCKER](https://www.docker.com/get-started)


## Usage
### Desafio GO
1. Para executar o projeto codeeducation e necessario entrar na pasta /codeeducation e executar os comando abaixo ou ultilizar a imagem [SEYFYROT-CODEEDUCATION](https://hub.docker.com/r/seyfyrot/codeeducation)
```bash
# caso queira criar uma image e executar
docker build -t <nome da imagem> .
docker run --rm <nome da imagem>

# caso queiro usar imagem do repositorio
docker run --rm seyfyrot/codeeducation  

```

### Desafio Node com Nginx e MYSQL
1. Para executar o projeto node e necessario entrar na pasta /desafio-node-nginx/node e executar os comando abaixo.
```bash
docker compose up -d --build
```
2. Note que depois da execução do comando no passo 1 foi criado uma pasta /desafio-node/mysql onde será armazenado a base dados.
3. Depois que pasta foi criada provavelmente os serviços já estão no ar agora e só acessar seu navegador e entra no link [APP](http://localhost:8080)

## Contributing
Solicitações de pull-request são bem-vindas. Para grandes mudanças, abra um problema primeiro para discutir o que você gostaria de mudar.
Certifique-se de atualizar os testes conforme apropriado.

## License
[MIT](https://choosealicense.com/licenses/mit/)