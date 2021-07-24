FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3008

CMD ["node", "src/main.js"]