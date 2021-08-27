FROM node:14.17.5

Run mkdir -p /app/backend

WORKDIR /app/backend

COPY package*.json ./

RUN npm install
RUN apt-get update && apt-get install -y postgresql-client

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
