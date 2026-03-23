
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./AnimatedCard";

interface SidebarProps {
  avatarImage: string;
  name: string;
  bio: string;
}

export function Sidebar({ avatarImage, name, bio }: SidebarProps) {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const categories = ["技术分享", "生活随笔", "旅行日记", "读书笔记"];
  const tags = ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js", "设计"];

  return (
    <aside className="space-y-6">
      {/* 个人简介卡片 */}
      <AnimatedCard animation="slide" delay={100}>
        <Card className="overflow-hidden gradient-border">
          <CardHeader className="text-center pb-2">
            <div className="relative w-24 h-24 mx-auto mb-4">
              {!avatarLoaded && !avatarError && (
                <div className="absolute inset-0 rounded-full skeleton" />
              )}
              <Avatar className="w-24 h-24 mx-auto border-4 border-primary/20 animate-float">
                {avatarError ? (
                  <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
                ) : (
                  <>
                    <img
                      src={avatarImage}
                      alt={name}
                      className={cn(
                        "w-full h-full object-cover transition-opacity duration-300",
                        avatarLoaded ? "opacity-100" : "opacity-0"
                      )}
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
              {[Github, Twitter, Mail].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedCard>

      {/* 分类卡片 */}
      <AnimatedCard animation="slide" delay={200}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">分类</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((cat, index) => (
              <div
                key={cat}
                className={cn(
                  "flex items-center justify-between text-sm cursor-pointer",
                  "transition-all duration-300 hover:text-primary hover:translate-x-2"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{cat}</span>
                <span className="text-muted-foreground">
                  {Math.floor(Math.random() * 10) + 1}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </AnimatedCard>

      {/* 热门标签 */}
      <AnimatedCard animation="slide" delay={300}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">热门标签</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 bg-muted rounded-full text-xs cursor-pointer",
                  "transition-all duration-300 hover:bg-primary hover:text-primary-foreground",
                  "hover:scale-105 hover:shadow-md"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </CardContent>
        </Card>
      </AnimatedCard>
    </aside>
  );
}
