# MusicBox

CMPT 470 D1 Project 

How to run:

Optional- You can use password-gen.sh to randomly generate a set of password for the database (by default it's just `password`). However, it is not necessary for testing given docker will only allow local database connections.

1- Go to project root

2- Run `docker-compose build && docker-compose up`

3- Go to http://localhost:3000

#### If your docker is experiencing issues:
If you're running linux and your docker build does not work, you can run `npm install` before running `docker-compose build && docker-compose up`. This will download the node modules before the docker image is built. However, do not try this on macOS as it will download modules that are incompitable with docker.

#### Useful TypeORM documentation:

1- Example usage: 
https://github.com/typeorm/typeorm/blob/master/docs/usage-with-javascript.md


2- Available column options:
https://github.com/typeorm/typeorm/blob/master/src/entity-schema/EntitySchemaColumnOptions.ts
