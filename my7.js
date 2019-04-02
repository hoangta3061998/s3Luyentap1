function calfare() {
    let fare1 = parseFloat(document.getElementById('inter').value);
    let fare2 = parseFloat(document.getElementById('ext').value);
    let total;
    total = (fare1 * 200) + (fare2 * 1000);
    document.getElementById('fare').innerHTML = total + " dong";

}