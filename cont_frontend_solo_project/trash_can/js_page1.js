
const animateButton = document.getElementById('showTime');
console.log(animateButton);
const animatedElement = document.getElementById('ball1');
console.log(animatedElement);

animateButton.addEventListener('click', function() {
  // 애니메이션 클래스를 토글하여 애니메이션 시작/종료
  animatedElement.classList.toggle('activeball');
  console.log('클릭됨');
});