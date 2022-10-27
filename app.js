const rateContainer = document.querySelector('.rating');
const thanksContainer = document.querySelector('.thanks');
const submitBTN = document.querySelector('.button');
const rates = document.querySelectorAll('.rate');


submitBTN.addEventListener('click', function () {
    thanksContainer.classList.add('actived');
});

// rates.addEventListener('click', () => {
//     rates.classList.add('')
// })


