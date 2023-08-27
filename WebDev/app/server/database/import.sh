#! /bin/bash
# Change password to secret (root account)
cd /var/www/html/
mongosh --file db-setup.js --username root --password example
