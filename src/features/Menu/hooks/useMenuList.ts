import { useEffect, useState } from "react";
import { getMenuList } from "../services/menuService";
import { MenuItem } from "../types/menuTypes";

export function useMenuList() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openMenus, setOpenMenus] = useState<Set<number>>(new Set());

  useEffect(() => {
    getMenuList()
      .then(setMenus)
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load menus");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const isOpen = (id: number) => openMenus.has(id);

  return { menus, loading, error, toggleMenu, isOpen };
}
