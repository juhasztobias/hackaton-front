FROM --platform=linux/arm64 node:lts-slim

WORKDIR /workspace/frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"] 