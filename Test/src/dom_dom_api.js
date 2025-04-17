// DOM
/*
let $color = document.getElementById("color");
console.log($color);
 */

/*
let $animalInfo = document.querySelector('div.animal-info'); // class
let ageElement = document.querySelector('div#age'); // id

console.log($animalInfo);
console.log(ageElement);
 */

// querySelectorAll, getElementsByClassName, getElementsByTagName

/*
let $infoItem = document.querySelectorAll('div.info-item');
console.log($infoItem);
 */

/*
let $infoItemClass = document.getElementsByClassName('info-item');
console.log($infoItemClass);
 */

/*
let $infoItemTag = document.getElementsByTagName('div');
console.log($infoItemTag);
 */

// 조작
/*
let $name = document.getElementById('name');
$name.className = 'dog-name';

console.log($name);
console.log($name.className);

let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.id = 'animal';

console.log($animalInfo);
console.log($animalInfo.id);

let $color = document.getElementById('color');
$color.classList.add('dog-color');
console.log($color);

$color.classList.remove('info-item');
console.log($color);
 */

/*
let $age = document.getElementById('age');
$age.textContent = '5살';

console.log($age);

let $color = document.getElementById('color');
$color.style.color = 'brown';
$color.style.fontSize = '30px';
 */

// 새로운 요소 추가
/*
let $type = document.createElement('div');
$type.className = 'info-item';
$type.id = 'type';
$type.textContent = '말티즈';

console.log($type);
 */

// appendChild
/*
let $type = document.createElement('div');
$type.className = 'info-item';
$type.id = 'type';
let $typeText = document.createTextNode('말티즈');

let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($type);
$type.appendChild($typeText);

console.log($type);
console.log($typeText);
 */

/*
let $button = document.createElement('button');
$button.id = 'new-button';
$button.classList.add('new-button');
$button.textContent = '버튼';
$button.addEventListener("click", () => {
  window.alert('클릭');
});

let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($button);

console.log($animalInfo);
 */

// innerHTML
/*
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.innerHTML = '<div id="name">고양이</div>'

console.log($animalInfo);
 */