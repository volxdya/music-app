# Какая-то ошибка с bcrypt зависимостями. Чуть позже фикс будет
FROM node:20.17.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./dist ./dist
CMD [ "npm", "run", "start:dev" ]