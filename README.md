# MusicBox

CMPT 470 D1 Project 

How to run:

1- Go to project root

2- Run `npm install`

3- Run `node ./bin/www`

4- Go to http://localhost:3000


NOTE: If you don't have mongo running locally. You can use a hosted DB on the cloud and change the connection string in app.js:
```
// mongodb connection
mongoose.connect("mongodb://localhost:27017/musicbox");
```
test branch

Docker:
    Build:
    docker build -t yiminz/musicbox
    Check images list:
    docker images
    It should be in the docker images list if build successfully.
    Run the image:
    docker run yiminz/musicbox
    Go to http://localhost:8080