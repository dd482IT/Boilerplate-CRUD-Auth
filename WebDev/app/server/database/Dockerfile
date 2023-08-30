FROM mongo:latest 
# Lets assume the directory is correct.   
WORKDIR /var/www/html
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD example
#COPY db-setup.js ./
CMD ["mongosh", "--file", "db-setups.js", "--username", "root", "--password", "example"]
