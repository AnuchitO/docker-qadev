# Docker for QA DEV

## install dependencies
```
npm install
```

## start application
```
npm run start
```

## run unit test
```
npm run test
```

## run integration test
```
npm run test:integration
```

## build docker image

### build
```
docker build -t docker-qadev:1.0.0 .
```

### run
```
docker run --rm --name docker-qadev  -e API_PORT=4000 -p 4000:4000 docker-qadev:1.0.0
```