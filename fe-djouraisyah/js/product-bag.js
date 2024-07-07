const productData = [
  {
    id: "product1",
    itemSrc: "./Image/Bags/b1.jpeg",
    name: "Puffy White Bag",
    price: 350000,
  },
  {
    id: "product2",
    itemSrc: "./Image/Bags/b2.jpeg",
    name: "Irish Blue Trapesium Bag",
    price: 410000,
  },
  {
    id: "product3",
    itemSrc: "./Image/Bags/b3.jpeg",
    name: "Leon Hand Bag",
    price: 320000,
  },
  {
    id: "product4",
    itemSrc: "./Image/Bags/b4.jpeg",
    name: "Kattie Mocca Bag",
    price: 360000,
  },
  {
    id: "product5",
    itemSrc: "./Image/Bags/b5.jpeg",
    name: "Kuoka Sling Bag",
    price: 300000,
  },
  {
    id: "product6",
    itemSrc: "./Image/Bags/b6.jpeg",
    name: "Dusty Dumpling Hand Bag",
    price: 380000,
  },
  {
    id: "product7",
    itemSrc: "./Image/Bags/b7.jpeg",
    name: "Hyori Messengger Bag",
    price: 290000,
  },
  {
    id: "product8",
    itemSrc: "./Image/Bags/b8.jpeg",
    name: "Beliana Black Sling Bag",
    price: 310000,
  },
  {
    id: "product9",
    itemSrc: "./Image/Bags/b9.jpeg",
    name: "Flippy Hand Bag",
    price: 330000,
  },
  {
    id: "product10",
    itemSrc: "./Image/Bags/b10.jpeg",
    name: "Round Vintage Hand Bag",
    price: 300000,
  },
  {
    id: "product11",
    itemSrc: "./Image/Bags/b11.jpeg",
    name: "Poppy Leather Tote Bag",
    price: 285000,
  },
  {
    id: "product12",
    itemSrc: "./Image/Bags/b12.jpeg",
    name: "Sunflowers Hand Bag",
    price: 340000,
  },
  {
    id: "product13",
    itemSrc: "./Image/Bags/b13.jpeg",
    name: "Light Blue Suede Sling Bag",
    price: 290000,
  },
  {
    id: "product14",
    itemSrc: "./Image/Bags/b14.jpeg",
    name: "Rosie Vintage Hand Bag",
    price: 330000,
  },
  {
    id: "product15",
    itemSrc: "./Image/Bags/b15.jpeg",
    name: "Lavender Leather Hand Bag",
    price: 350000,
  },
  {
    id: "product16",
    itemSrc: "./Image/Bags/b16.jpeg",
    name: "Pinky star Sling Bag",
    price: 300000,
  },
];

const parentProduct = document.getElementById("parent-product");

productData.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("row");
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

  const product = productData.filter((product) => product.id === productId);
  console.log("redirect to checkout");
  localStorage.setItem("productData", JSON.stringify(product[0]));
  window.location.href = "Layout%20Checkout.HTML";
}
