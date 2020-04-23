# Data Visualization Framework

## Project setup

```
npm install
```

## Write data to database

Setup your own MySQL software, then modify config in `reader.js` and `writeDataToDatabase.js`, then

```
node writeDataToDatabase.js
```

## Launch website at 127.0.0.1:5000

```
nodemon .\server.js
```


## Access editor through 127.0.0.1:5000/editor 

### Get HTML code from editor content
In browser console

```
editor.getData()
```