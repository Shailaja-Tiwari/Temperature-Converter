function convertTemperature() {
    // Get input temperature value
    let inputTemp = document.getElementById("inputTemp").value;
    
    // Get the from and to units
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === toUnit) {
        // If both units are the same, no conversion is needed
        result = inputTemp;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        // Celsius to Fahrenheit conversion
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        // Fahrenheit to Celsius conversion
        result = (inputTemp - 32) * 5/9;
    }

    // Display the result
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
