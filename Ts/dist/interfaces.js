"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const masalaChai = {
    id: 123,
    flavour: "masala",
    price: 20
};
const hotChai = {
    id: 124,
    flavour: "ginger",
    price: 15,
    milk: true
};
hotChai.milk = false; //allowed because milk is optional and not readonly
const car = {
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
};
const u = {
    name: "Vansh",
    age: 20
    //merge of interfaces with same name, properties are combined
};
//# sourceMappingURL=interfaces.js.map