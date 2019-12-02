/*function MenuItem(name, kCal, price, gluten, lactose, image) {
    this.name = name;
    this.kCal = kCal;
    this.price = price;
    this.gluten = gluten;
    this.lactose = lactose;
    this.image = image;
    this.info = function() {
        return this.name + " contains " + this.kCal + " kCal";
    };
}
let burger1 = new MenuItem("Tower Burger", "900", "80", true, true, "img/hamburger1.jpg");
let burger2 = new MenuItem("Kevin Bacon", "800", "90", true, false, "img/hamburger2.jpg");
let burger3 = new MenuItem("Hollywood Burger", "9000", "100", false, true, "img/hamburger3.jpg");
let burgers = [];
burgers.push(burger1, burger2, burger3);*/
//burgers.push(burger2);
//burgers.push(burger3);
var socket = io();

var vm = new Vue({
    el: '#main',
    data: {
        order: food,
        orders: {},
        details: {},
        //chosenBurger: [],
        //overview: ""
    },

    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },

        displayOrder: function(event){
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };

            this.details= {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y
            };


        },

        addOrder: function (event) {
            console.log("Button clicked!");
            console.log(getInfo());

            let values = getInfo();
            let info = values[0];
            let burgers = values[1];




            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: this.details,
                orderItems: burgers,
                personalInformation: info,
            });

            //console.log("hej " + this.chosenBurger);
            //this.overview = this.fullName + this.chosenBurger + this.gender;

            document.getElementById("displayInfo").innerHTML =
                "Burgers: " + burgers +
                ",  Name: " + info[0] +
                ",  Email: " + info[1] +
                ",  Payment: " + info[2] +
                ",  Gender: " + info[3];

        },
    }




})