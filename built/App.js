"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./model/Person");
class Startup {
    static main() {
        console.log('Hello World!');
        var person = new Person_1.Person("Bobo", "Ogibon");
        console.log(person.fullName);
        return 0;
    }
}
Startup.main();
//# sourceMappingURL=App.js.map