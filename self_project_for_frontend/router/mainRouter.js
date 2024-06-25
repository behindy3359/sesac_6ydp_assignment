const express = require('express');
const {showMain} = require('../controller/mainController');
const mainRouter = express.Router();

// 도메인 을 통한 접속
mainRouter.get('/', showMain);

module.exports = mainRouter;