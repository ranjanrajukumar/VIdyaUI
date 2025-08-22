import { MenuItem } from "../types/menuTypes";
import { useMenuList } from "../hooks/useMenuList";
import { ChevronDown, ChevronRight, User, Users, Calendar, BookOpen, GraduationCap, Folder, FileText,IndianRupee } from "lucide-react";

interface MenuTreeProps {
  isCollapsed?: boolean;
}

// Icon mapping function
const getIconComponent = (iconName: string, size = 18) => {
  const iconMap: Record<string, React.ReactNode> = {
    "fa-fa-student": <GraduationCap size={size} />,
    "fa-fa-user": <User size={size} />,
    "fa-fa-users": <Users size={size} />,
    "fa-fa-calendar": <Calendar size={size} />,
    "fa-fa-book": <BookOpen size={size} />,
    "fa-fa-folder": <Folder size={size} />,
    "fa-fa-file": <FileText size={size} />,
    "fa-indian-rupee-sign": <IndianRupee size={size} />, // Indian Rupee icon
  };
  
  return iconMap[iconName] || <FileText size={size} />;
};

export default function MenuTree({ isCollapsed = false }: MenuTreeProps) {
  const { menus, loading, error, toggleMenu, isOpen } = useMenuList();

  if (loading) return <p className="p-2 text-gray-600">Loading menus...</p>;
  if (error) return <p className="p-2 text-red-500">{error}</p>;

  const renderMenu = (items: MenuItem[], level = 0) => (
    <ul className={`relative ${level > 0 ? 'border-l-2 border-gray-200 ml-4 pl-4' : ''}`}>
      {items.map((item) => {
        const hasChildren = item.subMenus && item.subMenus.length > 0;
        
        return (
          <li key={item.menuId} className="mb-1">
            <div
              onClick={() => hasChildren && toggleMenu(item.menuId)}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                level === 0 
                  ? "font-semibold hover:bg-blue-100 text-blue-800" 
                  : "font-normal hover:bg-gray-100 text-gray-700"
              } ${isCollapsed && level === 0 ? "justify-center" : "justify-between"}`}
            >
              {isCollapsed && level === 0 ? (
                // Collapsed view - show icon with tooltip
                <div className="relative group">
                  {getIconComponent(item.icon, 20)}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.displayName || item.menuName}
                  </div>
                </div>
              ) : (
                // Expanded view
                <>
                  <div className="flex items-center gap-2">
                    {getIconComponent(item.icon)}
                    <span>{item.displayName || item.menuName}</span>
                  </div>
                  {hasChildren && (
                    <span className="text-gray-500">
                      {isOpen(item.menuId) ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </span>
                  )}
                </>
              )}
            </div>

            {!isCollapsed && isOpen(item.menuId) && hasChildren && (
              <div className="mt-1">{renderMenu(item.subMenus, level + 1)}</div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return <div className={isCollapsed ? "text-center" : ""}>{renderMenu(menus)}</div>;
}