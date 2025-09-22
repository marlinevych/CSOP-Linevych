"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task15 = task15;
const workers_1 = require("./workers");
function getWorkerByID(id) {
    return workers_1.workers.find(w => w.id === id);
}
function logFirstAvailable(list = (0, workers_1.getAllWorkers)()) {
    console.log("Доступні працівники:");
    for (let worker of list) {
        if (worker.available) {
            console.log(worker.name, worker.surname);
        }
    }
}
function getWorkersSurnamesByCategory(category = "Designer") {
    return workers_1.workers.filter(w => w.category === category).map(w => w.surname);
}
function createCustomer(name, age, city) {
    console.log(`Замовник: ${name}`);
    if (age !== undefined)
        console.log(`Вік: ${age}`);
    if (city !== undefined)
        console.log(`Місто: ${city}`);
}
function сheckoutWorkers(customer, ...workerIDs) {
    console.log("Замовник:", customer);
    let availableWorkers = [];
    for (let id of workerIDs) {
        let worker = getWorkerByID(id);
        if (worker && worker.available) {
            availableWorkers.push(worker.name + " " + worker.surname);
        }
    }
    return availableWorkers;
}
function task15(rl, callback) {
    function getName() {
        rl.question("Введіть ім'я замовника: ", (name) => {
            const namePattern = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/;
            if (!namePattern.test(name.trim())) {
                console.log("Помилка: некоректне ім'я");
                return getName();
            }
            getAge(name);
        });
    }
    function getAge(name) {
        rl.question("Введіть вік (або залиште пустим): ", (ageInput) => {
            let age = undefined;
            if (ageInput.trim() !== "") {
                age = Number(ageInput);
                if (isNaN(age) || age <= 0) {
                    console.log("Помилка: yнекоректний вік");
                    return getAge(name);
                }
            }
            getCity(name, age);
        });
    }
    function getCity(name, age) {
        rl.question("Введіть місто (або залиште пустим): ", (cityInput) => {
            let city = cityInput.trim() || undefined;
            createCustomer(name, age, city);
            console.log("Прізвища дизайнерів:", getWorkersSurnamesByCategory());
            logFirstAvailable();
            console.log("Доступні ID працівників:", workers_1.workers.map(w => w.id).join(", "));
            getWorkerIDs(name);
        });
    }
    function getWorkerIDs(name) {
        rl.question("Введіть ID працівників через кому: ", (idsInput) => {
            const idsArray = idsInput.split(",").map(x => x.trim());
            if (!idsArray.every(x => !isNaN(Number(x)) && Number(x) > 0)) {
                console.log("Помилка: введені ID мають бути числами більше 0, розділеними комою.");
                return getWorkerIDs(name);
            }
            const workerIDs = idsArray.map(x => Number(x));
            const myWorkers = сheckoutWorkers(name, ...workerIDs);
            console.log("Доступні працівники:");
            myWorkers.forEach(w => console.log(w));
            const exampleWorkers = сheckoutWorkers("Маргарита", 12, 3, 5);
            console.log("Робітники, які доступні для Маргарита, 12, ПП-32, фотошоп:");
            exampleWorkers.forEach(w => console.log(w));
            callback();
        });
    }
    getName();
}
