const productData = [{
    id: "product1",
    itemSrc: "./Image/Accessories/A1.jpeg",
    name: "Pentagon Bracelet Set",
    price: 290000
  },
  {
    id: "product2",
    itemSrc: "./Image/Accessories/A2.jpeg",
    name: "Simple pearl Bracelet",
    price: 260000
  },
  {
    id: "product3",
    itemSrc: "./Image/Accessories/A3.jpeg",
    name: "Hera Ring",
    price: 300000
  },
  {
    id: "product4",
    itemSrc: "./Image/Accessories/A4.jpeg",
    name: "Tear Drop Necklace",
    price: 360000
  },
  {
    id: "product5",
    itemSrc: "./Image/Accessories/A5.jpeg",
    name: "Siren Pearls Necklace",
    price: 400000
  },
  {
    id: "product6",
    itemSrc: "./Image/Accessories/A6.jpeg",
    name: "Milky way Jewelry Set",
    price: 480000
  },
  {
    id: "product7",
    itemSrc: "./Image/Accessories/A7.jpeg",
    name: "Rose pendant Necklace",
    price: 355000
  },
  {
    id: "product8",
    itemSrc: "./Image/Accessories/A8.jpeg",
    name: "Double Knot Bracelet",
    price: 320000
  },
  {
    id: "product9",
    itemSrc: "./Image/Accessories/A9.jpeg",
    name: "Vintage Brown Belt",
    price: 185000
  },
  {
    id: "product10",
    itemSrc: "./Image/Accessories/A10.jpeg",
    name: "Brownie Ring belt",
    price: 130000
  },
  {
    id: "product11",
    itemSrc: "./Image/Accessories/A11.jpeg",
    name: "Vienna Belt",
    price: 150000
  },
  {
    id: "product12",
    itemSrc: "./Image/Accessories/A12.jpeg",
    name: "Medusa Black Belt",
    price: 150000
  }
];

const parentProduct = document.getElementById('parent-product');

productData.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('row');
  productCard.id = product.id;

  productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">
        <div class="product-text">
            <h5>Hot</h5>
        </div>
        <div class="heart-icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="ratting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">
            <h4>${product.name}</h4>
            <p>Rp ${product.price}</p>
            <button class="btn-co" onclick="redirectToCheckout('${product.id}')">Buy</button>
        </div>
    `;

  parentProduct.appendChild(productCard);
});

//API untuk memanggil nama dan price di Form CO
function redirectToCheckout(productId) {
  console.log("redirect to checkout");
  console.log(productId);

  const product = productData.filter(product => product.id === productId);
  console.log("redirect to checkout");
  localStorage.setItem('productData', JSON.stringify(product[0]));
  window.location.href = 'Layout%20Checkout.HTML';
}