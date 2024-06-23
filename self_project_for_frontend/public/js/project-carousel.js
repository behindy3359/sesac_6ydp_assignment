// 요소 선택해두기
const carouselContainer = document.querySelector('.project-carousel-container');
const leftButton = document.querySelector('.project-carousel-lbutton');
const rightButton = document.querySelector('.project-carousel-rbutton');
const bottomButtons = document.querySelectorAll('.project-carousel-button');

let nowPage = 1;

/** 하단부 버튼 이동 함수
 * @param {number} pageNumber - 보여줄 페이지 수
 * 하단부 버튼에도 영향을 주려고 함 ,
 * 함수가 실행되면 버튼의 색을초기화 하고 현재 페이지에 해당하는 버튼의 색을변화시킴
 * 
 */
function showingPage(pageNumber){
  carouselContainer.style.transform = `translateX(-${(pageNumber - 1) * 100}%)`;
  // 하단 버튼의 색상 초기화
  bottomButtons.forEach((button) => {
    button.style.backgroundColor = 'rgb(214, 214, 214)';
    button.style.opacity=0.5;
  });
  nowPage = pageNumber;
  document.querySelector(`#project-carousel-button${pageNumber}`).style.backgroundColor = 'gray';
  document.querySelector(`#project-carousel-button${pageNumber}`).style.opacity = 1;
}
/** 좌우 버튼 이동함수
 *  
 */
function changePage(direction) {
  if (direction === 'next') {
    nowPage = nowPage % 4 + 1;
  } else if (direction === 'prev') {
    nowPage = nowPage === 1 ? 4 : nowPage - 1;
  }
  showingPage(nowPage);
}
// 하단버튼 
document.querySelector('.project-carousel-button-wrapper').addEventListener('click', function(event) {
  const buttonId = event.target.id;
  if (buttonId.startsWith('project-carousel-button')) {
    const pageNumber = parseInt(buttonId.replace('project-carousel-button', ''));
    showingPage(pageNumber);
  }
});

leftButton.addEventListener('click', () => changePage('prev'));
rightButton.addEventListener('click', () => changePage('next'));

// 초기 페이지에 진입했을 때 보여줄 페이지 
document.addEventListener('DOMContentLoaded', showingPage(1));

