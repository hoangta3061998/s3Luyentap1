function Check() {
    let a = parseFloat(document.getElementById('numA').value);
    let b = parseFloat(document.getElementById('numB').value);
    let c = parseFloat(document.getElementById('numC').value);
    if (a > b) {
        if (b > c) {
            document.getElementById('result').innerHTML = "So thu nhat la so lon nhat";

        } else {
            if (a > c) {
                document.getElementById('result').innerHTML = "So thu nhat la so lon nhat";
            } else {
                document.getElementById('result').innerHTML = "So thu ba la so lon nhat";
            }
        }
    } else {
        if (b > c) {
            document.getElementById('result').innerHTML = "So thu hai la so lon nhat";
        } else {
            document.getElementById('result').innerHTML = "So thu ba la so lon nhat";
        }
    }
}