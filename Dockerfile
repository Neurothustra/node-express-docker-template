FROM node
WORKDIR /app
RUN npm install -g typescript nodemon eslint
COPY . .
# ENTRYPOINT bash
CMD npm start