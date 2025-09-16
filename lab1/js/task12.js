"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkersSurnamesByCategory = getWorkersSurnamesByCategory;
exports.logWorkersNames = logWorkersNames;
const workers_1 = require("./workers");
function getWorkersSurnamesByCategory(category) {
    const workers = (0, workers_1.getAllWorkers)();
    return workers.filter(w => w.category === category).map(w => w.surname);
}
function logWorkersNames(names) {
    console.log("Прізвища робітників:");
    names.forEach(n => console.log(n));
}
