import { apiTemplate } from "../../../Shared";
import type { TaskItem } from "../Model/type";

const url = "https://66378ea9288fedf69380a7b6.mockapi.io/tasks";

export const api = apiTemplate<TaskItem>(url);
