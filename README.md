<h1>Music App</h1>
<p>Приложение подобное яндекс музыке со своим API</p>

<p>Пока что бекенд монолитный, но по мере роста проекта все будет перенесено на микросервисы </p>

Аутентификация
Юзеры
Плейлисты
Треки
Исполнители

<h1>Stack</h1>

<h2>Frontend: </h2>

1. React / Next.js
2. MobX
3. TypeScript
4. Scss
5. TailwindCSS / Bootstrap5.3 + shadcn/ui
6. Vite
7. Axios
8. Bytescale API

<h2>Backend: </h2>

1. Nest.JS
2. TypeScript
3. RabbitMQ
4. Redis
5. Telegram API
6. Analytics API
7. PostgreSQL
8. Sequalize (ORM)
   
<h2>FullStack:</h2>

1. Docker + Docker compose
2. Digital ocean / aws
3. CI/CD
4. Unit Testing

<h1>Запуск и установка зависимостей</h1>
<h2>Frontend</h2>

Нужно иметь установленный Node.JS, если вы запускаете проект без докера.

 Переходим в директорию с клиентским приложением, устанавливаем зависимости, и запускам дев-сборку. Для билда продакшена, загляните в "package.json"
```
   npm i
   npm run dev
```

<h2>Backend</h2>

Нужно иметь установленный PostgreSQL и Redis, если вы запускаете проект без докера.
Но я советую поднимать БД и Кэши в Docker'e

```
npm i
npm run start:dev
```

<h2>Docker</h2>
<p>* пока что здесь только бекенд</p>

```
cd ./backend

docker-compose build
docker-compose up
```

<p>Frontend запускается пока что только через NodeJS, установленный на ПК</p>

<h2>Прочее</h2>
<p>Покрываю не весь код комментариями, только основные моменты и достаточно тяжелые моменты. ( скоро будет написание тестов на беке и воможно на фронтенде )</p>

<p>Скоро maybe буду покрывать код юнит тестами, как фронтенд, так и бекенд</p>
