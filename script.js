function convertTemperature() {

    let temperature = Number(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if (isNaN(temperature)) {
        error.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (unit === "Celsius" && temperature < -273.15) {
        error.innerHTML = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "Fahrenheit" && temperature < -459.67) {
        error.innerHTML = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "Kelvin" && temperature < 0) {
        error.innerHTML = "Kelvin cannot be below 0.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "Celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    }

    else if (unit === "Fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }

    else if (unit === "Kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    result.innerHTML =
        "Celsius: " + celsius.toFixed(2) + " °C<br>" +
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
        "Kelvin: " + kelvin.toFixed(2) + " K";
}