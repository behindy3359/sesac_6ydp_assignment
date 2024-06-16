/** 비를 내릴 공간 */
const canvas = document.querySelector('canvas')
/** 캔버스에서 그리기 위한 도구 저장 */
const ctx = canvas.getContext('2d')

/**  빗방울 애니메이션의 무작위성을 위해 min, max 사이의 무작위 정수를 반환하는 함수 */
const randomBetween =( min, max )=>{
  return Math.floor(Math.random()*(max-min+1)+ min)
}

/** 전체 파티클 갯수 */
let total;
/** 전체 파티클 관리 배열*/
let rainDrops = [];
let drops = [];

/** 빗줄기 클래스 */
class Rain{
  /** 외부에서 애니메이션의 초기정보를 받아옴 */
  constructor(x,y,velocity){
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  /** 실제로 비를 그릴기능을 수행할 녀석 */
  draw(){
    const {x,y,velocity} = this;
    /** 흰색비로 할까? */
    ctx.strokeStyle = '#8899a6' ; 
    /** 비를 그리겠다고요 */
    ctx.beginPath();
    /** 시작할 x,y 좌표 */
    ctx.moveTo(x,y);
    /** 끝나는 x,y 좌표 */
    ctx.lineTo( x + velocity.x*2, y + velocity.y*2);
    /** 시작지점과 끝지점을 이어라 */
    ctx.stroke();
  }

  splash(){
    for(let i=0; i < 3 ; i ++){
      const velocity = {
        x: -(this.velocity.x)+randomBetween(-2,2),
        y: -(this.velocity.y)+randomBetween(5,10),
      }
    }
    drops.push(new Drop(this.x, innerHeight, this.velocity));
  }
  /** 빗방울이 화면 아래로 사라지면 새로 그려주게 하는 기능 추가 */
  animate(){
    if(this.y > innerHeight){
      this.splash();
      this.x = randomBetween(0,innerWidth);
      this.y = -20;

    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw()
  }
}

/** 빗방울이 튀기는 클래스*/
class Drop{

  constructor(x,y,velocity){
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }
  /** 원형으로 튀기게 할거야! */
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y , 1.5, 0, Math.PI*2)
    ctx.fillStyle = '#8899a6';
    ctx.fill();
  }
  animate(){
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  }
}

/** 초기화 --창 크기가 변경되었을때 실행시켜 canvas 가로 세로를 변화시키기 위해서 */
function init(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  /** 빗방울 갯수가 화면 크기 , (너비 높이)의 영향을 받도록 함 */
  total = Math.floor(innerWidth*innerHeight/10000);
  rainDrops = [];
  drops = [];

  for(let i=0; i<total; i++){
    const x = randomBetween(0,innerWidth);
    const y = randomBetween(0,innerHeight);
    const velocity = {
      x: randomBetween(-1,1), 
      y: randomBetween(13,18)
    };
    rainDrops.push(new Rain(x, y, velocity));
  }
}

/** 렌더함수에서 윈도우 리퀘스트 애니메이션 프레임에 다시 렌더 함수를 넣어 스스로 반복해 실행시키도록 하고, 매 프레임마다 실행될 함수를 정의해줌
 * claearRect로 캔버스를 지우는 함수를 넣고 다음에 그리는 함수를 넣어주면 매 프레임마다 지우고 그리고를 반복하게 하여 애니메이션 효과를 갖게할 수 있다.
 * Rain 클래스에 정의한 animate 함수를 partices 배열 갯수만큼 실행시켜줌
*/
function render(){
  ctx.clearRect( 0, 0, canvas.width, canvas.height);
  rainDrops.forEach(rainDrop => rainDrop.animate());
  drops.forEach(drop => {
    drop.animate();
  })
  window.requestAnimationFrame(render)
}

window.addEventListener('resize',()=> init());


// init, render 함수 실행
init();
render();