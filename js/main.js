const elBtn = document.querySelector('.cart_button');
const elRoot = document.querySelector('.root');
const elModal = document.querySelector('.modal');
const elBtnClose = document.querySelector('button[name=btn_close]');
const elBtnOK = document.querySelector('button[name=btn_OK]');

elBtn.addEventListener('click', () => {
    elModal.classList.add('show');
    elRoot.classList.add('shadow');
});

const btn_close = () => {
    elModal.classList.remove('show');
    elRoot.classList.remove('shadow');
    return;
};

elBtnClose.addEventListener('click', () => {
    btn_close();
});

elBtnOK.addEventListener('click', () => {
    btn_close();
});

