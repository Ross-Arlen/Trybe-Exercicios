function textColor() {
    document.body.style.color = document.querySelector('.text-color-control').value;
}

document.querySelectorAll('.text-color-control')[1].addEventListener('click', textColor);

function backgroundColor() {
    document.body.style.backgroundColor = document.querySelector('.background-color-control').value;
}

document.querySelectorAll('.background-color-control')[1].addEventListener('click', backgroundColor);

function textSize() {
    document.body.style.fontSize = document.querySelector('.font-size-control').value + 'px';
}

document.querySelectorAll('.font-size-control')[1].addEventListener('click', textSize);

function lineSpacing() {
    document.body.style.lineHeight = document.querySelector('.line-spacing-control').value + 'px';
}

document.querySelectorAll('.line-spacing-control')[1].addEventListener('click', lineSpacing);

function fontFamily() {
    document.body.style.fontFamily = document.querySelector('.font-family-control').value;
}

document.querySelectorAll('.font-family-control')[1].addEventListener('click', fontFamily);