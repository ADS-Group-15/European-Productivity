# Data Visualization Framework

## Project setup

```
npm install
```

## Write data to database

Setup your own MySQL software, then modify config in `reader.js` and `writeDataToDatabase.js`

```
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: YourPassword,
    database: "data"
});
```

then write data to database:

```
node writeDataToDatabase.js
```

## Launch server at 127.0.0.1:5000

```
nodemon .\server.js
```


## Access article

```
127.0.0.1:5000/show
```