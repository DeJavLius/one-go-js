// this-1
/*
// 전역 공간
console.log(this); // window 객체

// 함수
function func() {
  console.log(this); // window 객체
}

func();
 */

// 메서드
/*
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: function () {
    console.log(this); // cafe 객체
  },
  // createCafe: {
  //   brand: "이디야",
  //   menu: "라떼",
  //   print: function () {
  //     console.log(this); // cafe 객체
  //   },
  // },
};
 */

/*
cafe.print(); // 아메리카노 cafe
// cafe.createCafe.print(); // 라떼 createCafe cafe

const myCafe = cafe.print;
myCafe(); // window
 */

// this-2
// 생성자
/*
function Cafe(menu) {
  console.log(this); // Cafe
  this.menu = menu;
}

let myCafe = new Cafe("latte");
// let myCafe = Cafe("latte"); // window
console.log(myCafe); // Cafe with latte / new 없이: undefined
 */

// 콜백 함수
/*
const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  }
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu('핫초코', cafe.setMenu);

console.log(cafe); // menu: ''
 */

// this & 화살표 함수
/*
function Counter() {
  this.count = 0;
  // setInterval(function () { // 일반
  //   this.count++;
  //   console.log(this.count);
  // }, 2000);

  setInterval(() => { // 화살표
    this.count++;
    console.log(this.count);
  }, 2000);
}

const counter = new Counter();
 */

// 메서드 작성
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => { // 메서드 작성 시 일반 함수
    console.log(this); // window
  }
};

cafe.print();

