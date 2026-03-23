
import { NavLink } from "react-router-dom";
import { BookOpen, User, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "首页", icon: BookOpen },
  { path: "/articles", label: "文章", icon: FolderOpen },
  { path: "/about", label: "关于", icon: User },
];

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16 gap-6">
        <span className="font-bold text-xl text-foreground">
          📝 我的博客
        </span>
        <div className="flex gap-1 ml-auto">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
