FROM wordpress:5.2-php7.2-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql