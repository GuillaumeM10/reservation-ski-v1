```
  npm i express dotenv mongoose
  npm i -D nodemon
```

# TODO

- get all posts
- get one post
- creat post
- delete post
- update post

- create booking
- get all booking
- delete booking
- update booking

- creat comment

# Start project (dev)
```bash
docker-compose up -d
npm run start:dev
```
# Clean docker
```bash
docker-compose down
// stop all containers
docker stop $(docker ps -a -q)
// remove all containers
docker rm $(docker ps -a -q)
// remove all images
docker rmi $(docker images -q)
// remove all volumes
docker volume rm $(docker volume ls -q)
```