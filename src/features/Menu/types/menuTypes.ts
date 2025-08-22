export interface MenuItem {
  menuId: number;
  parentId: number;
  menuName: string;
  displayName: string;
  subMenus: MenuItem[];
  icon: string;
}
