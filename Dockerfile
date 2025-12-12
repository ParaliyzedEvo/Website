FROM php:8.5-apache
RUN a2enmod rewrite alias headers
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-install mbstring zip mysqli pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY . /var/www/html/
RUN chown -R www-data:www-data /var/www/html
RUN echo "display_errors = On" >> /usr/local/etc/php/conf.d/dev.ini \
 && echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/dev.ini \
 && echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/dev.ini
EXPOSE 80