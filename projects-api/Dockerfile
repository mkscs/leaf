FROM alpine:3.16.0
RUN apk update \
  && apk add nodejs \
  && apk add npm \
  && addgroup -S leaf \
  && adduser -S -D -s /sbin/nologin leaf -G leaf


WORKDIR /projects-api

RUN chown -R leaf:leaf /projects-api
USER leaf

COPY projects-api ./

RUN npm install
EXPOSE 5000
CMD ["npm","run-script","run"]



