# BusinessModelDigitalHealthBackend_Algorithm2

## Learned

## Prerequisites
- yarn
- postgres-db with the credentials defined like in src/ormconfig.ts

## Getting Started

- Install dependencies
```
    $ yarn install
```
- Build project
```
    $ yarn build
```

- Start project
```
    $ yarn start
```

## Important commands

- Start nodemon
```
    $ yarn nodemon
```

- Start the transpiles project for production
```
    $ yarn start:prod
```

- Lint the project
```
    $ yarn lint
```

- Create and run db-migration
```
    $ yarn typeorm migration:generate -- -n "database init"
    $ typeorm migration:run
```

- Seed project from scratch (delete data + drop db-schema + run migrations + seed)
```
    $ yarn db:setup
```

## TL;DR

--

## Build with

--

## Acknowledgements

--