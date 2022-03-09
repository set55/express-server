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
RUN mkdir -p /var/www/supervisor/log/
RUN touch /var/www/supervisor/log/nginx.log
RUN touch /var/www/supervisor/log/nginx_err.log
RUN touch /var/www/supervisor/log/node.log
RUN touch /var/www/supervisor/log/node_err.log

COPY . .
COPY ./nginx/nginx.conf /etc/nginx
COPY ./nginx/conf.d/server.conf /etc/nginx/http.d
COPY ./supervisor/supervisord.conf /etc
COPY ./supervisor/supervisor.d /etc/supervisor.d

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