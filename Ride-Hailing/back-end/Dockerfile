FROM node:22.9.0
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","run","dev"]