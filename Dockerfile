FROM nginx:stable-alpine

COPY build /usr/share/nginx/html

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
