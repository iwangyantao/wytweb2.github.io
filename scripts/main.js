let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let myStr = myImage.getAttribute('src');
    if (myStr === 'images/20221129-164808.jpg') {
       myImage.setAttribute('src', 'images/20221202-164252.jpg');
    } else {
        myImage.setAttribute('src', 'images/20221129-164808.jpg');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '学习web 真是太简单了' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = '学习web 真是太简单了' + storeName;
}

myButton.onclick = function () {
    setUserName();
}