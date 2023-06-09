function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = document.getElementById("result");
  
    // Perform temperature conversion
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      var convertedTemp = (inputTemp * 9/5) + 32;
      result.innerHTML = inputTemp + " Celsius = " + convertedTemp + " Fahrenheit";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      var convertedTemp = (inputTemp - 32) * 5/9;
      result.innerHTML = inputTemp + " Fahrenheit = " + convertedTemp + " Celsius";
    } else {
      result.innerHTML = "Please select valid temperature units.";
    }
  }
  