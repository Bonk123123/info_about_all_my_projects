FROM node:20-alpine

WORKDIR /folioport/client

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5021

CMD ["npm", "run", "dev"]