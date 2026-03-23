
import { NavLink } from "react-router-dom";
import { BookOpen, User, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { path: "/", label: "首页", icon: BookOpen },
  { path: "/articles", label: "文章", icon: FolderOpen },
  { path: "/about", label: "关于", icon: User },
];

export function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16 gap-6">
        <span className="font-bold text-xl text-foreground flex items-center gap-2 animate-float">
          📝 我的博客
        </span>
        <div className="flex gap-1 ml-auto">
          {navItems.map(({ path, label, icon: Icon }, index) => (
            <NavLink
              key={path}
              to={path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={({ isActive }) =>
                cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {/* 悬停背景动画 */}
              <span
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transform transition-transform duration-300",
                  hoveredIndex === index ? "scale-x-100" : "scale-x-0",
                  "origin-left"
                )}
              />
              
              {/* 图标动画 */}
              <Icon className={cn(
                "h-4 w-4 transition-transform duration-300",
                hoveredIndex === index ? "scale-110 rotate-12" : ""
              )} />
              
              {/* 文字 */}
              <span className="relative z-10">{label}</span>
              
              {/* 底部指示器 */}
              <span className={cn(
                "absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300",
                hoveredIndex === index ? "w-full left-0" : "w-0 left-1/2"
              )} />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
