# Node base version
from node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Compile TypeScript
RUN npm run tsc

# Copy app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8082

# Define the Docker image's behavior at runtime
CMD ["node", "./www/server.js"]