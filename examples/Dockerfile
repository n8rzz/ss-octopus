FROM keymetrics/pm2:latest-alpine as build

WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080

CMD [ "pm2-runtime", "process.yml" ]
