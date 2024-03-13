document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Laptop', category: 'electronics' },
        { name: 'T-shirt', category: 'clothing' },
    ];

    const productList = document.getElementById('product-list');
    const categoryLinks = document.querySelectorAll('nav ul li a');

    displayProducts(products);

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.id;
            const filteredProducts = products.filter(product => product.category === category || category === 'all');
            displayProducts(filteredProducts);
        });
    });

    function displayProducts(products) {
        productList.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <h2>${product.name}</h2>
                <p>Category: ${product.category}</p>
            `;
            productList.appendChild(productItem);
        });
    }
});
