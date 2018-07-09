document.getElementById('calc'),addEventListener('click', calculate)
// input
function calculate() {
    let x1 = Number(document.getElementById('x1').value);
    let x2 = Number(document.getElementById('x2').value);
    let y1 = Number(document.getElementById('y1').value);
    let y2 = Number(document.getElementById('y2').value);
//process
let dis = Math.sqrt((x2 - x1) **2 + (y2 - y1) **2)
//output
document.getElementById('result').innerHTML = dis
}

let click = 0
document.getElementById('convert'),addEventListener('click', convert)
function convert() {
    if (click === 0){
    click = 1
    let tempEl = document.getElementById("temp")
    let celcius = Number(tempEl.innerHTML)
    let farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp2")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp3")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp4")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp5")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp6")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)

    tempEl = document.getElementById("temp7")
    celcius = Number(tempEl.innerHTML)
    farenheit = celsToFar(celcius)
    tempEl.innerHTML = farenheit.toFixed(2)
    }

    else{
    click = 0
    let tempEl = document.getElementById("temp")
    let farenheit = Number(tempEl.innerHTML)
    let celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)
    
    tempEl = document.getElementById("temp2")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)

    tempEl = document.getElementById("temp3")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)

    tempEl = document.getElementById("temp4")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)

    tempEl = document.getElementById("temp5")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)

    tempEl = document.getElementById("temp6")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)

    tempEl = document.getElementById("temp7")
    farenheit = Number(tempEl.innerHTML)
    celcius = farToCels(farenheit)
    tempEl.innerHTML = celcius.toFixed(2)
    }
}
function celsToFar(celcTemp){
    return celcTemp * (9/5) + 32
}
function farToCels(farTemp){
    return (farTemp - 32) * 5/9
}
console.log(click)
