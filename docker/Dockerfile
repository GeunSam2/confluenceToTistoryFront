FROM node:15.14.0

WORKDIR /buildplace
COPY ./ ./
RUN npm ci
RUN npm build
RUN ls -al