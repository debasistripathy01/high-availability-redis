FROM node:20

# Install any necessary dependencies for your Node.js application
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

FROM redis

# Copy your Redis configuration file
COPY clusterconfig.conf /usr/local/redis.conf

CMD ["redis-server", "/usr/local/redis.conf", "npm", "start"]