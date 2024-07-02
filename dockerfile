FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 3000 available to the world outside this container

EXPOSE 3000

# Define environment variable

CMD [ "npm", "run", "dev"]