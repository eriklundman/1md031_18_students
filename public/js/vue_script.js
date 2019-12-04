var socket = io();

var vm = new Vue({
    el: '#main',
    data: {
        order: food,
        orders: {},
        details: {},
        overview: [],
        burgerOrder: []
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
            let values = getInfo();
            let info = values[0];
            let burgers = values[1];

            this.overview = info;
            this.burgerOrder = burgers;

            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: this.details,
                orderItems: burgers,
                personalInformation: info,
            });
        },
    }
})