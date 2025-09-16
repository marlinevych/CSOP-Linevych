"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDevelopers = showDevelopers;
exports.getWorkerByID = getWorkerByID;
const types_1 = require("./types");
const workers_1 = require("./workers");
function showDevelopers() {
    console.log("\nDevelopers:");
    workers_1.workers.forEach(w => {
        if (w.category === types_1.Category.Developer) {
            console.log(`${w.name} ${w.surname}`);
        }
    });
}
function getWorkerByID(id) {
    const worker = (0, workers_1.getAllWorkers)().find(w => w.id === id);
    return worker ? { name: worker.name, surname: worker.surname, salary: worker.salary } : undefined;
}
