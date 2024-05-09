import { TaskItem } from "../Model/type";

export const api = {
  getList: async () => {
    const response = await fetch(
      "https://66378ea9288fedf69380a7b6.mockapi.io/tasks"
    );
    if (response.ok) {
      const json = await response.json();
      console.log("result", json);
    }
  },
  create: async (item: TaskItem) => {
    const response = await fetch(
      "https://66378ea9288fedf69380a7b6.mockapi.io/tasks",
      {
        method: "POST",
        body: JSON.stringify(item),
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log("result", json);
    }
  },
  update: (item: TaskItem) => {},
  delet: (id: string) => {},
};
