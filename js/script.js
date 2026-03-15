console.log('Taste Of Odisha website loaded');

function openFood(name, desc, price, img, rating = 5){
    const popup = document.getElementById("foodPopup");
    document.getElementById("popupTitle").innerText = name;
    document.getElementById("popupDesc").innerText = desc;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImg").src = img;

    popup.style.display = "block";
    setRating(rating);
}

// Close popup
function closeFood(){
    const popup = document.getElementById("foodPopup");
    popup.style.display = "none";
    // Reset dragging state
    isDragging = false;
    canDrag = false;
    popup.style.cursor = "default";
}



// Close popup when ❌ is clicked
const closeBtn = document.getElementById("closePopup");
closeBtn.addEventListener("click", function(){
    closeFood();
});

// ------------------- Extra Features -------------------

// Set star rating
function setRating(rating){
    const stars = document.querySelectorAll("#foodPopup .rating span");
    stars.forEach((star, i) => {
        star.textContent = i < rating ? '⭐' : '☆';
    });
}

// Quantity selector
const quantityInput = document.getElementById("quantity");
document.getElementById("plusBtn").addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});
document.getElementById("minusBtn").addEventListener("click", () => {
    quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
});

// Order button
// document.getElementById("orderBtn").addEventListener("click", () => {
//     alert(`You ordered ${quantityInput.value} item(s)!`);
// });
// Cart array
let cart = [];

// Order button
document.getElementById("orderBtn").addEventListener("click", function(){

const name = document.getElementById("popupTitle").innerText;
const quantity = parseInt(document.getElementById("quantity").value);

// Add to cart
cart.push({name, quantity});

// Update cart count
updateCart();

// Show toast
showToast(`${quantity} ${name} added to your cart`);

});

// Update cart count
function updateCart(){
let totalItems = cart.reduce((sum,item)=>sum + item.quantity,0);
document.getElementById("cart-count").innerText = totalItems;
}

// Toast notification
function showToast(message){

const toast = document.getElementById("toast");

toast.innerText = message;
toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},3000);

}