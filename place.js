// Display the last modified date
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleString();
});


// Wind Chill Calculation
function calculateWindChill(tempCelsius, windSpeedKmh) {
    // Only run if temp <= 10°C and wind speed > 4.8 km/h
    if (tempCelsius <= 10 && windSpeedKmh > 4.8) {
        // Wind chill calculation (Celsius version of NOAA formula)
        return (
            13.12 +
            0.6215 * tempCelsius -
            11.37 * Math.pow(windSpeedKmh, 0.16) +
            0.3965 * tempCelsius * Math.pow(windSpeedKmh, 0.16)
        ).toFixed(1);
    } else {
        return "N/A";
    }
}

// Display wind chill on the page
const tempText = document.querySelector(".weather p:nth-of-type(1)").textContent;
const windText = document.querySelector(".weather p:nth-of-type(3)").textContent;

const temperature = parseFloat(tempText.match(/-?\d+(\.\d+)?/));
const windSpeed = parseFloat(windText.match(/-?\d+(\.\d+)?/));

const windChillValue = calculateWindChill(temperature, windSpeed);

const windChillElement = document.querySelector(".weather p:nth-of-type(4)");
windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillValue}°C`;


