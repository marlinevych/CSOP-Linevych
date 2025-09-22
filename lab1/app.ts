import * as readline from "readline";
import { logFirstAvailable } from "./task11";
import { getWorkersSurnamesByCategory, logWorkersNames } from "./task12";
import { showDevelopers, getWorkerByID } from "./task13";
import { task14 } from "./task14";
import { task15 } from "./task15";
import { Category } from "./types";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("1.1 – Базові типи");
  console.log("1.2 – Enum і фільтрація");
  console.log("1.3 – Стрілочні функції");
  console.log("1.4 – Типи функцій");
  console.log("1.5 – Додаткові параметри");
  console.log("0 – Вихід\n");
  
  rl.question("Введіть номер завдання: ", handleMenuChoice);
}

function handleMenuChoice(taskChoice: string) {
  switch (taskChoice) {
    case "1.1":
      logFirstAvailable();
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
        let selectedCategory: Category | null = null;
        if (catNum === "1") selectedCategory = Category.BusinessAnalyst;
        else if (catNum === "2") selectedCategory = Category.Developer;
        else if (catNum === "3") selectedCategory = Category.Designer;
        else if (catNum === "4") selectedCategory = Category.QA;
        else if (catNum === "5") selectedCategory = Category.ScrumMaster;

        if (selectedCategory) {
          const surnames = getWorkersSurnamesByCategory(selectedCategory);
          logWorkersNames(surnames);
        } else {
          console.log("Некоректний номер");
        }
        showMenu(); 
      });
      break;

    case "1.3":
      showDevelopers();
      rl.question("Введіть ID робітника: ", (idAnswer) => {
        const id = Number(idAnswer);
        const worker = getWorkerByID(id);
        if (worker) {
          console.log("Робітник:", worker);
        } else {
          console.log("Не знайдено");
        }
        showMenu();
      });
      break;

    case "1.4":
      task14(rl, showMenu);
      break;

    case "1.5":
      task15(rl, showMenu);
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
