FROM node

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

EXPOSE 4000

CMD [ "yarn", "start" ]
