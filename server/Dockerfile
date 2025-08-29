FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --production --silent && npm cache clean --force;
COPY . .
CMD ["node", "server.js"]
