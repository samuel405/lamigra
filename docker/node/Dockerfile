FROM clearlinux/node:16

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]