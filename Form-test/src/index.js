// select 조작
/*
const $fruitSelect = document.getElementById('fruitSelect');
$fruitSelect.remove(1);
 */

/*
$fruitSelect.addEventListener('change', (event) => {
  console.log(event.target.value);
});
 */

// input 조작
const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

/* 
const $loginBtn = document.querySelector('button');

$loginBtn.addEventListener('click', (event) => {
  if ($userName.value.length <= 0) {
    alert("이름을 반드시 입력해 주세요.");
  } else if ($password.value.length <= 0) {
    alert("비밀번호를 반드시 입력해 주세요.");
  }

  console.log($userName.value);
  console.log($password.value);
});
 */

$userName.value = "아무개";
$password.addEventListener('input', (event) => {
  console.log(event.target.value);
});

