FROM mongo:latest 
# Lets assume the directory is correct.   
WORKDIR /var/www/html
COPY db-setup.js ./
EXPOSE 27017
#CMD ["mongosh", "--file", "db-setups.js"]
