FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g nodemon && npm install
COPY . .
CMD ["nodemon"]
EXPOSE 3001
