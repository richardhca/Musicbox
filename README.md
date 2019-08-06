# MusicBox

CMPT 470 D1 Project 

How to run:

Optional- You can use password-gen.sh to randomly generate a set of password for the database (by default it's just `password`). However, it is not necessary for testing given docker will only allow local database connections.

1- Go to project root

2- Run `docker-compose build && docker-compose up`

3- Go to http://localhost:8080

#### If your docker is experiencing issues:
If you're running linux and your docker build does not work, you can run `npm install` before running `docker-compose build && docker-compose up`. This will download the node modules before the docker image is built. However, do not try this on macOS as it will download modules that are incompitable with docker.

#### What’s Working:

* User account creation and login

* User profile update

* Uploading:
    * A user can upload up to 10 tracks (max 50mb each)
    * Uploaded tracks are parsed and related album and track entities are created. Processing uploads is quite involved. 

* Media Player
    * We implemented a media player that is able to play tracks uploaded or shared by a user
    * You can make the media player play an entire playlist

* Playlists
    * Users can create, share, and add to playlists (using the + button on the left top of the playlist)
    * Export playlist into m3u files

* Media Management
    * User can delete the entire album, or select multiple albums & tracks to delete.


#### What’s Not Working:

* A playlist share recipient cannot reject a shared playlist



#### Useful TypeORM documentation:

1- Example usage: 
https://github.com/typeorm/typeorm/blob/master/docs/usage-with-javascript.md


2- Available column options:
https://github.com/typeorm/typeorm/blob/master/src/entity-schema/EntitySchemaColumnOptions.ts
