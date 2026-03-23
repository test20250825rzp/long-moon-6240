
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./AnimatedCard";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readTime: number;
  index?: number;
}

export function BlogCard({
  id,
  title,
  excerpt,
  coverImage,
  category,
  publishedAt,
  readTime,
  index = 0,
}: BlogCardProps) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={index * 100} animation="scale">
      <Card 
        className={cn(
          "overflow-hidden cursor-pointer group card-hover-lift",
          "border-border/50 hover:border-primary/50"
        )}
        onClick={() => navigate(`/article/${id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden bg-muted">
          {/* 加载占位符 */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 skeleton" />
          )}
          
          {/* 图片 */}
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
              <span className="text-sm">图片加载失败</span>
            </div>
          ) : (
            <>
              <img
                src={coverImage}
                alt={title}
                className={cn(
                  "w-full h-full object-cover image-hover-zoom",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              
              {/* 悬停遮罩 */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent",
                "transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )} />
              
              {/* 悬停图标 */}
              <div className={cn(
                "absolute inset-0 flex items-center justify-center",
                "transition-all duration-300",
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}>
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
              </div>
            </>
          )}
          
          {/* 分类标签 */}
          <Badge className={cn(
            "absolute top-3 left-3 bg-primary/90 backdrop-blur-sm",
            "transition-all duration-300",
            isHovered ? "translate-y-0" : ""
          )}>
            {category}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className={cn(
            "text-lg line-clamp-2 transition-colors duration-300",
            isHovered ? "text-primary" : ""
          )}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {format(new Date(publishedAt), "yyyy 年 M 月 d 日", {
                locale: zhCN,
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime} 分钟阅读
            </span>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
