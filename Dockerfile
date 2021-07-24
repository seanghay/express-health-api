FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3008

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl --fail http://localhost:3008/health" ]

CMD ["node", "src/main.js"]