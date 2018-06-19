FROM node
WORKDIR /app
COPY ["package*.json", "*.ts", "./"]
RUN npm install -g typescript nodemon eslint
RUN npm install --production --silent && mv node_modules ../
RUN tsc
COPY . .
# ENTRYPOINT bash
CMD npm start