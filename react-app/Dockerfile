FROM node:12

WORKDIR /usr/src/app

COPY /react-app/package*.json ./

RUN npm i 

#COPY . ./

#RUN npm i

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]