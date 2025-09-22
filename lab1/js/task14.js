"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task14 = task14;
function task14(rl, callback) {
    function createCustomerID(name, id) {
        return `${name} ${id}`;
    }
    function getName() {
        rl.question("\nВведіть ім'я замовника: ", (name) => {
            const namePattern = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/;
            if (!namePattern.test(name.trim())) {
                console.log("Помилка: невалідне ім'я");
                return getName();
            }
            getID(name);
        });
    }
    function getID(name) {
        rl.question("Введіть ідентифікатор замовника: ", (idStr) => {
            const id = Number(idStr);
            if (isNaN(id) || id <= 0) {
                console.log("Помилка: некоректний ID");
                return getID(name);
            }
            const myID = createCustomerID(name, id);
            console.log("Результат createCustomerID:", myID);
            const myID2 = createCustomerID("Marharyta", 12);
            console.log("Результат createCustomerID:", myID2);
            let idGenerator;
            idGenerator = (name, id) => `${name} ${id}`;
            console.log("Результат idGenerator (стрілочна):", idGenerator(name, id));
            idGenerator = createCustomerID;
            console.log("Результат idGenerator (createCustomerID):", idGenerator(name, id));
            callback();
        });
    }
    getName();
}
