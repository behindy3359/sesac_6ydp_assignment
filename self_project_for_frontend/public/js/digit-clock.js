
/** 각 숫자에 어떤 획이 필요할지 정해둠! */
const segments = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'g', 'e', 'd'],
  3: ['a', 'b', 'g', 'c', 'd'],
  4: ['f', 'g', 'b', 'c'],
  5: ['a', 'f', 'g', 'c', 'd'],
  6: ['a', 'f', 'e', 'd', 'c', 'g'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g']
};

/** 시계에 획을 넣어줄 녀석*/
function createSegments(digitElement) {
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(seg => {
      const segment = document.createElement('div');
      segment.classList.add('segment', seg);
      digitElement.appendChild(segment);
  });
}

/** 시간을 실시간으로 변경하게 해 줄 녀석 , 구분자 (:) 추가*/
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = hours + minutes + seconds;

  Array.from(document.getElementsByClassName('digit')).forEach((digitElement, i) => {
      const digit = timeString[i];
      const activeSegments = segments[digit];
      Array.from(digitElement.getElementsByClassName('segment')).forEach(segment => {
          segment.classList.toggle('on', activeSegments.includes(segment.classList[1]));
      });
  });

  // Toggle separators
  const separators = document.getElementsByClassName('separator');
  Array.from(separators).forEach(separator => {
      separator.style.visibility = separator.style.visibility === 'hidden' ? 'visible' : 'hidden';
  });
}
/** 페이지가 로드된 후 1초마다 실행. 페이지에 잔류한 시간이 오래될수록 오차가 생길 수 있음 */
document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.getElementsByClassName('digit')).forEach(createSegments);
  setInterval(updateClock, 1000);
  updateClock();
});

// /** openweather api 를 활용해서 동작구 상도역 부근의 날씨를 가져옴, 오늘의 날씨, 실시간 날씨는 비싸! */
// function getWeatherData(){
//   const lat = 37.50316;
//   const lon = 126.9477;
//   const appkey ='8b57cc4d4eb1403e1809936402e9221c';
//   /** promise 타입으로 받아오는듯? */
//   const data = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appkey}`);
//   console.log(data);
//   return data;
// }

// /** 날씨 데이터를 받아와 아이콘으로 변환 */
// getWeatherData().then(res => {
//   const Weather = res.data.weather[0].main;
//   let weatherIcon ='';
//   switch(Weather){
//     case 'Thunderstorm': weatherIcon='<i class="fa-solid fa-bolt"></i>'; break;
//     case 'Drizzle': weatherIcon= '<i class="fa-solid fa-cloud-rain"></i>'; break;
//     case 'Rain': weatherIcon= '<i class="fa-solid fa-cloud-showers-heavy"></i>'; break;
//     case 'Snow': weatherIcon= '<i class="fa-solid fa-snowflake"></i>'; break;
//     case 'Atmosphere': weatherIcon= '<i class="fa-solid fa-wind"></i>'; break;
//     case 'Clear': weatherIcon= '<i class="fa-solid fa-sun"></i>'; break;
//     case 'Clouds': weatherIcon= '<i class="fa-solid fa-cloud"></i>'; break;
//     default : weatherIcon= '<i class="fa-solid fa-x"></i>'; break;
//   }
//   document.querySelector('.today-weather').innerHTML=weatherIcon;
// })
