FROM node
LABEL name="docker_back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3003
CMD npm start