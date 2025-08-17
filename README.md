## Description

Backend repository built on top of pokeapi.co

## Project setup

1. Create a database and add connection string to DATABASE_URL in your .env file

2. Install dependencies

```bash
$ npm install
```

3. Run migrations using Prisma ORM

```bash
$ npx prisma migrate deploy
$ npx prisma generate
```

## Compile and run the project

See if the solution builds

```bash
$ nest build
```

Start the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
