const elBtn = document.querySelector('button[name=btn1]');
const elRoot = document.querySelector('.root');
const elModal = document.querySelector('.modal');

elBtn.addEventListener('click', () => {
    elModal.classList.add('show');
    elRoot.classList.add('show');
})

