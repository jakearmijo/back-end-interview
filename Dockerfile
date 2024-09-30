FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

ENV NODE_ENV=dev
ENV REDIS_PASSWORD=REDIS_PASSWORD
ENV REDIS_HOST=REDIS_HOST

CMD [ "node", "dist/index.js" ]