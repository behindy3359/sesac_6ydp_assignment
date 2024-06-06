const planets = [
    {
        name: "아우로라",
        description: "북극광과 같은 화려한 빛이 흐르는 행성",
        fuelUsage: 3,
        shipDamage: 1,
        x: 1,
        y: 1
    },
    {
        name: "실버스피어",
        description: "은빛으로 빛나는 세계",
        fuelUsage: 2,
        shipDamage: 2,
        x: 2,
        y: 2
    },
    {
        name: "에델바이트",
        description: "고귀하고 숭고한 분위기를 갖춘 행성",
        fuelUsage: 1,
        shipDamage: 3,
        x: 3,
        y: 3
    },
    {
        name: "노바리스",
        description: "새로운 별이 태어나는 곳",
        fuelUsage: 4,
        shipDamage: 0,
        x: 4,
        y: 4
    },
    {
        name: "플루톤",
        description: "신비로운 분위기를 갖는 외계 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 5,
        y: 5
    },
    {
        name: "크림슨타이드",
        description: "진한 붉은 물결이 밀려오는 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 6,
        y: 6
    },
    {
        name: "세렌디아",
        description: "평화롭고 운치 있는 행성",
        fuelUsage: 3,
        shipDamage: 2,
        x: 7,
        y: 7
    },
    {
        name: "베르니아",
        description: "푸른 빛깔을 띤 아름다운 세계",
        fuelUsage: 4,
        shipDamage: 3,
        x: 8,
        y: 8
    },
    {
        name: "아이리스",
        description: "다채로운 무지개가 떠 있는 곳",
        fuelUsage: 1,
        shipDamage: 0,
        x: 9,
        y: 9
    },
    {
        name: "루미나라",
        description: "빛나는 땅과 바다가 어우러진 행복한 행성",
        fuelUsage: 0,
        shipDamage: 2,
        x: 1,
        y: 2
    },
    {
        name: "플로리스",
        description: "화려한 꽃들이 가득한 아름다운 섬나라",
        fuelUsage: 2,
        shipDamage: 4,
        x: 2,
        y: 3
    },
    {
        name: "루나스",
        description: "달과 같은 차가움과 우아함을 갖춘 행성",
        fuelUsage: 3,
        shipDamage: 1,
        x: 3,
        y: 4
    },
    {
        name: "신디아",
        description: "신비로운 에너지가 넘치는 행성",
        fuelUsage: 1,
        shipDamage: 2,
        x: 4,
        y: 5
    },
    {
        name: "엑스칼리버",
        description: "고대 전설의 검을 모티프로 한 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 5,
        y: 6
    },
    {
        name: "헤일리스",
        description: "유성우와 함께 운행하는 행성",
        fuelUsage: 0,
        shipDamage: 1,
        x: 6,
        y: 7
    },
    {
        name: "세르시스",
        description: "천재들이 모여있는 곳",
        fuelUsage: 2,
        shipDamage: 2,
        x: 7,
        y: 8
    },
    {
        name: "노바스",
        description: "번개와 같이 빠른 속도로 움직이는 행성",
        fuelUsage: 3,
        shipDamage: 4,
        x: 8,
        y: 9
    },
    {
        name: "엘리시움",
        description: "무궁무진한 행복과 안식의 땅",
        fuelUsage: 1,
        shipDamage: 3,
        x: 9,
        y: 1
    },
    {
        name: "아폴로니아",
        description: "아름다운 음악과 예술이 번창하는 행성",
        fuelUsage: 2,
        shipDamage: 0,
        x: 1,
        y: 3
    },
    {
        name: "네오포트",
        description: "미래 지향적인 과학 기술이 발달한 행성",
        fuelUsage: 4,
        shipDamage: 2,
        x: 2,
        y: 4
    },
    {
        name: "노벨리아",
        description: "혁신적인 발견과 연구가 이루어지는 행성",
        fuelUsage: 3,
        shipDamage: 4,
        x: 3,
        y: 5
    },
    {
        name: "헤일리스타",
        description: "놀라운 천체들이 빛나는 행성",
        fuelUsage: 1,
        shipDamage: 1,
        x: 4,
        y: 6
    },
    {
        name: "아르케이디아",
        description: "옛날의 명예와 영광이 살아 숨쉬는 곳",
        fuelUsage: 2,
        shipDamage: 2,
        x: 5,
        y: 7
    },
    {
        name: "아우리엘",
        description: "높은 지성과 지혜가 깃든 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 6,
        y: 8
    },
    {
        name: "세이퍼스",
        description: "푸른 바다와 그림같은 풍경을 갖춘 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 7,
        y: 9
    },
    {
        name: "프로토스",
        description: "진화의 초기 단계를 겪고 있는 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 8,
        y: 1
    },
    {
        name: "라이트스톤",
        description: "빛나는 보석 같은 세계",
        fuelUsage: 2,
        shipDamage: 1,
        x: 9,
        y: 2
    },
    {
        name: "노바라이트",
        description: "새로운 빛이 계속해서 불어오는 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 1,
        y: 4
    },
    {
        name: "에메랄드",
        description: "녹색의 숲과 초원으로 뒤덮인 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 2,
        y: 5
    },
    {
        name: "아스테라",
        description: "다양한 별들이 함께 빛나는 우주 공간",
        fuelUsage: 0,
        shipDamage: 4,
        x: 3,
        y: 6
    },
    {
        name: "카오스",
        description: "혼돈과 질서가 공존하는 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 4,
        y: 7
    },
    {
        name: "그라비티스",
        description: "중력의 힘이 강한 곳",
        fuelUsage: 2,
        shipDamage: 1,
        x: 5,
        y: 8
    },
    {
        name: "세피아",
        description: "세계가 구식으로 보이는 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 6,
        y: 9
    },
    {
        name: "에레스",
        description: "전투와 용감함이 중요시 되는 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 7,
        y: 1
    },
    {
        name: "티탄스",
        description: "거대하고 강력한 존재들이 서식하는 곳",
        fuelUsage: 0,
        shipDamage: 4,
        x: 8,
        y: 2
    },
    {
        name: "쿼사",
        description: "신비한 역사와 전설이 담긴 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 9,
        y: 3
    },
    {
        name: "에덴스",
        description: "신성한 휴식과 평화가 가득한 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 1,
        y: 5
    },
    {
        name: "아리아스",
        description: "아름다운 음악과 예술이 번창하는 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 2,
        y: 6
    },
    {
        name: "솔라스",
        description: "해와 관련된 힘이 강한 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 3,
        y: 7
    },
    {
        name: "아폴로스",
        description: "고대 신화의 영웅을 연상케 하는 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 4,
        y: 8
    },
    {
        name: "에이리언",
        description: "외계 생명체의 서식지가 되는 곳",
        fuelUsage: 1,
        shipDamage: 0,
        x: 5,
        y: 9
    },
    {
        name: "라그나",
        description: "불과 전쟁의 힘이 과시되는 곳",
        fuelUsage: 2,
        shipDamage: 1,
        x: 6,
        y: 1
    },
    {
        name: "크로무스",
        description: "시간의 흐름이 느린 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 7,
        y: 2
    },
    {
        name: "루나리스",
        description: "달과 관련된 신비로움을 품은 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 8,
        y: 3
    },
    {
        name: "아르테미스",
        description: "사냥과 자연의 여신을 떠올리게 하는 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 9,
        y: 4
    },
    {
        name: "세레니스",
        description: "고요하고 평화로운 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 1,
        y: 6
    },
    {
        name: "헬리오스",
        description: "태양과 관련된 힘이 강한 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 2,
        y: 7
    },
    {
        name: "스테이시스",
        description: "시간이 멈춰있는 듯한 행성",
        fuelUsage: 3,
        shipDamage: 2,
        x: 3,
        y: 8
    },
    {
        name: "노바티스",
        description: "새로운 별이 태어나는 중인 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 4,
        y: 9
    },
    {
        name: "프라이머스",
        description: "우주의 기원과 진화가 시작된 곳",
        fuelUsage: 0,
        shipDamage: 4,
        x: 5,
        y: 1
    },
    {
        name: "미스트라",
        description: "미지의 영역으로 향하는 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 6,
        y: 2
    },
    {
        name: "블루노바",
        description: "파란색 별이 폭발하는 듯한 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 7,
        y: 3
    },
    {
        name: "아테나",
        description: "지혜와 전략이 중요시 되는 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 8,
        y: 4
    },
    {
        name: "넵튠스",
        description: "바다와 물 속 생물이 다양한 행성",
        fuelUsage: 4,
        shipDamage: 3,
        x: 9,
        y: 5
    },
    {
        name: "크리스탈로스",
        description: "수정과 보석이 풍부한 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 1,
        y: 7
    },
    {
        name: "플로라",
        description: "식물과 자연이 풍부한 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 2,
        y: 8
    },
    {
        name: "아리아드네",
        description: "복잡한 미로와 모험을 품은 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 3,
        y: 9
    },
    {
        name: "제피루스",
        description: "빠른 속도와 우아한 운동을 자랑하는 행성",
        fuelUsage: 3,
        shipDamage: 2,
        x: 4,
        y: 1
    },
    {
        name: "피닉스",
        description: "부활과 재탄생의 상징이 빛나는 곳",
        fuelUsage: 4,
        shipDamage: 3,
        x: 5,
        y: 2
    },
    {
        name: "블랙스톤",
        description: "심연의 깊은 어둠과 신비로움을 담은 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 6,
        y: 3
    },
    {
        name: "크리오스",
        description: "얼음과 빙하가 광활하게 펼쳐진 곳",
        fuelUsage: 1,
        shipDamage: 0,
        x: 7,
        y: 4
    },
    {
        name: "미라지",
        description: "신비로운 광합성이 일어나는 곳",
        fuelUsage: 2,
        shipDamage: 1,
        x: 8,
        y: 5
    },
    {
        name: "타이탄스",
        description: "거대하고 강력한 힘이 숨쉬는 행성",
        fuelUsage: 3,
        shipDamage: 2,
        x: 9,
        y: 6
    },
    {
        name: "헤라클레스",
        description: "영웅적인 모험이 넘치는 곳",
        fuelUsage: 4,
        shipDamage: 3,
        x: 1,
        y: 8
    },
    {
        name: "아폴로",
        description: "예술과 음악이 번창하는 곳",
        fuelUsage: 0,
        shipDamage: 4,
        x: 2,
        y: 9
    },
    {
        name: "오라클",
        description: "미래를 예지하는 성스러운 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 3,
        y: 1
    },
    {
        name: "노바타이거",
        description: "위협적이고 강력한 생명체들이 서식하는 곳",
        fuelUsage: 2,
        shipDamage: 1,
        x: 4,
        y: 2
    },
    {
        name: "레지오",
        description: "영예와 귀인들의 영지",
        fuelUsage: 3,
        shipDamage: 2,
        x: 5,
        y: 3
    },
    {
        name: "아르카디아",
        description: "낙원과 같은 평화로운 곳",
        fuelUsage: 4,
        shipDamage: 3,
        x: 6,
        y: 4
    },
    {
        name: "레베카",
        description: "공정과 정의가 중요시되는 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 7,
        y: 5
    },
    {
        name: "노바리움",
        description: "신비로운 빛과 에너지가 넘치는 곳",
        fuelUsage: 1,
        shipDamage: 0,
        x: 8,
        y: 6
    },
    {
        name: "엘리시움",
        description: "영원한 행복과 안식이 기다리는 곳",
        fuelUsage: 2,
        shipDamage: 1,
        x: 9,
        y: 7
    },
    {
        name: "노바플라이어",
        description: "높은 기술력과 우주 비행 기술이 발달한 곳",
        fuelUsage: 3,
        shipDamage: 2,
        x: 1,
        y: 9
    },
    {
        name: "코스모스",
        description: "우주의 모든 것을 품은 곳",
        fuelUsage: 4,
        shipDamage: 3,
        x: 2,
        y: 1
    },
    {
        name: "트리스탄",
        description: "용감한 모험가들의 활동이 일어나는 곳",
        fuelUsage: 0,
        shipDamage: 4,
        x: 3,
        y: 2
    },
    {
        name: "아르티쉬아",
        description: "아름다운 예술과 문화가 풍부한 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 4,
        y: 3
    },
    {
        name: "노바크라운",
        description: "우주의 왕관과 같이 빛나는 행성",
        fuelUsage: 2,
        shipDamage: 1,
        x: 5,
        y: 4
    },
    {
        name: "루시퍼",
        description: "어둠과 빛이 공존하는 신비로운 행성",
        fuelUsage: 3,
        shipDamage: 2,
        x: 6,
        y: 5
    },
    {
        name: "실버라이트",
        description: "은빛으로 빛나는 세계",
        fuelUsage: 4,
        shipDamage: 3,
        x: 7,
        y: 6
    },
    {
        name: "라이더스",
        description: "용맹하고 자유로운 정신을 가진 행성",
        fuelUsage: 0,
        shipDamage: 4,
        x: 8,
        y: 7
    },
    {
        name: "티타니아",
        description: "여왕과 같은 위엄과 아름다움을 갖춘 행성",
        fuelUsage: 1,
        shipDamage: 0,
        x: 9,
        y: 8
    }
];
