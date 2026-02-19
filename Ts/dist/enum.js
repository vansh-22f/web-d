"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var size;
(function (size) {
    size[size["SMALL"] = 0] = "SMALL";
    size[size["MEDIUM"] = 1] = "MEDIUM";
    size[size["LARGE"] = 2] = "LARGE";
})(size || (size = {}));
const val = size.MEDIUM;
console.log(val); //1
//by default, enum values start from 0 and increment by 1 for each member. 
//so small=0, medium=1, large=2
var color;
(function (color) {
    color[color["SMALL"] = 100] = "SMALL";
    color[color["MEDIUM"] = 101] = "MEDIUM";
    color[color["LARGE"] = 102] = "LARGE"; //automatically assigned 102
})(color || (color = {}));
const val2 = color.MEDIUM;
console.log(val2); //101
//# sourceMappingURL=enum.js.map