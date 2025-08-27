// Side nav open/close
const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("close-nav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0%";
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-100%";
});

// Product search
const productContainer = document.getElementById("product-container");
const search = document.getElementById("search");
const productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  const enteredValue = event.target.value.toUpperCase();

  productList.forEach((product) => {
    const productName = product.querySelector("h1").textContent;
    if (productName.toUpperCase().includes(enteredValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
