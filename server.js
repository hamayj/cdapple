const express = require('express'); 
const app = express();
// 설치한 라이브러리를 첨부해 주세요.
// 설치한 라이브러리를 이용해 새로운 객체를 만들어주세용


app.listen(8080, function(){
    console.log('listening on 8080');
    // 8080 port로 웹 서버를 열고 
    // 잘 열리면 listening on 8080을 출력해주세요.
});
// 서버를 express로 만들기 위한 기본 문법. 
// 서버를 띄우기 위한 기본 셋팅 (express 라이브러리)
// 서버 오픈 하는 문법

// .LISTEN이라는 함수를 쓰면 컴퓨터에 서버를 열 수 있음.

// 누군가가 /pet으로 방문을 하면..  (url pet (경로)과 같은 개념.)
// pet관련된 안내문을 띄워주자. 

app.get('/pet', function(요청, 응답){
    응답.send('pet용품 사이트입니다.');
});

// 실습.
app.get('/beauty', (요청, 응답)=> {
    응답.send('beauyyy용품 사이트입니다.');
})

app.get('/', function(요청, 응답){
    // /만 적으면 홈으로 가란 소리.
    응답.sendFile( __dirname + '/index.html')
}) // .sendFile(보낼 파일 경로) 디렉토리 네임.

