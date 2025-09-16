import * as readline from "readline";

export function task14(rl: readline.Interface, callback: () => void) {
  function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`; 
  }

  rl.question("\nВведіть ім'я замовника: ", (name) => {
    rl.question("Введіть ідентифікатор замовника: ", (idStr) => {
      const id = Number(idStr);

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
  });
}
