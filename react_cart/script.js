const productsData = [
    {
        id: 0,
        image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sunglasses 1",
        price: 100
    },
    {
        id: 1,
        image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sunglasses 2",
        price: 120
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sunglasses 3",
        price: 140
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sunglasses 4",
        price: 160
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/1532244/pexels-photo-1532244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sunglasses 5",
        price: 180
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/glasses-with-rounded-frames-still-life_23-2150649707.jpg?t=st=1718016143~exp=1718019743~hmac=0f1221ae68159271ec9d459f84b2375e08ddad5cd2e617fa5297184743fb007c&w=740",
        title: "Sunglasses 6",
        price: 200
    },
    {
        id: 7,
        image: "https://img.freepik.com/free-photo/view-summer-sunglasses-with-coral_23-2149460047.jpg?t=st=1718016186~exp=1718019786~hmac=fc466353e092ee881b7f4424703960ad2bfbf2722d4edeef49340515758f1172&w=1380",
        title: "Sunglasses 7",
        price: 22011111111
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-photo/front-view-modern-black-sunglasses-grey_140725-18251.jpg?t=st=1718016270~exp=1718019870~hmac=77b35155d6cc9b144939f614eca65ba7860f6be1c5266a24f7107defbae7b359&w=740",
        title: "Sunglasses 8",
        price: 240
    },
]
const cardContainer = document.querySelector(".products");
const cartContainer = document.querySelector(".cart");
let cart = [];
const renderCart = () => {
    if(cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your Cart is Empty</p>'
    } else {
        cartContainer.innerHTML = '';
        cartContainer.innerHTML = '';
    cart.map((cartItem) => {
        cartContainer.innerHTML +=
            `<div class="item">
                <div class="image">
                    <img src="${productsData[cartItem.id].image}">
                </div>
                <p class="item-name">${productsData[cartItem.id].title}</p>
                <div class="quantity">
                    <i class="fa-solid fa-plus fa-2xs" onclick="increaseQuantity(${cartItem.id})"></i>
                    <h5>${cartItem.quantity}</h5>
                    <i class="fa-solid fa-minus fa-2xs" onclick="decreaseQuantity(${cartItem.id})"></i>
                </div>
                <h4 class="price">$ ${productsData[cartItem.id].price * cartItem.quantity}</h4>
                <a class="delete" onclick="removeFromCart(${cartItem.id})"><i class="fa-solid fa-trash-can"></i></a>
            </div>`
        })
    }
}
const renderCards = () => {
    productsData.map((product) => {
        cardContainer.innerHTML += 
        `<div class="item">
            <div class="image">
                <img src="${product.image}">
            </div>
            <div class="item-name">${product.title}</div>
            <h4 class="price">$ ${product.price}</h4>
            <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`
    })
}
const addToCart = (productId) => {
    if(cart.find((item) => item.id === productId)){
        increaseQuantity(productId)
    } else {
        cart.push({ id: productId, quantity: 1 })
    }
    renderCart();
}
const increaseQuantity = (productId) => {
    const element = cart.find((item) => item.id === productId);
    element.quantity += 1;
    renderCart();
}
const decreaseQuantity = (productId) => {
    const element = cart.find((item) => item.id === productId);
    if(element.quantity > 1){
        element.quantity -= 1;
    } else {
        removeFromCart(element.id)
    }
    renderCart();
}
const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId)
    renderCart();
}
const clearCart = () => {
    cart = [];
    renderCart();
}
renderCart();
renderCards();