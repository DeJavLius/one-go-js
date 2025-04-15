// typeof 해당 변수의 자료형 출력

// let num = 10; number
// num = 10.001; number
// num = infinity; number 10/0
// num = NaN; number 'abc'/0

//BigInt

// BigInt() or BigNum = 99999999999999999n

// Early Return Pattern
/*

function compare(num) {
  if (num == 0) {
    console.log("0");
  } else if (num < 0) {
    console.log("-1");
  }
  else {
    if (num >= 10) {
      console.log("10");
    } else {
      console.log("0<>10");
    }
  }
}

// 먼저 return을 통해 바로 처리됨
function better_compare(num) {
  if (num === 0) {
    return "";
  }
  if (num < 0) {
    return "-1";
  }
  if (num >= 10) {
    return "10";
  }

  return console.log("0<>10");
}

compare(15);
console.log(better_compare(13));

*/

// 함수 호이스팅
/*
connectStrings('study', 'hoisting');

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}
*/

// 변수 호이스팅

/*
console.log(num1);
console.log(num2); // undefined

let num1 = 123;
var num2 = 123;
*/

// 함수 선언방법
// 함수 선언식
/*
const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => a + b; // 생략 가능

console.log(add2(10, 20));
*/

// 콜백 함수
/*
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
}

const printResult = (result) => {
  console.log("result: " + result);
};

const doubleResult = (result) => {
  console.log("result * 2: " + result * 2);
}

calculate(3, 5, printResult);
calculate(3, 5, doubleResult);
*/

/*
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("callback test");
});

testFunc(function () {
  console.log("callback test");
});
*/

// 객체
// 생성자 함수, 리터럴

/*
let obj = new Object();
console.log(obj);

let ins = {};
console.log(ins);
*/

// 프로퍼티 키, 값

/*
let book = {
  title: 'javascript: first step',
  author: 'lmo',
  category: 'javascript',
  year: undefined,
  color: function (color) {
    return color;
  }
}

let car = {
  name: 'hoter',
  model: 'bmw',
  color: 'black',
};

console.log(car.name);
console.log(car.color);

console.log(car['name']);
console.log(car['model']);

const getValue = (key) => {
  console.log(car[key]);
};

getValue('color');
*/

// 프로퍼티 삭제, 추가

/*
const cat = {
  age: 2,
  name: 'kitty',
  gender: 'female'
};

cat.name = 'catty';
cat['color'] = 'spot';

delete cat.color;
delete cat['age'];

console.log(cat);


const person = {
  name: 'hong',
  age: 23,
  print: function () {
    console.log(`hello ${this.name}!`);
  }
};

person.print();
person['print']();
 */

// 배열
/*
let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3); // empty, length 3

let arr1 = [1, 2, 3];
let arr2 = [3]; // 생성자와 다르게 값으로 지정됨

console.log(arr1);
console.log(arr2);
*/
/*
let arr = [
  { name: 'hong' },
  1, 'array',
  function () {
    console.log('func');
  },
  null,
  undefined
]

console.log(arr);
 */

/*
let fruits = ['apple', 'orange', 'peach'];
fruits.push('grape'); // last append
fruits.unshift('banana'); // 1st append

console.log(fruits);

const animal = ['cat', 'dog', 'hamster'];

animal[2] = 'parrot';

console.log(animal);

animal.pop(); // last delete
animal.shift(); // 1st delete

console.log(animal);

animal.unshift('cat');
animal.push('fox');
animal.push('giraffe');
animal.splice(1, 2); // start index, last index delete

console.log(animal);
*/

/*
const colors = ['puple', 'skyblue', 'yellow', 'pink', 'green'];

colors.pop();

console.log(colors);
console.log(colors.length);
 */

// 생성자 함수
/*
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.greeting = function () {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`);
  };
}

const person1 = new Person('hong', 30, 'Manager');
const person2 = new Person('park', 25, 'Designer');

console.log(person1.name);
console.log(person2.age);

person1.greeting();
person2.greeting();
*/

// 반복문

// 기본 반복문
/*
for (let i = 1; i < 6; i++) {
  console.log(i);
}

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}
*/

/*
const person = {
  name: "hong",
  age: 25,
  height: 175,
};
 */

/*
let keyArray = Object.keys(person);

for (let i = 0; i < perArray.length; i++) {
  let nowKey = perArray[i];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}
 */

/*
let valueArray = Object.values(person);

for (let i = 0; i < valueArray.length; i++) {
  console.log(`value: ${valueArray[i]}`);
}

console.log(Object.values(person));
 */

/*
let entriesArray = Object.entries(person);

for (let i = 0; i < entriesArray.length; i++) {
  console.log(`key: ${entriesArray[i][0]}, value: ${entriesArray[i][1]}`);
}

console.log(Object.entries(person));
 */

/*
let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}

let human = {
  name: "honggildong",
  age: 25,
  height: 175,
};

for (let key of human) {
  console.log(`key: ${key},  value: ${human[key]}`);
}
 */

// 배열 내장 함수
// let arr = [1, 2, 3, 4, 5];

/* 
arr.foreach((element, index, array) => {
  console.log(`${index}번째 요소는 ${element}입니다.`);
  console.log(a);
});
 */

/* 
let nArray = arr.map((element) => {
  return element * 10;
});

console.log(nArray);
 */

/* 
let colors = ["green", "blue", "yellow"];

console.log(colors.at(-1)); // last element

console.log(colors.includes("blue")); // find start index
console.log(colors.includes("blue", 1));
console.log(colors.includes("blue", 2));

console.log(colors.indexOf("yellow"));
console.log(colors.indexOf("blue", 2)); // 객체나 배열일 경우 찾을 수 없음
console.log(colors.indexOf("purple"));
 */

/* 
let objColors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "purple" }
]
 */

/* 
let index = objColors.findIndex((element) => element.color == "yellow");

console.log(` index: ${index}, value: ${objColors[index].color}`);
 */

/* 
objColors.findIndex((element, index) => console.log(`${index}번째 값 ${element.id}: ${element.color}`));
objColors.findIndex((e, i, array) => console.log(array));
 */

/* 
let index = objColors.find((element) => element.color == "blue");

console.log(index);
 */

/* 
let filterArray = objColors.filter((element, index, array) => element.id > 1);
let sliceArray = objColors.slice(1, 3);

console.log(filterArray);
console.log(sliceArray); 
 */

/*
let fArray = ["green", "blue", "purple", "yellow"];

console.log(fArray.concat(sArray));
console.log(fArray.join()); // , 기본 구분자
console.log(fArray.join(" "));
 */

/* 
const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}

let colors = ["green", "blue", "purple", "yellow"];

colors.sort();
console.log(colors);
colors.sort(compare);
console.log(colors);
 */

/* 
const compareNum = (a, b) => {
  return a - b;
}

const compareReverseNum = (a, b) => {
  return b - a;
}

let numbers = [1, 100, 25, 50, 120, 3];

numbers.sort();
console.log(numbers);
numbers.sort(compareNum);
console.log(numbers);
numbers.sort(compareReverseNum);
console.log(numbers);
 */

let numbers = [1, 100, 25, 50];

let sum = 0;

numbers.forEach((element) => {
  sum += element;
});

console.log(sum);

sum = numbers.reduce((acc, cur, curIdx) => {
  console.log(acc, cur, curIdx);
  return acc + cur;
}, 0);

console.log(sum);

