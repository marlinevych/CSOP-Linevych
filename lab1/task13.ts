import { Category, Worker } from "./types";
import { workers, getAllWorkers } from "./workers";

export function showDevelopers(): void {
  console.log("\nDevelopers:");
  workers.forEach(w => {
    if (w.category === Category.Developer) {
      console.log(`${w.name} ${w.surname}`);
    }
  });
}

export function getWorkerByID(id: number): { name: string, surname: string, salary: number } | undefined {
  const worker = getAllWorkers().find(w => w.id === id);
  return worker ? { name: worker.name, surname: worker.surname, salary: worker.salary } : undefined;
}
