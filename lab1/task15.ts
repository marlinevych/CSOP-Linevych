import * as readline from "readline";

type Worker = {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  category: string;
};

let workers: Worker[] = [
  { id: 1, name: "Ivan", surname: "Ivanov", available: true, category: "Designer" },
  { id: 2, name: "Petro", surname: "Petrov", available: false, category: "Developer" },
  { id: 3, name: "Olga", surname: "Shevchenko", available: true, category: "Designer" },
];

function getAllWorkers(): Worker[] {
  return workers;
}

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
