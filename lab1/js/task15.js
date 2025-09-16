"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task15 = task15;
let workers = [
    { id: 1, name: "Ivan", surname: "Ivanov", available: true, category: "Designer" },
    { id: 2, name: "Petro", surname: "Petrov", available: false, category: "Developer" },
    { id: 3, name: "Olga", surname: "Shevchenko", available: true, category: "Designer" },
];
function getAllWorkers() {
    return workers;
}
function getWorkerByID(id) {
    return workers.find(w => w.id === id);
}
function logFirstAvailable(list = getAllWorkers()) {
    console.log("Доступні працівники:");
    for (let worker of list) {
        if (worker.available) {
            console.log(worker.name, worker.surname);
        }
    }
}
function getWorkersSurnamesByCategory(category = "Designer") {
    return workers.filter(w => w.category === category).map(w => w.surname);
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
    console.log("\n--- Завдання 1.5 ---");
    rl.question("Введіть ім'я замовника: ", (name) => {
        rl.question("Введіть вік (або залиште пустим): ", (ageInput) => {
            rl.question("Введіть місто (або залиште пустим): ", (cityInput) => {
                let age = ageInput ? Number(ageInput) : undefined;
                let city = cityInput || undefined;
                createCustomer(name, age, city);
                console.log("Прізвища дизайнерів:", getWorkersSurnamesByCategory());
                logFirstAvailable();
                console.log("Доступні ID працівників:", workers.map(w => w.id).join(", "));
                rl.question("Введіть ID працівників через кому: ", (idsInput) => {
                    let workerIDs = idsInput.split(",").map(x => Number(x.trim()));
                    let myWorkers = сheckoutWorkers(name, ...workerIDs);
                    console.log("Доступні працівники:");
                    myWorkers.forEach(w => console.log(w));
                    callback();
                });
            });
        });
    });
}
