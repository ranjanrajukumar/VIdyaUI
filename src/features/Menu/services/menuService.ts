import axios from "axios";
import { MenuItem } from "../types/menuTypes";

const API_URL = "https://ranjanrajukumar-001-site1.stempurl.com/api/MenuList";

export async function getMenuList(): Promise<MenuItem[]> {
  const response = await axios.get<MenuItem[]>(API_URL);
  return response.data;
}
