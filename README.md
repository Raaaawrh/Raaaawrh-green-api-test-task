# Green API Test Task

В этом репозитории представлен исходный код тестового задания для представителей компании [Green API](https://green-api.com/).
|       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- |
|Стек:| <img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="40px" height="40px">| <a href="https://react.dev/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="40px" height="40px"></a> | <a href="https://www.npmjs.com/" title="NPM"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="NPM" width="40px" height="40px"></a> | <a href="https://www.docker.com/" title="Docker"><img src="https://github.com/get-icon/geticon/raw/master/icons/docker.svg" alt="NPM" width="40px" height="40px"></a>|

Страница доступна на хостинге [Github Pages](https://Raaaawrh.github.io/green-api-test-task/).

## Задачи

Требуется создать веб-страницу, в которой будут реализованы следующие методы Green API:

- [getSettings](https://green-api.com/docs/api/account/GetSettings/)
- [getStateInstance](https://green-api.com/docs/api/account/GetStateInstance/)
- [sendMessage](https://green-api.com/docs/api/sending/SendMessage/)
- [sendFileByUrl](https://green-api.com/docs/api/sending/SendFileByUrl/)

Пользователь вводит свои данные свои IDInstance, APITokenInstance в соответсвующие защищенные поля и может вызывать методы  API getSettings и getStateInstance.

После пользователь вводит номера телефонов, тест сообщения и ссылку на файл и может отправить текстовое сообщение/файл в чат, определенный номером телефона с помощью методов API sendMessage и sendFileByUrl.

Ответы серверов на запросы появляются в поле 'Response'.

## Внешний вид
<img src=".github/media/page_screenshot.png">

## Установка и запуск

Клонировать репозиторий и перейти в каталог с кодом.

```bash
cd /place/to/clone/repo/
git clone https://github.com/Raaaawrh/green-api-test-task/tree/main
cd green-api-test-task
```

### 1. Docker

В системе должен быть установлен [Docker](https://www.docker.com/).


Запустить сборку Docker образа. Дождаться сборки и запустить контейнер.

```bash
docker build -t green-api-test-task .
docker run green-api-test-task
```

Перейти по адресу, который будет отображен в консольном выводе.

### 2. Conda

Для установки используется канал `conda-forge`.

Создать виртуальное окружение и активировать его.

```bash
conda env create --file environment.yml
conda activate green-api-test-task-env
```

В окружении доступны:

```bash
npm -v
10.8.1

npx -v
10.8.1

node -v
V22.4.0
```

Собрать проект и запустить. 

- Дебаг сборка

```bash
npm ci
npm run build
npm run start
```

- Релизная сборка

```bash
npm ci
npm run build
npm install -g serve
serve -s build
```

Страница будет доступна по адресам, которые появятся на экране.

### 3. Нативно

Установить [npm и node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Дебаг сборка

```bash
npm ci
npm run build
npm run start
```

- Релизная сборка

```bash
npm ci
npm run build
npm install -g serve
serve -s build
```

Страница будет доступна по адресам, которые появятся на экране.
