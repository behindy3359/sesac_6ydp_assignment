const menuItems = '피자, 버거, 스시, 타코, 파스타, 샐러드, 프라이드 치킨, 샌드위치, 아이스크림, 라멘, 카레, 만두, 팬케이크, 스테이크, 라자냐, 핫도그, 부리토, 나초, 바비큐 립, 샤와르마, 포, 템푸라, 팔라펠, 케밥, 퀘사디아, 빠에야, 팟타이, 교자, 리조또, 미트볼, 춘권, 클램 차우더, 랍스터, 세비체, 피쉬 앤 칩스, 매쉬드 포테이토, 과카몰리, 후무스, 사모사, 바클라바, 티라미수, 치즈케이크, 브라우니, 맥 앤 치즈, 파히타, 비리야니, 베이징 덕, 치킨 윙, 풀드 포크, 칠리, 크루아상, 도넛, 와플, 오믈렛, 브루스케타, 가스파초, 프리타타, 굴라시, 잠발라야, 라따뚜이, 사시미, 비빔밥, 김치, 딤섬, 치킨 티카, 엠파나다, 콘브레드, 그리츠, 요크셔 푸딩, 셰퍼드 파이, 비프 스트로가노프, 무사카, 스파나코피타, 해기스, 피에로기, 슈니첼, 사우어크라우트, 부이야베스, 타불레, 미소 수프, 포카치아, 타르트 타탱, 애플 파이, 클라푸티, 츄러스, 젤라토, 카놀리, 에클레어, 프로피테롤, 크렘 브륄레, 판나 코타, 플란, 푸틴, 아레파스, 반미, 버블티, 바오지, 사테이, 똠얌 수프, 락사, 갈비찜, 김밥, 돈가스, 잡채, 불고기, 된장찌개, 순두부찌개, 갈비탕, 떡국, 떡볶이, 호떡, 보쌈, 삼겹살, 낙지볶음, 양념치킨, 찜닭, 해물파전, 김치찌개, 순대, 순대국, 만둣국, 콩나물국, 미역국, 청국장, 아구찜, 치즈라면, 비빔국수, 물냉면, 비빔냉면, 콩국수, 메밀국수, 잔치국수, 육개장, 육회, 삼계탕, 샤부샤부, 유부초밥, 새우튀김, 부대찌개, 파전, 족발, 닭갈비, 해장국, 두부김치, 어묵, 어묵탕, 오징어볶음, 양꼬치, 깐풍기, 울면, 깐쇼새우, 깐쇼새우, 샥스핀, 훈툰, 짬뽕, 자장면, 팔보채, 군만두, 탕수육, 송이버섯, 팥빙수, 찹쌀떡, 소금빵, 커스터드크림빵, 메론빵, 고구마케이크, 모찌, 말차케이크, 호지차케이크, 카스테라, 연어스테이크, 양갈비, 홍합탕, 브로콜리 수프, 아스파라거스, 리코타치즈, 구운버섯, 고르곤졸라 피자, 리코타 샐러드, 참치타다키, 참치타르타르, 참치롤, 새우롤, 롤케이크, 바나나브레드, 치즈바게트, 감자튀김, 바베큐치킨, 브리스켓, 콜슬로, 머핀, 크림스프, 포테이토 샐러드, 감자전, 감자수프, 브라우니치즈케이크, 블루베리머핀, 레몬머핀, 레몬파운드케이크, 호두파운드케이크, 오렌지머핀, 라즈베리파이, 블랙베리파이, 크랜베리머핀, 치즈파이, 햄버거스테이크, 닭튀김, 돼지갈비, 닭다리구이, 양송이버섯수프, 옥수수수프, 햄치즈샌드위치, 터키샌드위치, 베이컨샌드위치, 참치샌드위치, 고구마샌드위치, 고구마라떼, 두유라떼, 커피라떼, 카푸치노, 에스프레소, 아메리카노, 밀크티, 레몬티, 애플티, 모히또, 피나콜라다, 마가리타, 데킬라, 하이볼, 위스키, 와인, 샴페인, 애플사이더, 베이글, 크림치즈베이글, 연어베이글, 참치베이글, 치즈피자, 페퍼로니피자, 야채피자, 해산물피자, 소시지피자, 포테이토피자, 치즈버거, 더블치즈버거, 베이컨치즈버거, 아보카도버거, 포테이토버거, 비건버거, 그릴드치킨버거, 치킨랩, 비프랩, 돼지갈비랩, 소고기버거, 치킨버거, 오징어버거, 스테이크버거, 스파게티, 미트소스파스타, 크림소스파스타, 까르보나라, 알리오올리오, 봉골레, 시저샐러드, 콥샐러드, 그릭샐러드, 연어샐러드, 닭가슴살샐러드, 퀴노아샐러드, 케일샐러드, 토마토샐러드, 아보카도샐러드, 과일샐러드, 치즈샐러드';
const sliceTheMenu = menuItems.split(', ');
const menuPlate = document.querySelector('#menuPlate');

const observe1 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let index = 0;

            const intervalId = setInterval(() => {
                if (index < sliceTheMenu.length) {
                    menuPlate.innerHTML += sliceTheMenu[index] + ' ';
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50);

            // 요소의 관찰을 해제하여 한 번만 실행되도록 설정
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observe1, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});


observer.observe(menuPlate);

const prefix=['차가운',
'식은',
'짠',
'따뜻한',
'달콤한',
'매운',
'신선한',
'뜨거운',
'차디찬',
'시원한',
'바삭바삭한',
'촉촉한',
'고소한',
'짭짤한',
'향긋한',
'부드러운',
'아삭아삭한',
'끈적끈적한',
'걸쭉한',
'느끼한',
'달달한',
'맵싸한',
'감칠맛 나는',
'톡 쏘는',
'새콤달콤한',
'상큼한',
'쌉싸름한',
'풍부한',
'깊은',
'강한',
'순한',
'미지근한',
'탄력적인',
'쫄깃쫄깃한',
'무거운',
'가벼운',
'콜록콜록한',
'향이 진한',
'녹진한',
'신선하게',
'서늘한',
'따끈따끈한',
'푸석푸석한',
'묽은',
'담백한',
'감칠맛나는',
'코팅된',
'오래된',
'거친',
'매콤한'];
const suffix=['피자', '파스타', '샐러드', '스테이크', '수프', '샌드위치', '버거', '치킨', '스시', '라멘', '김밥', '빵', '케이크', '쿠키', '아이스크림', '타코', '퀘사디아', '비빔밥', '떡볶이', '팬케이크', '와플', '덤플링', '볶음밥', '찌개', '구이', '찜', '튀김', '죽', '파이', '햄버거', '피쉬 앤 칩스', '포포버', '카레', '페스토', '가스파초', '무스', '팟타이', '케밥', '플란', '소세지', '타파스', '푸딩', '라자냐', '리조또', '스튜', '피탕', '도넛', '면', '난', '바비큐'];

//GPT 녀석이 이렇게 줌 나도 모름



