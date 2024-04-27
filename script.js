function convertTemperature() {
    const temp = document.getElementById('tempInput').value;
    const type = document.getElementById('tempType').value;
    const resultDiv = document.getElementById('result');

    let result;
    if (!temp) {
        resultDiv.textContent = 'Please enter a valid temperature.';
        return;
    }

    const temperature = parseFloat(temp);
    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    switch (type) {
        case 'Celsius':
            result = `${(temperature * 9/5 + 32).toFixed(2)} °F | ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            result = `${((temperature - 32) * 5/9).toFixed(2)} °C | ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            result = `${(temperature - 273.15).toFixed(2)} °C | ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
    }

    resultDiv.textContent = `Converted Temperature: ${result}`;
}
