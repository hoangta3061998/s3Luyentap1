function check() {
    let a = parseFloat(document.getElementById('point1').value);
    let b = parseFloat(document.getElementById('point2').value);
    let c = parseFloat(document.getElementById('point3').value);
    let total;
    total = (a * 0.1) + (b * 0.3) + (c * 0.6);
    if (total > 9) {
        document.getElementById('result').innerHTML = "Hoc sinh gioi";
    } else if (total >= 6.5) {
        document.getElementById('result').innerHTML = "Hoc sinh tien tien";
    } else if (total >= 5) {
        document.getElementById('result').innerHTML = "Hoc sinh trung binh";
    } else if (total >= 4) {
        document.getElementById('result').innerHTML = "Hoc sinh yeu";
    } else document.getElementById('result').innerHTML = "Hoc sinh kem";
}
