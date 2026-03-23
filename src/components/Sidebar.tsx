
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  avatarImage: string;
  name: string;
  bio: string;
}

export function Sidebar({ avatarImage, name, bio }: SidebarProps) {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  return (
    <aside className="space-y-6">
      {/* 个人简介卡片 - 第二幅图（头像） */}
      <Card>
        <CardHeader className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            {!avatarLoaded && !avatarError && (
              <div className="absolute inset-0 rounded-full animate-pulse bg-muted" />
            )}
            <Avatar className="w-24 h-24 mx-auto border-2 border-primary/20">
              {avatarError ? (
                <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
              ) : (
                <>
                  <img
                    src={avatarImage}
                    alt={name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      avatarLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => setAvatarError(true)}
                  />
                  <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
                </>
              )}
            </Avatar>
          </div>
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-4">{bio}</p>
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 分类卡片 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">分类</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {["技术分享", "生活随笔", "旅行日记", "读书笔记"].map((cat) => (
            <div
              key={cat}
              className="flex items-center justify-between text-sm cursor-pointer hover:text-primary transition-colors"
            >
              <span>{cat}</span>
              <span className="text-muted-foreground">
                {Math.floor(Math.random() * 10) + 1}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 热门标签 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">热门标签</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Vite", "TailwindCSS", "Node.js", "设计"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted rounded-full text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </span>
            )
          )}
        </CardContent>
      </Card>
    </aside>
  );
}
