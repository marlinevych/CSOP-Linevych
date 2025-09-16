import { Category } from "./types";
import { getAllWorkers } from "./workers";

export function getWorkersSurnamesByCategory(category: Category): string[] {
  const workers = getAllWorkers();
  return workers.filter(w => w.category === category).map(w => w.surname);
}

export function logWorkersNames(names: string[]): void {
  console.log("Прізвища робітників:");
  names.forEach(n => console.log(n));
}
