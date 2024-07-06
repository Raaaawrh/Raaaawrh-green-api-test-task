# Green API Test Task

В этом репозитории представлен исходный код тестового задания для представителей компании "Green API".

Стек: `React`, `Docker`.

Страница доступна на хостинге [Github Pages](https://Raaaawrh.github.io/green-api-test-task/).

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
