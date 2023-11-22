FROM node:20-alpine

WORKDIR /folioport/server

COPY package*.json .

RUN npm install

ENV PORT=5005

EXPOSE 5005

COPY . .

CMD [ "npm", "run", "start" ]