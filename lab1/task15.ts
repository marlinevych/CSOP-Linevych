import * as readline from "readline";
import { workers, getAllWorkers } from "./workers";
import { Worker } from "./types";

function getWorkerByID(id: number): Worker | undefined {
  return workers.find(w => w.id === id);
}

function logFirstAvailable(list: Worker[] = getAllWorkers()): void {
  console.log("Доступні працівники:");
  for (let worker of list) {
    if (worker.available) {
      console.log(worker.name, worker.surname);
    }
  }
}

function getWorkersSurnamesByCategory(category: string = "Designer"): string[] {
  return workers.filter(w => w.category === category).map(w => w.surname);
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Замовник: ${name}`);
  if (age !== undefined) console.log(`Вік: ${age}`);
  if (city !== undefined) console.log(`Місто: ${city}`);
}

function сheckoutWorkers(customer: string, ...workerIDs: number[]): string[] {
  console.log("Замовник:", customer);
  let availableWorkers: string[] = [];

  for (let id of workerIDs) {
    let worker = getWorkerByID(id);
    if (worker && worker.available) {
      availableWorkers.push(worker.name + " " + worker.surname);
    }
  }

  return availableWorkers;
}

export function task15(rl: readline.Interface, callback: () => void) {

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

  function getAge(name: string) {
    rl.question("Введіть вік (або залиште пустим): ", (ageInput) => {
      let age: number | undefined = undefined;
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

  function getCity(name: string, age?: number) {
    rl.question("Введіть місто (або залиште пустим): ", (cityInput) => {
      let city = cityInput.trim() || undefined;

      createCustomer(name, age, city);

      console.log("Прізвища дизайнерів:", getWorkersSurnamesByCategory());
      logFirstAvailable();

      console.log("Доступні ID працівників:", workers.map(w => w.id).join(", "));

      getWorkerIDs(name);
    });
  }

  function getWorkerIDs(name: string) {
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
