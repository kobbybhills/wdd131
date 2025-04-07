const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedication: 1893,
      imageUrl: "images/salt-lake-temple.jpg"
    },
    {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedication: 2019,
      imageUrl: "images/rome-temple.jpg"
    },
    {
      name: "Laie Hawaii Temple",
      location: "Laie, Hawaii",
      dedication: 1919,
      imageUrl: "images/laie-hawaii-temple.jpg"
    },
    {
      name: "Kinshasa DR Congo Temple",
      location: "Kinshasa, DR Congo",
      dedication: 2019,
      imageUrl: "images/kinshasa-temple.jpg"
    }
  ];
  
  function displayTemples(templesArray) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
  
    templesArray.forEach((temple) => {
      const card = document.createElement("section");
      card.classList.add("card");
  
      const heading = document.createElement("h2");
      heading.textContent = temple.name;
  
      const location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;
  
      const dedication = document.createElement("p");
      dedication.textContent = `Dedicated: ${temple.dedication}`;
  
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = `${temple.name} image`;
  
      const caption = document.createElement("figcaption");
      caption.textContent = temple.name;
  
      card.appendChild(heading);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(image);
      card.appendChild(caption);
  
      gallery.appendChild(card);
    });
  }
  
  function filterTemples(criteria) {
    if (criteria === "all") {
      displayTemples(temples);
    } else if (criteria === "old") {
      const oldTemples = temples.filter((temple) => temple.dedication < 2000);
      displayTemples(oldTemples);
    } else if (criteria === "new") {
      const newTemples = temples.filter((temple) => temple.dedication >= 2000);
      displayTemples(newTemples);
    }
  }
  
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("active");
  });
  
  // Initial display
  displayTemples(temples);
  