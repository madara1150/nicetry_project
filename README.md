# NiceTry

A Vue 3 web app with an Express and Prisma API backed by MySQL.

## Frontend

Run these commands from the project root.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Backend

The API runs on `http://localhost:5000/api`, which is the base URL the frontend uses.

It expects a local MySQL server with a `nicetry` database.

Run these commands from the `backend` folder.

### Project setup
Copy `.env.example` to `.env`, then set `DATABASE_URL` and `JWT_SECRET`.
```
npm install
npx prisma db push
```

### Starts the API
```
node index.js
```
