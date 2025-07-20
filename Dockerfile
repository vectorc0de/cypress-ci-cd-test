FROM cypress/browsers

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D wait-on

COPY . .

EXPOSE 5173

CMD ["npm", "run", "start-server-and-test"]
