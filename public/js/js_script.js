function getInfo() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    //let street = document.getElementById("street").value;
    //let house = document.getElementById("house").value;
    let payment = document.getElementById("paymethod").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let table = document.getElementById("table");
    let burgers = table.getElementsByTagName("INPUT");



    let info = [];
    let burgerOrder = [];
    info.push(name, email, payment, gender);

    for (var i = 0; i < burgers.length; i++) {
        if (burgers[i].checked) {
            burgerOrder.push(burgers[i].value);
        }
    }
    return [info, burgerOrder];
}