let nowXm1Ym1 = document.querySelector('#moveBox1');
let nowXYm1 = document.querySelector('#moveBox2');
let nowXp1Ym1 = document.querySelector('#moveBox3');
let nowXm1Y = document.querySelector('#moveBox4');
let nowWeAreHere = document.querySelector('#moveBox5');
let nowXp1Y = document.querySelector('#moveBox6');
let nowXm1Yp1 = document.querySelector('#moveBox7');
let nowXYp1 = document.querySelector('#moveBox8');
let nowXp1Yp1 = document.querySelector('#moveBox9');

function isValidCoordinate(x, y) {
    return x >= 0 && x < 11 && y >= 0 && y < 11;
}

if (isValidCoordinate(coordinateX - 1, coordinateY - 1) && planetGrid[coordinateX - 1][coordinateY - 1] !== null) {
    nowXm1Ym1.innerHTML = `${planetGrid[coordinateX - 1][coordinateY - 1].name}`;
}

if (isValidCoordinate(coordinateX, coordinateY - 1) && planetGrid[coordinateX][coordinateY - 1] !== null) {
    nowXYm1.innerHTML = `${planetGrid[coordinateX][coordinateY - 1].name}`;
}

if (isValidCoordinate(coordinateX + 1, coordinateY - 1) && planetGrid[coordinateX + 1][coordinateY - 1] !== null) {
    nowXp1Ym1.innerHTML = `${planetGrid[coordinateX + 1][coordinateY - 1].name}`;
}

if (isValidCoordinate(coordinateX - 1, coordinateY) && planetGrid[coordinateX - 1][coordinateY] !== null) {
    nowXm1Y.innerHTML = `${planetGrid[coordinateX - 1][coordinateY].name}`;
}

if (isValidCoordinate(coordinateX, coordinateY) && planetGrid[coordinateX][coordinateY] !== null) {
    nowWeAreHere.innerHTML = `${planetGrid[coordinateX][coordinateY].name}`;
}

if (isValidCoordinate(coordinateX + 1, coordinateY) && planetGrid[coordinateX + 1][coordinateY] !== null) {
    nowXp1Y.innerHTML = `${planetGrid[coordinateX + 1][coordinateY].name}`;
}

if (isValidCoordinate(coordinateX - 1, coordinateY + 1) && planetGrid[coordinateX - 1][coordinateY + 1] !== null) {
    nowXm1Yp1.innerHTML = `${planetGrid[coordinateX - 1][coordinateY + 1].name}`;
}

if (isValidCoordinate(coordinateX, coordinateY + 1) && planetGrid[coordinateX][coordinateY + 1] !== null) {
    nowXYp1.innerHTML = `${planetGrid[coordinateX][coordinateY + 1].name}`;
}

if (isValidCoordinate(coordinateX + 1, coordinateY + 1) && planetGrid[coordinateX + 1][coordinateY + 1] !== null) {
    nowXp1Yp1.innerHTML = `${planetGrid[coordinateX + 1][coordinateY + 1].name}`;
}

function moveShip() {
    nowXm1Ym1.innerHTML = `${planetGrid[coordinateX - 1][coordinateY - 1].name}`;
    nowXYm1.innerHTML = `${planetGrid[coordinateX][coordinateY - 1].name}`;
    nowXp1Ym1.innerHTML = `${planetGrid[coordinateX + 1][coordinateY - 1].name}`;
    nowXm1Y.innerHTML = `${planetGrid[coordinateX - 1][coordinateY].name}`;
    nowWeAreHere.innerHTML = `${planetGrid[coordinateX][coordinateY].name}`;
    nowXp1Y.innerHTML = `${planetGrid[coordinateX + 1][coordinateY].name}`;
    nowXm1Yp1.innerHTML = `${planetGrid[coordinateX - 1][coordinateY + 1].name}`;
    nowXYp1.innerHTML = `${planetGrid[coordinateX][coordinateY + 1].name}`;
    nowXp1Yp1.innerHTML = `${planetGrid[coordinateX + 1][coordinateY + 1].name}`;
}

nowXm1Ym1.addEventListener("click", function() {
    if(nowXm1Ym1.innerHTML !== '암흑물질') {
        coordinateX--;
        coordinateY--;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXYm1.addEventListener("click", function() {
    if(nowXYm1.innerHTML !== '암흑물질') {
        coordinateY--;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXp1Ym1.addEventListener("click", function() {
    if(nowXp1Ym1.innerHTML !== '암흑물질') {
        coordinateX++;
        coordinateY--;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXm1Y.addEventListener("click", function() {
    if(nowXm1Y.innerHTML !== '암흑물질') {
        coordinateX--;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowWeAreHere.addEventListener("click", function() {
    moveShip();
});

nowXp1Y.addEventListener("click", function() {
    if(nowXp1Y.innerHTML !== '암흑물질') {
        coordinateX++;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXm1Yp1.addEventListener("click", function() {
    if(nowXm1Yp1.innerHTML !== '암흑물질') {
        coordinateX--;
        coordinateY++;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXYp1.addEventListener("click", function() {
    if(nowXYp1.innerHTML !== '암흑물질') {
        coordinateY++;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});

nowXp1Yp1.addEventListener("click", function() {
    if(nowXp1Yp1.innerHTML !== '암흑물질') {
        coordinateX++;
        coordinateY++;
        moveShip();
    } else {
        console.log('접근할 수 없는 지역입니다.');
    }
});


