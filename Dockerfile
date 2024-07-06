FROM node:22-alpine

LABEL Author="anatolii.farenik@yandex.com"

WORKDIR /app

#~~~~~~~~~~ Install packages ~~~~~~~~~~#
COPY package.json package-lock.json ./
RUN npm ic

#~~~~~~~~~~ Build the project ~~~~~~~~~~#
COPY public ./public/
COPY src ./src/

RUN npm run build

#~~~~~~~~~~ Expose port ~~~~~~~~~~#
EXPOSE 3000

#~~~~~~~~~~ Run node.js server ~~~~~~~~~~#
ENTRYPOINT [ "npm", "run", "start" ]

