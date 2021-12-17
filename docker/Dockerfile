FROM node:15.14.0

WORKDIR /buildplace
COPY ./ ./
RUN npm ci && npm run build

FROM nginx:1.21.4

USER root
COPY --from=0 /buildplace/build/ /usr/share/nginx/html/