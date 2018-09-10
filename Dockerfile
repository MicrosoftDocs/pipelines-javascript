# Create a container image for the NodeJS sample app
# See http://docs.microsoft.com/azure/devops/pipelines/languages/docker for more information
FROM node:boron

# Create app directory
WORKDIR /app

# Copy files
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 3000 80
CMD ["npm", "start"]
