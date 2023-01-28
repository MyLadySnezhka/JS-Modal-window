const elBtn = document.querySelector('.cart_button');
const elRoot = document.querySelector('.root');
const elModal = document.querySelector('.modal');
const elBtnClose = document.querySelector('button[name=btn_close]');
const elBtnOK = document.querySelector('button[name=btn_OK]');
const elItemBD = document.querySelector('.item_bd');

//let menu_item = [];

let products = [
    {
        id: 1,
        name: 'Стойка переднего стабилизатора',
        about: 'Опора шаровая Camry (91-01)/ES250 (89-91)/ES300 (91-97)/RX300 (00-03)',
        model: '900210-АБ-18 - Toyota',
        price: 450,
        stock: 'В наличии',
    },

    {
        id: 2,
        name: 'Стойка переднего стабилизатора',
        about: 'Опора шаровая Camry (91-01)/ES250 (89-91)/ES300 (91-97)/RX300 (00-03)',
        model: '900210-АБ-18 - Toyota',
        price: 550,
        stock: 'Под заказ',
    },

    {
        id: 5,
        name: 'Стойка переднего стабилизатора',
        about: 'Опора шаровая Camry (91-01)/ES250 (89-91)/ES300 (91-97)/RX300 (00-03)',
        model: '900210-АБ-18 - Toyota',
        price: 350,
        stock: 'Нет на складе',
    },

];

const renderProduct = () => {
    const html = products.map((item) => {
        const _html = `
            <div class="item_img"></div>
            <div class="item_text">
                <h3>${item.name}</h3>
                <span>${item.about}</span>
                <p>${item.model}</p>
            </div>    
            <div class="item_price">${item.price}<br><span>${item.stock}</span></div>
            <div class="buy">
                <p class="map"><a href="#"><i class="fa-solid fa-location-dot"></i> Киев, Индустриальная, 47</a></p>
                <button type="button" class="cart_button"><i class="fa-solid fa-cart-plus"></i> В корзину</button>
            </div>
        `
        return _html;
    }).join('');

    elItemBD.innerHTML = html;  
};


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

renderProduct();

