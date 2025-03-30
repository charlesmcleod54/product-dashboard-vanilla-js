// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                console.log(product.name);
            });
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    }   catch (error) {
        handleError(error);
    }
}

// Task 4: Display the Products
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    products.slice(0, 5).forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        productElement.appendChild(productPrice);

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productElement.appendChild(productImage);

        productContainer.appendChild(productElement);
    });
}

// Task 5: Reusable Error Handler
function handleError(error) {
    console.error('An Error occurred:', error.message);
}
