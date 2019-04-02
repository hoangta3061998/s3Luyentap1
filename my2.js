function checkAge() {
    let tuoi = parseInt(document.getElementById('age').value);
    if (tuoi >= 16) {
        document.getElementById('result').innerHTML = "Hoc sinh du tuoi vao lop 10";
    } else {
        document.getElementById('result').innerHTML = "Hoc sinh chua du tuoi vao lop 10";
    }

}