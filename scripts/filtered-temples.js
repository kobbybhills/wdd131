const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
    //I Added three more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13759-thumb.jpg"
      },
  
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: 
          "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-1389-thumb.jpg"
      },
      
      {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        area: 82000,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-42433-thumb.jpg"
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
      dedication.textContent = `Dedicated: ${temple.dedicated}`;
  
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
      const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 2000;
      });
      displayTemples(oldTemples);
    } else if (criteria === "new") {
      const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2000;
      });
      displayTemples(newTemples);
    }
  }
  
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("active");
  });
  
  // Load all temples on page load
  window.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
  });
  const date = document.getElementById("lastModified")
  date.textContent = document.lastModified
  
























  
  
  