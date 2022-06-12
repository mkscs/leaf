FROM alpine:3.16.0
RUN apk update \
  && apk add nodejs \
  && apk add npm
WORKDIR /docs-api
COPY docs-api ./
RUN npm install
EXPOSE 5001
CMD ["npm","run-script","run"]
 

    
