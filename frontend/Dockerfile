FROM node:14.17.5

WORKDIR /app

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]