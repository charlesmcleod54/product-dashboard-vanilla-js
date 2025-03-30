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
