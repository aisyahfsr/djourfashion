(function () {
    const ls = localStorage.getItem('user')
    if (ls === null) {
        if (confirm('Anda belum login!')) {
            window.location.href = 'Layout%20Login.HTML'
        }
    }
    const data = JSON.parse(ls)
    // var nama = document.getElementById("nama").innerHTML = "Halo, " + data.username
    // var saldo = document.getElementById("saldo").innerHTML = "Saldo anda: " + data.balance

    // Retrieve product data from local storage
    const productData = JSON.parse(localStorage.getItem('productData'));
    console.log(`product Data ${productData}`);

    // Populate product name and price in the form
    document.getElementById('productName').value = productData.name;
    document.getElementById('productPrice').value = productData.price;

    // Handle form submission
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log('Form submitted:', productData);
    });
})();

// Post data dari checkout form
function postChckoutFormData(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const product = form.querySelector('[name="Product"]').value;
    const price = form.querySelector('[name="Price"]').value;
    const quantity = form.querySelector('[name="quantity"]').value;
    const name = form.querySelector('[name="Name"]').value;
    const address = form.querySelector('[name="Address"]').value;
    const phone = form.querySelector('[name="Telepone"]').value;
    const payment = form.querySelector('[name="Payment"]').value;
    const shipping = form.querySelector('[name="Shipping"]').value;

    // Buat objek data
    const data = {
        product_name: product,
        price: price,
        quantity: quantity,
        name: name,
        address: address,
        phone_number: phone,
        payment_method: payment,
        shipping_method: shipping
    };

    // Kirim data sebagai JSON
    fetch("https://djouraisyah-production.up.railway.app/checkout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Proses Checkout Telah Berhasil.');
                form.reset(); {
                    window.location.href = 'index.html'
                }
            } else {
                alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
            }
        })
        .catch(error => console.error('Error sending checkout data:', error));
}


// Event listener untuk form submission
document.querySelector('#checkoutForm').addEventListener('submit', postChckoutFormData);
