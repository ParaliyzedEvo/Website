FROM httpd:latest
RUN sed -i 's/AllowOverride None/AllowOverride All/' /usr/local/apache2/conf/httpd.conf
COPY . /usr/local/apache2/htdocs/
RUN ls -R /usr/local/apache2/htdocs/
EXPOSE 80