const rateContainer = document.querySelector('.rating');
const thanksContainer = document.querySelector('.thanks');
const submitBTN = document.querySelector('.button');
const rates = document.querySelectorAll('.rate');
const rateSpan = document.querySelector('span');


submitBTN.addEventListener('click', () => {
    thanksContainer.classList.add('actived');
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateSpan.innerText = rate.innerText
    });
});


