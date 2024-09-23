
function convertirTemperatura() {
    let celsius = prompt("Ingresa la temperatura a convertir en grados Celsius: ")

    if (celsius === null) 
        
    return;

    celsius = Number(celsius);

    if (isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        return;
}

const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9/5) + 32;

console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);

}

convertirTemperatura();