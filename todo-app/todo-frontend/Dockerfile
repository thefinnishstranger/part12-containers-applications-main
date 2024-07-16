FROM node:20 AS build

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm test

RUN npm run build

FROM node:20 AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build ./build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "build"]
