import { apiTemplate } from "../../../Shared";
import type { ColumnItem } from "../Model/type";

const url = "https://66378ea9288fedf69380a7b6.mockapi.io/columns";

export const api = apiTemplate<ColumnItem>(url);
