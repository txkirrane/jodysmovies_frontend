FROM node

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

EXPOSE 3000

RUN npm run build

CMD npx http-server -p 3000 --proxy http://0.0.0.0:3000? ./dist