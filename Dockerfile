# syntax=docker/dockerfile:

FROM node:14.17.3

ENV NODE_ENV=production

WORKDIR /backend



RUN npm install --production

COPY . .

CMD ["npm", "start"]