function startAnimation() {
    let toyparts1 = document.querySelector('#content1-item1');
    let toyparts2 = document.querySelector('#content1-item2');
    let toyparts31 = document.querySelector('#content1-item3-1');
    let toyparts32 = document.querySelector('#content1-item3-2');
    let toyparts4 = document.querySelector('#content1-item4');
    let toyparts5 = document.querySelector('#content1-item5');
    let toyparts6 = document.querySelector('#content1-item6');
    let toyparts7 = document.querySelector('#content1-item7');
    let toyparts8 = document.querySelector('#content2-item1');
    let toyparts9 = document.querySelector('#content2-item2');
    let toyparts10 = document.querySelector('#content2-item3');
    let toyparts11 = document.querySelector('#content2-item4');
    let toyparts12 = document.querySelector('#content2-item5');
    let toyparts13 = document.querySelector('#content2-item6');
    let toyparts14 = document.querySelector('#content2-item7');
    let toyparts15 = document.querySelector('#content2-item8');

    toyparts1.classList.toggle('animation-1-1');
    toyparts2.classList.toggle('animation-1-2');
    toyparts31.classList.toggle('animation-1-3-1');
    toyparts32.classList.toggle('animation-1-3-2');
    toyparts4.classList.toggle('animation-1-4');
    toyparts5.classList.toggle('animation-1-5');
    toyparts6.classList.toggle('animation-1-6');
    toyparts7.classList.toggle('animation-1-7');

    toyparts8.classList.toggle('animation-2-1');
    toyparts9.classList.toggle('animation-2-2');
    toyparts10.classList.toggle('animation-2-3');
    toyparts11.classList.toggle('animation-2-4');
    toyparts12.classList.toggle('animation-2-5');
    toyparts13.classList.toggle('animation-2-6');
    toyparts14.classList.toggle('animation-2-7');
    toyparts15.classList.toggle('animation-2-8');
}

function rollMenu() {
    let menuPrefix = document.querySelector('#randomMenu-prefix');
    let menuSuffix = document.querySelector('#randomMenu-suffix');
    menuPrefix.textContent = prefix[Math.floor(Math.random()*50)];
    menuSuffix.textContent = suffix[Math.floor(Math.random()*50)];
}


function textChange() {
    let buttonText = document.querySelector('#writeButton2');
    buttonText.innerHTML = '나 말고 오리를 눌러보세요!';
}

function changePage(){
    window.location.href = "./duckroom.html";
}
function redirectToIndex() {
    window.location.href = "./index.html";
}