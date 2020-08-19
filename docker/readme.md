## Use Docker PHP

-   Para usar o banco de dados dar permissão a pasta database antes de levantar o contêiner.

```sh
    sudo chmod -R 777 docker/database
```

-   Iniciar o contêiner.

```sh
    docker-compose -f "docker/docker-compose.yml" up -d --build
    OR
    bash docker/start.sh
```

-   Para fechar o docker use

```sh
    docker-compose down
    OR
    bash docker/end.sh
```
