FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g typescript nodemon
RUN npm install --production
COPY . .
RUN tsc index.ts
RUN tsc server.ts
COPY . .
# ENTRYPOINT bash
CMD npm start