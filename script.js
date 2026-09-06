/* =========================
   PRODUCT FILTER
========================= */
 
const categoryButtons =
  document.querySelectorAll(".category");
 
const productCards =
  document.querySelectorAll(".product-card");
 
categoryButtons.forEach(button => {
 
  button.addEventListener("click", () => {
 
    categoryButtons.forEach(btn =>
      btn.classList.remove("active")
    );
 
    button.classList.add("active");
 
    const selectedCategory =
      button.dataset.category;
 
    productCards.forEach(card => {
 
      const cardCategory =
        card.dataset.category;
 
      if (
        selectedCategory === "all" ||
        selectedCategory === cardCategory
      ) {
 
        card.style.display = "block";
 
      } else {
 
        card.style.display = "none";
 
      }
 
    });
 
  });
 
});
 
 
/* =========================
   QUOTE MODAL
========================= */
 
const modal =
  document.getElementById("quoteModal");
 
const selectedProduct =
  document.getElementById("selectedProduct");
 
 
function requestQuote(productName) {
 
  selectedProduct.textContent =
    "Product: " + productName;
 
  modal.classList.add("show");
 
}
 
 
function closeQuote() {
 
  modal.classList.remove("show");
 
}
 
 
/* Close modal when clicking outside */
 
modal.addEventListener("click", function(event) {
 
  if (event.target === modal) {
    closeQuote();
  }
 
});
 
 
/* =========================
   SEND WHATSAPP ENQUIRY
========================= */
 
const quoteForm =
  document.getElementById("quoteForm");
 
quoteForm.addEventListener("submit", function(event) {
 
  event.preventDefault();
 
  const name =
    document.getElementById("customerName").value;
 
  const phone =
    document.getElementById("customerPhone").value;
 
  const message =
    document.getElementById("customerMessage").value;
 
  const product =
    selectedProduct.textContent;
 
  /*
    IMPORTANT:
    Replace the number below with
    your actual WhatsApp number.
 
    Format:
    Zimbabwe = 263 + number
    Example:
    263771234567
  */
 
  const businessNumber =
    "263789009829";
 
  const whatsappMessage =
    `Hello MakTech Solutions,
 
I would like to request a quotation.
 
${product}
 
Name: ${name}
Phone: ${phone}
 
Message:
${message}`;
 
  const whatsappURL =
    `https://wa.me/${businessNumber}?text=` +
    encodeURIComponent(whatsappMessage);
 
  window.open(
    whatsappURL,
    "_blank"
  );
 
  quoteForm.reset();
 
  closeQuote();
 
});
 
 
/* =========================
   AUTO CLOSE MENU / ESC
========================= */
 
document.addEventListener("keydown", function(event) {
 
  if (event.key === "Escape") {
    closeQuote();
  }
 
});
 
