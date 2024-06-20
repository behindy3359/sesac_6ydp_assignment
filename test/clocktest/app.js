let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}
/** 함수*/
function pickDrink() {
  console.log('pickDrink 시작, 작동시간 측정');
  console.time('pickDrink');
  return new Promise((res)=>{
    setTimeout(function () {
      console.log(`고민 끝`); 
      product = `제로콜라`;
      price = `3000원`;
      console.timeEnd('pickDrink');
      res();
    }, 3000);
  })
}

function pay() {
  console.log('pay 시작, 작동시간 측정');
  console.time('pay');
  console.log(`pay.log,  price :${price},product:${product}`);
  return new Promise((res)=>{
    setTimeout(function () {
      console.log(`상품명: ${product} // 가격: ${price}`);
      console.timeEnd('pay');
      res();
    }, 5000);
  })
}

async function shopping(){
  goMart();
  await pickDrink();
  await pay();
}

shopping();

/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/



// let product, price;

// function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
// }

// function pickDrink() {
//   console.log('pickDrink 시작, 작동시간 측정');
//   console.time('pickDrink');
//   setTimeout(function () {
//     console.log(`고민 끝`);
//     product = `제로콜라`;
//     price = `3000원`;
//     console.timeEnd('pickDrink');
//   }, 3000);
// }

// function pay(product, price) {
//   console.log('pay 시작, 작동시간 측정');
//   console.time('pay');
//   console.log(`pay.log,  price :${price},product:${product}`);
//   setTimeout(function () {
//     console.log(`상품명: ${product} // 가격: ${price}`);
//     console.timeEnd('pay');
//   }, 5000);
// }

// goMart();
// pickDrink();
// pay(product, price);

// // pay 함수는 호출 시점의 전역변수인 product , price를 매개변수로 갖는다. 
// // 이들은 호출 시점에서 아직 값을 할당받지 않아 undefined 이며
// // 지정된 시간 이후 내부의 setTimeout에게 전달해준다.