FROM node:alpine AS node-builder
WORKDIR /app
COPY . .

RUN npm ci


ENTRYPOINT [ "node", "bin/www" ]