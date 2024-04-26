
document.addEventListener('DOMContentLoaded', async () => {
    console.log("hmm");
    try {
        const response = await fetch('/getTopProducts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const products = data;
        const boxes = document.querySelectorAll('.box');

        if (products && products.length > 0) {
            products.forEach((product, index) => {
                //console.log(product.credit,product.price)
                const box = boxes[index];
                const image = box.querySelector('.image img');
                const name = box.querySelector('.content h4');
                const credits = box.querySelector('.price');
                const prices = box.querySelector('.credits');

                image.src = product.image;
                name.textContent = product.name;
                credits.textContent = `credits - ${product.credit}`;
                prices.textContent = `or Buy for Rs.${product.price}`;
            });
        } else {
            console.log(products);
        }
    } catch (error) {
        console.error('Error fetching top products:', error);
    }
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    document.getElementById('loadMoreBtn').addEventListener('click', async () => {
        try {
            const response = await fetch('/getMoreElements');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const products = data;
            const boxes = document.querySelectorAll('.box');

            if (products && products.length > 0) {
                products.forEach((product, index) => {
                //console.log(product.credit,product.price)
                const box = boxes[index];
                const image = box.querySelector('.image img');
                const name = box.querySelector('.content h4');
                const credits = box.querySelector('.price');
                const prices = box.querySelector('.credits');

                image.src = product.image;
                name.textContent = product.name;
                credits.textContent = `credits - ${product.credit}`;
                prices.textContent = `or Buy for Rs.${product.price}`;
            });
            } else {
                console.log(products);
            }
        } catch (error) {
            console.error('Error fetching more elements:', error);
        }
    });

    const cartItemsContainer = document.querySelector('.cart-items-container');
    const products = document.querySelectorAll('.products .box');

    products.forEach((product, index) => {
        const cartIcon = product.querySelector('.icons .fa-shopping-cart');
        cartIcon.addEventListener('click', () => {
            //event.preventDefault();
            const productName = product.querySelector('.content h4').textContent;
            const productPrice = product.querySelector('.price').textContent;
            const prodcredit = product.querySelector('.credits').textContent;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.querySelector('.image img').src}" alt="">
                <div class="content">
                    <h3>${productName}</h3>
                    <div class="price">${productPrice}</div>
                    <div class="credits">${prodcredit}</div>
                    <span class="fas fa-times"></span>
                </div>
            `;
            
            const removeIcon = cartItem.querySelector('.fa-times');
            removeIcon.addEventListener('click', () => {
                cartItem.remove();
            });
            
            cartItemsContainer.appendChild(cartItem);
        });
    });
    const checkoutButton = document.querySelector('.cart-items-container .btn');
    checkoutButton.addEventListener('click', () => {
        const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
        const queryParams = [];

        cartItems.forEach((cartItem, index) => {
            const productName = cartItem.querySelector('.content h3').textContent;
            const productPrice = cartItem.querySelector('.price').textContent;
            const productcred = cartItem.querySelector('.credits').textContent;
            const productImageSrc = cartItem.querySelector('img').src;

            queryParams.push(`product${index + 1}=${encodeURIComponent(productName)}&credits${index + 1}=${encodeURIComponent(productPrice)}&price${index+1}=${encodeURIComponent(productcred)}&image${index + 1}=${encodeURIComponent(productImageSrc)}`);
        });

        const queryString = queryParams.join('&');
        window.location.href = `checkout.html?${queryString}`;
    });
});
let navbar = document.querySelector('.header .navbar');
let cartItem = document.querySelector('.header .cart-items-container');
let searchForm = document.querySelector('.header .search-form');

document.getElementById('menu-btn').addEventListener('click', () => {
    navbar.dataset.toggle = (navbar.dataset.toggle === 'active') ? '' : 'active';
    cartItem.dataset.toggle='';
    searchForm.dataset.toggle='';
});

document.getElementById('cart-btn').addEventListener('click', () => {
    cartItem.dataset.toggle = (cartItem.dataset.toggle === 'active') ? '' : 'active';
    navbar.dataset.toggle='';
    searchForm.dataset.toggle='';
});

document.getElementById('search-btn').addEventListener('click', () => {
    searchForm.dataset.toggle = (searchForm.dataset.toggle === 'active') ? '' : 'active';
    navbar.dataset.toggle='';
    cartItem.dataset.toggle='';
});
window.onscroll =() =>{
    navbar.dataset.toggle='';
    cartItem.dataset.toggle='';
    searchForm.dataset.toggle='';
}
