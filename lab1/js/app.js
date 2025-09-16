"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const task11_1 = require("./task11");
const task12_1 = require("./task12");
const task13_1 = require("./task13");
const task14_1 = require("./task14");
const task15_1 = require("./task15");
const types_1 = require("./types");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    console.log("\n--- ГОЛОВНЕ МЕНЮ ---");
    console.log("1.1 – Базові типи");
    console.log("1.2 – Enum і фільтрація");
    console.log("1.3 – Стрілочні функції");
    console.log("1.4 – Типи функцій");
    console.log("1.5 – Необов'язкові, додаткові та залишкові параметри");
    console.log("0 – Вихід\n");
    rl.question("Введіть номер завдання: ", handleMenuChoice);
}
function handleMenuChoice(taskChoice) {
    switch (taskChoice) {
        case "1.1":
            (0, task11_1.logFirstAvailable)();
            showMenu();
            break;
        case "1.2":
            console.log("\nКатегорії:");
            console.log("1. Business analyst");
            console.log("2. Developer");
            console.log("3. Designer");
            console.log("4. QA");
            console.log("5. Scrum master");
            rl.question("Виберіть номер категорії: ", (catNum) => {
                let selectedCategory = null;
                if (catNum === "1")
                    selectedCategory = types_1.Category.BusinessAnalyst;
                else if (catNum === "2")
                    selectedCategory = types_1.Category.Developer;
                else if (catNum === "3")
                    selectedCategory = types_1.Category.Designer;
                else if (catNum === "4")
                    selectedCategory = types_1.Category.QA;
                else if (catNum === "5")
                    selectedCategory = types_1.Category.ScrumMaster;
                if (selectedCategory) {
                    const surnames = (0, task12_1.getWorkersSurnamesByCategory)(selectedCategory);
                    (0, task12_1.logWorkersNames)(surnames);
                }
                else {
                    console.log("Некоректний номер");
                }
                showMenu();
            });
            break;
        case "1.3":
            (0, task13_1.showDevelopers)();
            rl.question("Введіть ID робітника: ", (idAnswer) => {
                const id = Number(idAnswer);
                const worker = (0, task13_1.getWorkerByID)(id);
                if (worker) {
                    console.log("Робітник:", worker);
                }
                else {
                    console.log("Не знайдено");
                }
                showMenu();
            });
            break;
        case "1.4":
            (0, task14_1.task14)(rl, showMenu);
            break;
        case "1.5":
            (0, task15_1.task15)(rl, showMenu);
            break;
        case "0":
            rl.close();
            break;
        default:
            console.log("Некоректний вибір");
            showMenu();
    }
}
showMenu();
