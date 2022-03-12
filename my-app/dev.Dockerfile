FROM node:16

WORKDIR /usr/src/app

COPY --chown=node . .

RUN npm install && npm install -g nodemon

USER node

CMD nodemon npm start