# STEPS

## Demo app
```
npm run start
```

Demo run test
```
npm run test
npm run test:integration
```

## Docker Bashboard
Demo Docker bashboard
1. Go to Docker bashboard : Images
1. Go to Terminal `docker pull anuchito/docker-qadev`
1. Go to Docker bashboard : run it  ==> click on it to see the log
1. Go to Docker bashboard : stop it
1. Go to Docker bashboard : exec  ==> npm run test, npm run test:integration

## Docker in Terminal
Demo in Terminal
1. `docker build -t anuchito/docker-qadev .`
2. `docker run --rm --name todo-app -p 4000:3000 anuchito/docker-qadev`
3. `docker exec -it todo-app /bin/sh`
4. `npm run test`

but we can't run integration test
1. `npm run test:integration`



## Run App with Database
1. `docker build -t docker-qadev .`
1. `docker network create todo.network`

1. start database 

```
    docker run --rm --init --name todo-database \
        --network todo.network --network-alias mysql.todo.net \
        -e MYSQL_ROOT_PASSWORD=secret \
        -e MYSQL_DATABASE=todos \
        mysql:5.7
```

4. start todo app

```   
    docker run --rm --init --name todo-app -p 3000:3000 \
        -w /app  \
        --network todo.network \
        -e MYSQL_HOST=mysql.todo.net \
        -e MYSQL_USER=root \
        -e MYSQL_PASSWORD=secret \
        -e MYSQL_DB=todos \
        docker-qadev \
        sh -c "yarn install && yarn run start"
```

5. clean up network `docker network rm todo.network`

## Run App with docker-compose
1. `docker-compose up`
1. `docker-compose exec app /bin/sh` OR `docker exec -it docker-qadev  /bin/sh`
1. `npm run test`
1. `npm run test:integration`
1. clean up `docker-compose down -v`
