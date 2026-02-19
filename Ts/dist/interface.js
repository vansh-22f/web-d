"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    console.log(`Hi ${user.name}`);
}
class CollegeStudent {
    name;
    rollNo;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
const user1 = {
    username: "Vansh",
    bio: "Student at XYZ University" //optional
};
const c1 = {
    appName: "MyApp",
    version: 1.0
};
// c1.appName="NewApp" // Error: Cannot assign to 'appName' because it is a read-only property.
//# sourceMappingURL=interface.js.map