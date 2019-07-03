FROM node:11-alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn global add serve
COPY src ./src
COPY public ./public
RUN yarn build

EXPOSE 5000

CMD [ "serve", "-s", "build" ]