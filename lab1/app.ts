interface myWorker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
}

function getAllWorkers(): myWorker[] {
  return [
    { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000 },
    { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500 },
    { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600 },
    { id: 4, name: "Jarema", surname: "Vyshnevetskyi", available: true, salary: 1300 }
  ];
}

const workers = getAllWorkers();
console.log(workers);

function logFirstAvailable(workers: myWorker[] = getAllWorkers()): void {
  console.log(`Кількість робітників: ${workers.length}`);

  const firstAvailable = workers.find(w => w.available);
  if (firstAvailable) {
    console.log(`Перший доступний робітник: ${firstAvailable.name} ${firstAvailable.surname}`);
  }

  console.log("Колекція робітників:");
  for (const w of workers) {
    console.log(`- ${w.name} ${w.surname}, available: ${w.available}, salary: ${w.salary}`);
  }
}

logFirstAvailable();

