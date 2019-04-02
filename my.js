function check()  {
    let a = parseInt(document.getElementById("numberA").value);
    let b = parseInt(document.getElementById("numberB").value);

    if (a % b === 0) {
        document.getElementById('result').innerHTML = "a chia het cho b";
    } else {
        document.getElementById('result').innerHTML = "a khong chia het cho b";
    }
}