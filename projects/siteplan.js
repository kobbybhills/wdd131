// Display the last modified date
const lastModified = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleString();
});




// Load vocabulary list
const vocabList = [
    { english: "Hello", twi: "Akwabaa" },
    { english: "Thank you", twi: "Medaase" },
    { english: "How are you?", twi: "Wo ho te sɛn?" },
    { english: "I'm fine", twi: "Me ho yɛ" }
  ];
  
  const listElement = document.getElementById("vocab-list");
  if (listElement) {
    vocabList.forEach(word => {
      const li = document.createElement("li");
      li.textContent = `${word.english} - ${word.twi}`;
      listElement.appendChild(li);
    });
  }
  
  // Handle practice form
  const form = document.getElementById("practice-form");
  if (form) {
    form.addEventListener("Translate", function (event) {
      event.preventDefault();
      const answer = document.getElementById("answer").value.trim().toLowerCase();
      const feedback = document.getElementById("feedback");
  
      if (answer === "medaase") {
        feedback.textContent = "Correct! Well done.";
      } else {
        feedback.textContent = "Oops! Try again. 'Thank you' in Twi is 'Medaase'.";
      }
  
      // Store name in localStorage
      const name = document.getElementById("name").value;
      localStorage.setItem("username", name);
    });
  }
