# Use the official Node.js 20 image as the base image
FROM node:current-alpine3.20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application files to the working directory
COPY . ./

# Expose port 3000 for the application
EXPOSE 4000

# Command to start the application
CMD ["node", "index.js"]
