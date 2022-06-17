FROM alpine:3.16.0
RUN apk update \
  && apk add nodejs \
  && apk add npm \
  && addgroup -S leaf \
  && adduser -S -D -s /sbin/nologin leaf -G leaf

WORKDIR /docs-api
RUN  chown -R leaf:leaf /docs-api
USER leaf
COPY docs-api ./

RUN npm install
EXPOSE 5001
CMD ["npm","run-script","run"]
 

    
