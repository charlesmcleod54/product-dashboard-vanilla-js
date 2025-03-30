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
