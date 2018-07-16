define("model/Person", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person {
        constructor(firstName, lastName) {
            this.fullName = firstName + " " + lastName;
        }
    }
    exports.Person = Person;
});
define("HelloWorld", ["require", "exports", "model/Person"], function (require, exports, Person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Startup {
        static main() {
            console.log('Hello World!');
            var person = new Person_1.Person("Bobo", "Ogibon");
            console.log(person.fullName);
            return 0;
        }
    }
    Startup.main();
});
//# sourceMappingURL=main.js.map