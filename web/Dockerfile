FROM node:alpine AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node-builder /app/dist /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]