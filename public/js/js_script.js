function MenuItem(name, kCal, price, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.price = price;
    this.gluten = gluten;
    this.lactose = lactose;
    this.info = function() {
        return this.name + " contains " + this.kCal + " kCal";
    };
}

let burger1 = new MenuItem("Tower Burger", "900", "80", true, true);
console.log(burger1.gluten);
console.log(burger1.info());