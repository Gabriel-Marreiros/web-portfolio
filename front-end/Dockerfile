FROM node:18-alpine

EXPOSE 5173

# ARG API_URL

# ENV API_URL=${API_URL}

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g pm2

CMD ["pm2", "serve", "dist", "5173", "--no-daemon", "--spa"]

MAINTAINER gabrielmarreiros.com.br