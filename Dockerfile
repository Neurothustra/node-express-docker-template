FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install -g typescript nodemon eslint
RUN npm install --production
COPY . .
RUN tsc server.ts
RUN tsc index.ts
# ENTRYPOINT bash
CMD npm start