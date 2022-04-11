#specifying a base image: Nodejs
FROM node:16-alpine

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install

# define the port number the container should expose
EXPOSE 3000

# run the command
CMD node /app.js

