// Example of populating the product options dynamically
document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('productName');
    
    const products = [
      "Product A",
      "Product B",
      "Product C",
      "Product D"
    ];
  
    // Create and append option elements for each product
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
    });
  });

  
  
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
