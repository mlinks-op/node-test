# Use the official Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app source code
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
peter@peter:~/node-demo$

