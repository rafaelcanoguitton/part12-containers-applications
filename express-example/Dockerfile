FROM node:16

WORKDIR /usr/src/app

COPY --chown=node . .

RUN yarn install --frozen-lockfile

ENV DEBUG=playground:*

USER node

CMD npm start