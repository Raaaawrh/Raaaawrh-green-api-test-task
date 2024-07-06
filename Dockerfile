FROM node:22-alpine

LABEL Author="anatolii.farenik@yandex.com"

WORKDIR /app

#~~~~~~~~~~ Copy all files ~~~~~~~~~~#
COPY package.json package-lock.json ./
COPY public ./public/
COPY src ./src/

#~~~~~~~~~~ Install npm packages and build project ~~~~~~~~~~#
RUN npm install &&\
    npm run build

#~~~~~~~~~~ Expose port ~~~~~~~~~~#
EXPOSE 3000

#~~~~~~~~~~ Run node.js server ~~~~~~~~~~#
ENTRYPOINT [ "npm", "run", "start" ]

