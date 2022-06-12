FROM alpine:3.16.0
RUN apk update \
  && apk add nodejs \
  && apk add npm
WORKDIR /projects-api
COPY projects-api ./
RUN npm install
EXPOSE 5000
CMD ["npm","run-script","run"]



