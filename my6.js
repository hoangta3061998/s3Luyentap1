function calculate() {
    let sales = parseFloat(document.getElementById('sale').value);
    let commis;
    if (sales >= 50000000) {
        commis = sales * 0.1;
        document.getElementById('result').innerHTML = commis;
    } else if (sales >= 35000000) {
        commis = sales * 0.075;
        document.getElementById('result').innerHTML = commis;
    } else if (sales >= 20000000) {
        commis = sales * 0.05;
        document.getElementById('result').innerHTML = commis;
    } else {
        commis = sales * 0.03;
        document.getElementById('result').innerHTML = commis;
    }

}