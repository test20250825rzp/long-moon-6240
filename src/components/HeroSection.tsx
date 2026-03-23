
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  heroImage: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ heroImage, title, subtitle }: HeroSectionProps) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // 图片加载后显示内容
    if (imageLoaded) {
      setTimeout(() => setContentVisible(true), 300);
    }
  }, [imageLoaded]);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* 英雄区域背景图 */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}
        <img
          src={heroImage}
          alt="Hero"
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        {/* 动态光效 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* 标题动画 */}
          <h1 className={cn(
            "text-5xl font-bold mb-4 drop-shadow-lg",
            "transition-all duration-700 transform",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {title}
          </h1>
          
          {/* 副标题动画 */}
          <p className={cn(
            "text-xl text-white/90 mb-8 drop-shadow-md",
            "transition-all duration-700 delay-200 transform",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {subtitle}
          </p>
          
          {/* 按钮动画 */}
          <Button
            size="lg"
            className={cn(
              "bg-white text-black hover:bg-white/90 shadow-lg",
              "transition-all duration-300 transform hover:scale-105",
              "group relative overflow-hidden",
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "delay-400"
            )}
            onClick={() => navigate("/articles")}
          >
            <span className="relative z-10 flex items-center">
              浏览文章
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            {/* 按钮悬停光效 */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Button>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2",
        "transition-all duration-700 delay-700",
        contentVisible ? "opacity-100" : "opacity-0"
      )}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
