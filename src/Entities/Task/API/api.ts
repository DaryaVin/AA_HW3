import { apiTemplate } from "../../../Shared";
import type { TaskItem } from "../Model/type";

const url = "https://66378ea9288fedf69380a7b6.mockapi.io/tasks";

export const api = apiTemplate<TaskItem>(url);

// export const api = {
//   getList: async () => {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const json = await response.json();
//         return {
//           success: true,
//           data: json as TaskItem[],
//         };
//       } else {
//         return {
//           success: false,
//           error: "Error loading data from API, status code: " + response.status,
//         };
//       }
//     } catch (error) {
//       console.log("error", error);

//       return {
//         success: false,
//         error: error,
//       };
//     }
//   },
//   create: async (item: TaskItem) => {
//     const response = await fetch(url, {
//       headers: { "content-type": "application/json" },
//       method: "POST",
//       body: JSON.stringify(item),
//     });
//     if (response.ok) {
//       const json = await response.json();
//       return {
//         success: true,
//         data: json as TaskItem,
//       };
//     }
//   },
//   update: async (item: TaskItem) => {
//     const response = await fetch(url + "/" + item.id, {
//       headers: { "content-type": "application/json" },
//       method: "PUT",
//       body: JSON.stringify(item),
//     });
//     if (response.ok) {
//       const json = await response.json();
//       return {
//         success: true,
//         data: json as TaskItem,
//       };
//     }
//   },
//   delete: async (id: string) => {
//     const response = await fetch(url + "/" + id, {
//       method: "DELETE",
//     });
//     if (response.ok) {
//       const json = await response.json();
//       console.log("api DELETE", json);
//     }
//   },
// };
