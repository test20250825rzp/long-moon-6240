
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";

interface SidebarProps {
  avatarImage: string;
  name: string;
  bio: string;
}

export function Sidebar({ avatarImage, name, bio }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* 个人简介卡片 - 第二幅图（头像） */}
      <Card>
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <img
              src={avatarImage}
              alt={name}
              className="w-full h-full object-cover"
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
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
