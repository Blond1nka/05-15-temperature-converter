document.getElementById('btn').addEventListener('click',conversion);

function conversion() {
    let fromVal = from();
    let toVal = to();
    let inputVal = input();
    let converted = convert(fromVal, toVal, inputVal);
    outputTo('result', converted);
}


function from() {
    let fromVal = document.getElementById("from").value;
    return fromVal;
}


function to() {
    let toVal = document.getElementById("to").value;
    return toVal;
}


function input() {
    let inputVal = document.getElementById("input").value;
    inputVal = inputVal.replace(",",".")
    return inputVal;
}


function outputTo(where, result){
    document.getElementById(where).innerText = result;
}


function convert(from, to, inputVal){
    let result = "";
switch ("" + from + to) {

    /*
12
21

13
31

23
32

22
33
11
    */

    case "21":
        result = FahrenheitToCelsius(inputVal)
        break;
    case "23":
        result = FahrenheitToKelvin(inputVal)
        break;
    case "31":
        result = KelvinToCelsius(inputVal)
        break;
    case "32":
        result = KelvinToFahrenheit(inputVal)
        break;    
    case "12":
        result = CelsiusToFahrenheit(inputVal)
        break;
    case "13":
        result = CelsiusToKelvin(inputVal)
        break;
    default:
        return inputVal;
        break;        
}
return result;
}


function FahrenheitToCelsius(input) {
    return (input-32)/1.8+"°C";
}

function FahrenheitToKelvin(input) {
    return ((input-32)/1.8)+273.15+"K";
}

function KelvinToCelsius(input) {
    return input-273.15+"°C";
}

function KelvinToFahrenheit(input) {
    return ((input-273.15)*1.8)+32+"F";
}

function CelsiusToFahrenheit(input) {
    return (input*1.8)+32+"F";
}

function CelsiusToKelvin(input) {
    return input+273.15+"K";
}
