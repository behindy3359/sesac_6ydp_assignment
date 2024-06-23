const express = require('express');
const app = express();
const PORTNO = 8080;

app.set('view engine', 'ejs'); // EJS를 뷰 엔진으로 설정
app.set('views','views');   // 뷰들을 찾아 올 디렉토리 설정
app.use('/st' ,express.static('public/style')); // 정적 파일을 찾아 올 디렉토리 설정
app.use('/sc' ,express.static('public/js')); // 정적 파일을 찾아 올 디렉토리 설정
app.use('/im' ,express.static('public/source')); // 정적 파일을 찾아 올 디렉토리 설정


// 도메인 을 통한 접속
app.get('/', (req, res) => {
  res.render('index'); 
});

//서버 작동시키기
app.listen(PORTNO, () => {
  console.log(`Server is running on port ${PORTNO} at ${Date()}`);
});
