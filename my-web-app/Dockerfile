FROM node:18-alpine

WORKDIR /app

COPY pakage*.json ./
RUN npm install
COPY . .

EXPOSE 80

# Start the app
CMD ["npm", "start"]
