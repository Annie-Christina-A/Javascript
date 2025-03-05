const addToCartButton = document.querySelectorAll(".add-to-cart");
const cartTableBody = document.querySelector("#cart tbody");
const grandTotalElement = document.getElementById("grand-total");
const checkoutButton = document.getElementById("checkout");
let cart = [];

addToCartButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    const product = this.parentElement;
    const id = product.dataset.id;
    const price = parseFloat(product.dataset.price);
    const name = product.querySelector("span").textContent;
    const isAlreadyExists = cart.find((item) => item.id == id);
    if (isAlreadyExists) {
      isAlreadyExists.quantity += 1;
    } else {
      const new_item = { id, price, name, quantity: 1 };
      cart.push(new_item);
    }

    console.table(cart);
    updateCart();
  });
});
function updateCart() {
  cartTableBody.innerHTML = "";
  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td>
            <td>${item.price}</td>
            <td>
              <button class="decrease">-</button>
              ${item.quantity}
              <button class="increase">+</button>
            </td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove">Remove</button></td>`;

    row.querySelector(".decrease").addEventListener("click", function () {
      if (item.quantity>1) {
        item.quantity-=1
        updateCart();
      }
    });


    row.querySelector(".increase").addEventListener("click", function () {
        item.quantity += 1;
        updateCart();
      
    });

    row.querySelector(".remove").addEventListener("click", function () {
      if (confirm("Are you sure to delete?")) {
        cart = cart.filter((cartItem) => cartItem.id !== item.id);
        updateCart();
      }
    });
    cartTableBody.appendChild(row);
  });
  updateGrandTotal();
}

function updateGrandTotal() {
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  grandTotalElement.textContent = grandTotal.toFixed(2);
}
checkoutButton.addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(
      JSON.stringify(cart, ["name", "price", "quantity"]) +
        "\nCheckout successfully"
    );
  }
});
