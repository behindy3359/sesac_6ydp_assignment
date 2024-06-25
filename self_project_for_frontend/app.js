const express = require('express');
const mainRouter = require('./router/mainRouter');
const {mainMiddleWare} = require('./middleware/main_middleware');

const app = express();
const PORTNO = 8080;

mainMiddleWare(app);

//서버 작동시키기
app.listen(PORTNO, () => {
  console.log(`Server is running on port ${PORTNO} at ${Date()}`);
});
