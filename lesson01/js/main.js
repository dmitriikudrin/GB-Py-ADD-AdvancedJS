const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    item.url = ('url' in item) ? item.url : '#'
    item.img = ('img' in item) ? item.url : 'https://xreferat.com/image/33/1305985457_1.png'

    return `<div class="product-item">
                <a href="${item.url}">
                    <div class="product-item-img">
                        <img src=${item.img} class="catalog-item-img" alt="">
                    </div>
                    <div class="product-item-info">
                        <div class="product-item-ch">
                            <h3 class="product-item-title">${item.title}</h3>
                            <p class="product-item-price">&#8381; ${item.price}</p>
                        </div>
                        <button class="buy-btn">Купить</button>
                    </div>
                </a>
            </div>`
};

const renderPage = list => {
    let productsList = ''
    list.map(item => productsList += renderProduct(item));
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);