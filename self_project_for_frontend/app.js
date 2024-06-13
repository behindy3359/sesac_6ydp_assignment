const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs'); // EJS를 뷰 엔진으로 설정
app.set('views','views');   // 뷰들을 찾아 올 디렉토리 설정
app.use(express.static('public')); // 정적 파일을 찾아 올 디렉토리 설정


// 도메인 을 통한 접속
app.get('/', (req, res) => {
  res.render('index'); 
});

//서버 작동시키기
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at ${Date()}`);
});
