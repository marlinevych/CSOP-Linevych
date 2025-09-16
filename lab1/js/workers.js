"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workers = void 0;
exports.getAllWorkers = getAllWorkers;
const types_1 = require("./types");
function getAllWorkers() {
    return [
        { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000, category: types_1.Category.Developer },
        { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500, category: types_1.Category.Designer },
        { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600, category: types_1.Category.QA },
        { id: 4, name: "Jarema", surname: "Vyshnevetskyi", available: true, salary: 1300, category: types_1.Category.BusinessAnalyst },
        { id: 5, name: "Olena", surname: "Shevchenko", available: true, salary: 1400, category: types_1.Category.ScrumMaster },
        { id: 6, name: "Ivan", surname: "Franko", available: false, salary: 1200, category: types_1.Category.Developer }
    ];
}
exports.workers = getAllWorkers();
