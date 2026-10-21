import type { PageName } from "../../types/page";

export interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

interface MenuItem {
  name: PageName;
  label: string;
}

const menuItems: MenuItem[] = [
  { name: "home", label: "Ana Sayfa" },
  { name: "events", label: "Etkinlikler" },
  { name: "add", label: "Ekle" },
];

export function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="site-nav">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.name}`}
          className={current === item.name ? "aktif" : ""}
          aria-current={current === item.name ? "page" : undefined}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.name);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
