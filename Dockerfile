FROM alpine:3.14

RUN apk update && apk upgrade && apk add bash \
supervisor \
nodejs \
npm \
curl \
nginx \
openrc \
vim

RUN openrc
RUN touch /run/openrc/softlevel
#RUN chmod 777 /run/openrc/softlevel

ARG NODE_ENV=prod

WORKDIR /var/www

COPY . .
COPY docker/nginx/nginx.conf /etc/nginx
COPY docker/nginx/conf.d/server.conf /etc/nginx/http.d
COPY docker/supervisor/supervisord.conf /etc
COPY docker/supervisor/supervisor.d /etc/supervisor.d

RUN if [ ${NODE_ENV} = "prod" ]; then \
rm /etc/supervisor.d/node-dev.ini; \
else \
rm /etc/supervisor.d/node.ini; \
fi

RUN if [ ${NODE_ENV} = "prod"]; then \
npm install --production; \
else \
npm install; \
fi

CMD ["supervisord", "-c", "/etc/supervisord.conf"]