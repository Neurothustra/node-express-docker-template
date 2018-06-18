FROM node
WORKDIR /app
RUN npm install -g typescript nodemon
COPY . .
# ENTRYPOINT bash
CMD npm start