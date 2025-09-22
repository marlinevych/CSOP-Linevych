  import * as readline from "readline";

  export function task14(rl: readline.Interface, callback: () => void) {
    function createCustomerID(name: string, id: number): string {
      return `${name} ${id}`; 
    }

    function getName() {
      rl.question("\nВведіть ім'я замовника: ", (name) => {
        const namePattern = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/;
        if (!namePattern.test(name.trim())) {
          console.log("Помилка: невалідне ім'я");
          return getName();
        }
        getID(name);
      });
    }

    function getID(name: string) {
      rl.question("Введіть ідентифікатор замовника: ", (idStr) => {
        const id = Number(idStr);
        if (isNaN(id) || id <= 0) {
          console.log("Помилка: некоректний ID");
          return getID(name);
        }

        const myID: string = createCustomerID(name, id);
        console.log("Результат createCustomerID:", myID);

        const myID2: string = createCustomerID("Marharyta", 12);
        console.log("Результат createCustomerID:", myID2);

        let idGenerator: (name: string, id: number) => string;
        idGenerator = (name, id) => `${name} ${id}`;
        console.log("Результат idGenerator (стрілочна):", idGenerator(name, id));

        idGenerator = createCustomerID;
        console.log("Результат idGenerator (createCustomerID):", idGenerator(name, id));

        callback();
      });
    }

    getName();
  }
