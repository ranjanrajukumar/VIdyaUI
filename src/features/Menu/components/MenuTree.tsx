import { MenuItem } from "../types/menuTypes";
import { useMenuList } from "../hooks/useMenuList";

export default function MenuTree() {
  const { menus, loading, error, toggleMenu, isOpen } = useMenuList();

  if (loading) return <p>Loading menus...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const renderMenu = (items: MenuItem[]) => (
    <ul className="ml-2 space-y-1">
      {items.map((item) => (
        <li key={item.menuId}>
          <div
            onClick={() => toggleMenu(item.menuId)}
            className="flex justify-between items-center p-2 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 font-semibold"
          >
            <span>{item.menuName}</span>
            {item.subMenus.length > 0 && (
              <span>{isOpen(item.menuId) ? "▲" : "▼"}</span>
            )}
          </div>

          {isOpen(item.menuId) && item.subMenus.length > 0 && (
            <div className="ml-4 mt-1">{renderMenu(item.subMenus)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return <>{renderMenu(menus)}</>;
}
