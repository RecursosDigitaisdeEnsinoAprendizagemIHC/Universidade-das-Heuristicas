# syntax=docker/dockerfile:

FROM node:14.17.3

RUN mkdir /usr/src/backend/

COPY . /usr/src/backend/

WORKDIR /usr/src/backend

COPY /backend/package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./backend .

CMD ["npm", "start"]