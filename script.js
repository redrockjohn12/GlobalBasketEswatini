const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});


const store = document.getElementById("store");
const shippingBox = document.getElementById("shippingBox");
const productPrice = document.getElementById("productPrice");
const shippingPrice = document.getElementById("shippingPrice");
const calculateBtn = document.getElementById("calculateBtn");

const resultProduct = document.getElementById("resultProduct");
const resultRunner = document.getElementById("resultRunner");
const resultShipping = document.getElementById("resultShipping");
const resultTotal = document.getElementById("resultTotal");
const resultShippingRow = document.getElementById("resultShippingRow");


function money(value) {
  return "R" + Number(value).toFixed(2);
}


function updateShippingField() {

  if (store.value === "shipping") {
    shippingBox.style.display = "block";
    resultShippingRow.style.display = "flex";
  } else {
    shippingBox.style.display = "none";
    resultShippingRow.style.display = "none";
  }

}


store.addEventListener("change", updateShippingField);


calculateBtn.addEventListener("click", () => {

  const product = parseFloat(productPrice.value) || 0;
  const shipping =
    store.value === "shipping"
      ? parseFloat(shippingPrice.value) || 0
      : 0;

  const runnerFee = product * 0.25;

  const total = product + runnerFee + shipping;

  resultProduct.textContent = money(product);
  resultRunner.textContent = money(runnerFee);
  resultShipping.textContent = money(shipping);
  resultTotal.textContent = money(total);

});


updateShippingField();
