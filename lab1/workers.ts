import { Worker, Category } from "./types";

export function getAllWorkers(): Worker[] {
  return [
    { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000, category: Category.Developer },
    { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500, category: Category.Designer },
    { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600, category: Category.QA },
    { id: 4, name: "Jarema", surname: "Vyshnevetskyi", available: true, salary: 1300, category: Category.BusinessAnalyst },
    { id: 5, name: "Olena", surname: "Shevchenko", available: true, salary: 1400, category: Category.ScrumMaster },
    { id: 6, name: "Ivan", surname: "Franko", available: false, salary: 1200, category: Category.Developer }
  ];
}

export const workers = getAllWorkers();
