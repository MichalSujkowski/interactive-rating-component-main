const rateContainer = document.querySelector('.rating');
const thanksContainer = document.querySelector('.thanks');
const submitBTN = document.querySelector('.button');
const rates = document.querySelectorAll('.rate');
const rateSpan = document.querySelector('span');
const thankBtn = document.querySelector('i');


submitBTN.addEventListener('click', () => {
    thanksContainer.classList.add('actived');
    rateContainer.classList.remove('actived');
});

thankBtn.addEventListener('click', () => {
    rateContainer.classList.add('actived');
    thanksContainer.classList.remove('actived');
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateSpan.innerText = rate.innerText
    });
});




