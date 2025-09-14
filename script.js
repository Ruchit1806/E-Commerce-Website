// ======= PRODUCTS ARRAY =======
const products = [
  {id: 1, name: "Classic White T-Shirt", price: 20, img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=80"},
  {id: 2, name: "Running Sneakers", price: 45, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312789/02/sv01/fnd/IND/fmt/png/FUEGO-Profoam-Men%E2%80%99s-Responsive-Cushioned-Running-Shoes"},
  {id: 3, name: "Baseball Cap", price: 15, img: "https://th.bing.com/th/id/OIP.WlrOOqjTHC7EFtWj7jgX8QHaFj?w=252&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7"},
  {id: 4, name: "Leather Watch", price: 60, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"},
  {id: 5, name: "Travel Backpack", price: 35, img: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18919133a.webp"},
  {id: 6, name: "Winter Jacket", price: 70, img: "https://levi.in/cdn/shop/files/004JM0000_02_Front.jpg?v=1755690592"},
  {id: 7, name: "Wireless Headphones", price: 55, img: "https://th.bing.com/th/id/OIP.vh2FSVY3fjEgpvsPtVhPbwHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7"},
  {id: 8, name: "Sunglasses", price: 25, img: "https://tse1.mm.bing.net/th/id/OIP.RxgcfZJGLIqviefDg-by5wHaF9?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7"},
  {id: 9, name: "Formal Shoes", price: 50, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/374899/06/fnd/IND/fmt/png/Rebound-Future-Evo-Sneakers"},
  {id: 10, name: "Men's Hoodie", price: 40, img: "https://www.bing.com/th?id=OPAC.KQiy1qlhrk%2f2Ww474C474&o=5&pid=21.1&w=140&h=180&rs=1&qlt=100&dpr=1.3&o=2&c=8&pcl=f5f5f5"},
  {id: 11, name: "Ladies Handbag", price: 65, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092098/02/fnd/IND/fmt/png/PUMA-PLUSH-Women's-Trendy-Handbag-2.5L"},
  {id: 12, name: "Sports Water Bottle", price: 10, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/053518/01/dt04/fnd/IND/fmt/png/Training-Sportstyle-Spill-Proof-Water-Bottle-600ml"},
  {id: 13, name: "Running Shorts", price: 18, img: "https://i5.walmartimages.com/asr/46b64694-8c6d-4430-bc7f-db11207cb94e.517914c008c0dcbffc19d7722761a927.jpeg"},
  {id: 14, name: "Casual Shirt", price: 28, img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&auto=format&fit=crop&q=80"},
  {id: 15, name: "Laptop Bag", price: 45, img: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/11485105a.webp"},
  {id: 16, name: "Smartphone Case", price: 12, img: "https://tse2.mm.bing.net/th/id/OIP.RhFyQz0D4uOyjk4qNA7F1wHaE8?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7"},
  {id: 17, name: "Desk Lamp", price: 22, img: "https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-grey-green__1327045_pe944344_s5.jpg?f=xl"},
  {id: 18, name: "Gaming Mouse", price: 30, img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519198_sd.jpg"},
  {id: 19, name: "Bluetooth Speaker", price: 35, img: "https://i5.walmartimages.com/asr/02957b6e-b165-48b5-88af-ed12356b06eb.6538cd107509a68663ca5484a2660a04.jpeg"},
  {id: 20, name: "Yoga Mat", price: 25, img: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/YOGA%20MAT/WYMTMANT6OG/WYMTMANT6OG_LS1-1.jpg?tr=w-3840"},
  {id: 21, name: "Coffee Mug", price: 8, img: "https://www.ikea.com/in/en/images/products/faergrik-mug-stoneware-white__0711067_pe727942_s5.jpg?f=xl"},
  {id: 22, name: "Desk Plant", price: 15, img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80"},
  {id: 23, name: "Wall Clock", price: 28, img: "https://www.ikea.com/in/en/images/products/kuttersmycke-wall-clock-black__1061215_pe850324_s5.jpg?f=xxs"},
  {id: 24, name: "Perfume Bottle", price: 50, img: "https://dimg.dillards.com/is/image/DillardsZoom/zoom/valentino-donna-born-in-roma-intense-eau-de-parfum/00000000_zi_20356159.jpg"},
  {id: 25, name: "Casual Sneakers", price: 40, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399025/01/sv01/fnd/IND/fmt/png/Easy-Rider-Mix-Sneakers"},
  {id: 26, name: "Travel Suitcase", price: 80, img: "https://i5.walmartimages.com/asr/fedb4438-671f-49e6-bf62-fb2537e334c2.b104b924ba0619139ec3a37c052fe127.jpeg"},
  {id: 27, name: "Smart Watch", price: 90, img: "https://tse1.mm.bing.net/th/id/OIP.Bi6H2bGIVTjoKBmc6_AVFwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7"},
  {id: 28, name: "Denim Jeans", price: 38, img: "https://image.hm.com/assets/hm/93/36/933600d0d73f486043b8d0364424f5da31723bd9.jpg?imwidth=1260"},
  {id: 29, name: "Notebook Set", price: 12, img: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/9256417a.webp"},
  {id: 30, name: "Fitness Tracker", price: 75, img: "https://tse2.mm.bing.net/th/id/OIP.JyqELjxDATQSnS6Lif3ofAHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7"}
];

// ======= RENDER SHOP PRODUCTS =======
const productList = document.getElementById('product-list');
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(productList){
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="explore-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// ======= ADD TO CART =======
function addToCart(id){
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({...product, qty:1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// ======= UPDATE CART COUNT =======
function updateCartCount(){
  const countSpan = document.querySelectorAll("#cart-count");
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  countSpan.forEach(span => span.textContent = totalQty);
}

// Update on load
updateCartCount();

// ======= CART PAGE RENDER =======
const cartItemsTable = document.getElementById("cart-items");
const subtotalPrice = document.getElementById("subtotal-price");
const totalPrice = document.getElementById("total-price");

if(cartItemsTable){
  renderCart();
}

function renderCart(){
  cartItemsTable.innerHTML = "";
  let subtotal = 0;
  cart.forEach((item, index) => {
    const total = item.price * item.qty;
    subtotal += total;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.img}" alt="${item.name}" style="width:80px; border-radius:8px;"></td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td><input type="number" min="1" value="${item.qty}" style="width:60px;" onchange="updateQty(${index}, this.value)"></td>
      <td>₹${total}</td>
      <td><button onclick="removeItem(${index})" class="explore-btn" style="background:#ff4d4f;">Remove</button></td>
    `;
    cartItemsTable.appendChild(row);
  });
  subtotalPrice.textContent = "₹" + subtotal;
  totalPrice.textContent = "₹" + subtotal;
  updateCartCount();
}

// ======= UPDATE QUANTITY =======
function updateQty(index, qty){
  cart[index].qty = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ======= REMOVE ITEM =======
function removeItem(index){
  if(confirm("Are you sure you want to remove this item?")){
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}
