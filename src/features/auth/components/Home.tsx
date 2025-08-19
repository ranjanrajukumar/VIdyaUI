import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the structure of a menu item
interface MenuItem {
  menuId: number;
  parentId: number;
  menuName: string;
  displayName: string;
  subMenus: MenuItem[]; // recursive type
}

const MenuList: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<MenuItem[]>("https://ranjanrajukumar-001-site1.stempurl.com/api/MenuList")
      .then((response) => {
        setMenu(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, []);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center text-blue-700 font-extrabold mb-2 " style={{ width: "250px", padding: "10px", height:'100vh' ,backgroundColor:"#e5edf082"}}>
      <h3 style={{color:"blue"}}>Sidebar Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menu.map((item) => (
          <li key={item.menuId} style={{ marginBottom: "10px" }}>
            {/* Main Menu */}
            <div
              onClick={() => toggleMenu(item.menuId)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                padding: "8px",
                background: "#e9ecef",
                borderRadius: "5px",
              }}
            >
              {item.menuName}
            </div>

            {/* Submenus */}
            {openMenu === item.menuId && item.subMenus.length > 0 && (
              <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                {item.subMenus.map((sub) => (
                  <li
                    key={sub.menuId}
                    style={{
                      padding: "5px",
                      margin: "3px 0",
                      background: "#f1f3f5",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {sub.displayName}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
