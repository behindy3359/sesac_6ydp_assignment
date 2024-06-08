document.addEventListener('DOMContentLoaded', (event) => {
  const floor = document.getElementById('floor');
  const duck = document.getElementById('duck');
  let lastDirection = 'left'; // 초기 방향 설정
  let lastKey = null; // 마지막 키 입력

  // Set initial position to the center of the floor
  let topPosition = -(floor.offsetHeight / 2) + window.innerHeight / 2;
  let leftPosition = -(floor.offsetWidth / 2) + window.innerWidth / 2;

  floor.style.top = topPosition + 'px';
  floor.style.left = leftPosition + 'px';

  const step = 7; // Move step in pixels
  const keys = {};
  let animationFrameId;

  document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    lastKey = e.key; // 마지막으로 눌린 키 업데이트
    animateDuck(e.key);
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(moveFloor);
    }
  });

  document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    stopDuckAnimation();
    if (!Object.values(keys).includes(true)) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  });

  function moveFloor() {
    let diagonalStep = step / Math.sqrt(2);
    if (keys['ArrowUp'] || keys['w']) {
      topPosition = Math.min(0, topPosition + step);
    }
    if (keys['ArrowDown'] || keys['s']) {
      topPosition = Math.max(window.innerHeight - floor.offsetHeight, topPosition - step);
    }
    if (keys['ArrowLeft'] || keys['a']) {
      leftPosition = Math.min(0, leftPosition + step);
    }
    if (keys['ArrowRight'] || keys['d']) {
      leftPosition = Math.max(window.innerWidth - floor.offsetWidth, leftPosition - step);
    }

    // 복수입력
    if ((keys['ArrowUp'] || keys['w']) && (keys['ArrowLeft'] || keys['a'])) {
      topPosition = Math.min(0, topPosition + 0.3*diagonalStep);
      leftPosition = Math.min(0, leftPosition + 0.3*diagonalStep);
    }
    if ((keys['ArrowUp'] || keys['w']) && (keys['ArrowRight'] || keys['d'])) {
      topPosition = Math.min(0, topPosition + 0.3*diagonalStep);
      leftPosition = Math.max(window.innerWidth - floor.offsetWidth, leftPosition - 0.3*diagonalStep);
    }
    if ((keys['ArrowDown'] || keys['s']) && (keys['ArrowLeft'] || keys['a'])) {
      topPosition = Math.max(window.innerHeight - floor.offsetHeight, topPosition - 0.3*diagonalStep);
      leftPosition = Math.min(0, leftPosition + 0.3*diagonalStep);
    }
    if ((keys['ArrowDown'] || keys['s']) && (keys['ArrowRight'] || keys['d'])) {
      topPosition = Math.max(window.innerHeight - floor.offsetHeight, topPosition - 0.3*diagonalStep);
      leftPosition = Math.max(window.innerWidth - floor.offsetWidth, leftPosition - 0.3*diagonalStep);
    }

    floor.style.top = topPosition + 'px';
    floor.style.left = leftPosition + 'px';

    animationFrameId = requestAnimationFrame(moveFloor);
  }

  function animateDuck(key) {
    if ((key === 'ArrowLeft' || key === 'a') || 
        ((key === 'ArrowUp' || key === 'ArrowDown' || key === 'w' || key === 's') && lastDirection === 'left') ||
        ((keys['ArrowUp'] || keys['w']) && (keys['ArrowLeft'] || keys['a'])) ||
        ((keys['ArrowDown'] || keys['s']) && (keys['ArrowLeft'] || keys['a']))) {
      if (!duck.classList.contains('moving-left')) {
        duck.classList.remove('moving-right');
        duck.classList.add('moving-left');
        duck.style.backgroundImage = "url(./source/main-duck-lstand.png)";
        lastDirection = 'left';
      }
    } else if ((key === 'ArrowRight' || key === 'd') || 
        ((key === 'ArrowUp' || key === 'ArrowDown' || key === 'w' || key === 's') && lastDirection === 'right') ||
        ((keys['ArrowUp'] || keys['w']) && (keys['ArrowRight'] || keys['d'])) ||
        ((keys['ArrowDown'] || keys['s']) && (keys['ArrowRight'] || keys['d']))) {
      if (!duck.classList.contains('moving-right')) {
        duck.classList.remove('moving-left');
        duck.classList.add('moving-right');
        duck.style.backgroundImage = "url(./source/main-duck-rstand.png)";
        lastDirection = 'right';
      }
    }
  }

  function stopDuckAnimation() {
    // 키 입력이 중지되면 현재 방향 유지
    if (!Object.values(keys).includes(true)) {
      duck.classList.remove('moving-left');
      duck.classList.remove('moving-right');
      if (lastDirection === 'left') {
        duck.style.backgroundImage = "url(./source/main-duck-lstand.png)";
      } else if (lastDirection === 'right') {
        duck.style.backgroundImage = "url(./source/main-duck-rstand.png)";
      }
    }
  }
});