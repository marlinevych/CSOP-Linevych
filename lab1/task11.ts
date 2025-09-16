import { Worker } from "./types";
import { getAllWorkers } from "./workers";

export function logFirstAvailable(workers: Worker[] = getAllWorkers()): void {
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
