FROM node:latest    
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# RUN npm start
# Start server using solution found in video guide