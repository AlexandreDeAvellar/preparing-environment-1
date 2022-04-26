FROM node:17

WORKDIR /src

COPY package.json .

COPY .env .

RUN npm install --only=prod
