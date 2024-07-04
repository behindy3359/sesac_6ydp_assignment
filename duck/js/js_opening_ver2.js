const animateButton = document.getElementById('showTime');
const animateLCurtain = document.getElementById('l-curtain');
const animateRCurtain = document.getElementById('r-curtain');
const animateSinger = document.getElementById('purin-the-singer');
const animateGlasses = document.getElementById('dot-glasses');
const clapClap = document.getElementById('clapClap');
const wbps= document.getElementById('wbps'); // youtube audio library 

animateButton.addEventListener('click', function() {
  
  // 박수소리, mp3파일의 음량 제어
  clapClap.play();
  setTimeout(function() {
    let fadeOutInterval = setInterval(function() {
      if (clapClap.volume > 0) {
        clapClap.volume -= 0.1; 
      } else {
        clearInterval(fadeOutInterval);
        clapClap.pause();
      }
    }, 200); 
  }, 1500); 

  // 애니메이션 클래스를 토글하여 애니메이션 시작/종료
  animateLCurtain.classList.toggle('l-curtain-activated');
  animateRCurtain.classList.toggle('r-curtain-activated');
  animateSinger.classList.toggle('purin-advent-activated');
  animateGlasses.classList.toggle('dot-glasses-activated');


  // 노래를 불러라 푸린!

  animateButton.style.display='none';
  setTimeout(function() {
    animateSinger.classList.toggle('world-best-singer-activated');
    wbps.play();
  }, 4000);

  setTimeout(function() {
    window.location.href = "./mainpage.html";
  }, 8000);
  
});
