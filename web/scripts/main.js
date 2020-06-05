

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/student1.png') {
      myImage.setAttribute('src', 'images/student2.png');
    } else {
      myImage.setAttribute('src', 'images/student1.png');
    }
}



let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = `明日酱欢迎你哦⌯'ㅅ'⌯，${myName}`;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `明日酱欢迎你哦⌯'ㅅ'⌯，${storedName}`;
}


let myButton = document.querySelector('button');
myButton.onclick = function() {
   setUserName();
}

