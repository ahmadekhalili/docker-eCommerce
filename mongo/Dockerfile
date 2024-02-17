FROM node:alpine3.18
WORKDIR /app
RUN npm init -y
RUN npm install
RUN npm install -g envsub
COPY .env .
COPY mongo/init.js .
RUN envsub --env-file .env init.js init.js

FROM mongo:4
COPY --from=0 /app/init.js /docker-entrypoint-initdb.d/