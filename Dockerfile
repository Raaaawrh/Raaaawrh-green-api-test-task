FROM node:22-alpine

LABEL Author="anatolii.farenik@yandex.com"

WORKDIR /opt/app

#~~~~~~~~~~ Copy all files ~~~~~~~~~~#
COPY package.json package-lock.json ./
COPY public ./public/
COPY src ./src/
COPY .env .

#~~~~~~~~~~ Change the user to node for security purpose ~~~~~~~~~~#
RUN chown -R node:node .
USER node

#~~~~~~~~~~ Install packages & Build the project ~~~~~~~~~~#
RUN npm ic && \
    npm run build

#~~~~~~~~~~ Expose port ~~~~~~~~~~#
EXPOSE 3000

#~~~~~~~~~~ Run node.js server ~~~~~~~~~~#
ENTRYPOINT [ "npm", "run", "start" ]

