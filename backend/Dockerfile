FROM node:12

WORKDIR /var/www/kalmarenergi

COPY package.json /var/www/kalmarenergi

RUN npm install && npm install -g nodemon

COPY . /var/www/kalmarenergi

EXPOSE 8080

CMD [ "npm", "run", "devstart" ]