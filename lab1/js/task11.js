"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFirstAvailable = logFirstAvailable;
const workers_1 = require("./workers");
function logFirstAvailable(workers = (0, workers_1.getAllWorkers)()) {
    console.log(`\nКількість робітників: ${workers.length}`);
    const firstAvailable = workers.find(w => w.available);
    if (firstAvailable) {
        console.log(`\nПерший доступний: ${firstAvailable.name} ${firstAvailable.surname}`);
    }
    console.log("\nКолекція:");
    for (const w of workers) {
        console.log(`- ${w.name} ${w.surname}, available: ${w.available}, salary: ${w.salary}`);
    }
}
