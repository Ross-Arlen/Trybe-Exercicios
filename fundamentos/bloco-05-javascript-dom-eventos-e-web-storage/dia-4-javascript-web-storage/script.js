function textColor() {
    document.body.style.color = document.querySelector('.text-color-control').value;
    localStorage.setItem('txtColor', document.querySelector('.text-color-control').value);
}

document.querySelectorAll('.text-color-control')[1].addEventListener('click', textColor);

function backgroundColor() {
    document.body.style.backgroundColor = document.querySelector('.background-color-control').value;
    localStorage.setItem('bgColor', document.querySelector('.background-color-control').value);
}

document.querySelectorAll('.background-color-control')[1].addEventListener('click', backgroundColor);

function textSize() {
    document.body.style.fontSize = document.querySelector('.font-size-control').value + 'px';
    localStorage.setItem('txtSize', document.querySelector('.font-size-control').value + 'px');
}

document.querySelectorAll('.font-size-control')[1].addEventListener('click', textSize);

function lineSpacing() {
    document.body.style.lineHeight = document.querySelector('.line-spacing-control').value + 'px';
    localStorage.setItem('lineSpacing', document.querySelector('.line-spacing-control').value + 'px');
}

document.querySelectorAll('.line-spacing-control')[1].addEventListener('click', lineSpacing);

function fontFamily() {
    document.body.style.fontFamily = document.querySelector('.font-family-control').value;
    localStorage.setItem('fontFamily', document.querySelector('.font-family-control').value);
}

document.querySelectorAll('.font-family-control')[1].addEventListener('click', fontFamily);

window.onload = function () {
    document.body.style.color = localStorage.getItem('txtColor', document.querySelector('.text-color-control').value);
    document.body.style.backgroundColor = localStorage.getItem('bgColor', document.querySelector('.background-color-control').value);
    document.body.style.fontSize = localStorage.getItem('txtSize', document.querySelector('.font-size-control').value + 'px');
    document.body.style.lineHeight = localStorage.getItem('lineSpacing', document.querySelector('.line-spacing-control').value + 'px');
    document.body.style.fontFamily = localStorage.getItem('fontFamily', document.querySelector('.font-family-control').value);
}