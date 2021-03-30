let arrows = document.body.querySelectorAll('.arrow');
let hiddenTexts = document.body.querySelectorAll('.dropdownText')
let headers = document.querySelectorAll('.header')
function eventListener(number) {
    if (hiddenTexts[number].style.display === '' && headers[number].style.fontWeight === '') {
        headers[number].style.fontWeight = 'bolder';
        hiddenTexts[number].style.cursor = 'auto';
        hiddenTexts[number].style.display = 'block';
    } else {
        hiddenTexts[number].style.display = ''
        headers[number].style.fontWeight = ''
    }
    if (arrows[number].style.transform === 'rotate(180deg)') {
        arrows[number].style.transform = 'rotate(0deg)'
    } else {
        arrows[number].style.transform = 'rotate(180deg)';
    }
}
function conditional(number) {
    if (hiddenTexts[number].style.display === 'block') {
        hiddenTexts[number].style.display = ''
        headers[number].style.fontWeight = ''
        arrows[number].style.transform = 'rotate(0deg)'
    }
}
function conditional2(number1, number2, number3, number4) {
    conditional(number1)
    conditional(number2)
    conditional(number3)
    conditional(number4)
}

arrows[0].addEventListener('click', () => { eventListener(0), conditional2(1, 2, 3, 4) })
arrows[1].addEventListener('click', () => { eventListener(1), conditional2(2, 3, 4, 0) })
arrows[2].addEventListener('click', () => { eventListener(2), conditional2(3, 4, 0, 1) })
arrows[3].addEventListener('click', () => { eventListener(3), conditional2(4, 0, 1, 2) })
arrows[4].addEventListener('click', () => { eventListener(4), conditional2(0, 1, 2, 3) })

headers[0].addEventListener('click', () => { eventListener(0), conditional2(1, 2, 3, 4) })
headers[1].addEventListener('click', () => { eventListener(1), conditional2(2, 3, 4, 0) })
headers[2].addEventListener('click', () => { eventListener(2), conditional2(3, 4, 0, 1) })
headers[3].addEventListener('click', () => { eventListener(3), conditional2(4, 0, 1, 2) })
headers[4].addEventListener('click', () => { eventListener(4), conditional2(0, 1, 2, 3) })