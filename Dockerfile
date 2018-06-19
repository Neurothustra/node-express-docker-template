FROM node
WORKDIR /src
COPY package*.json ./
RUN npm install -g typescript nodemon eslint
RUN npm install --production
# RUN tsc server.ts index.ts
COPY . .
# ENTRYPOINT bash
CMD npm start