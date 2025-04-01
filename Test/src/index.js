// typeof 해당 변수의 자료형 출력

// let num = 10; number
// num = 10.001; number
// num = infinity; number 10/0
// num = NaN; number 'abc'/0

//BigInt

// BigInt() or BigNum = 99999999999999999n

// Early Return Pattern

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