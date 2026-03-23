
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeroSectionProps {
  heroImage: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ heroImage, title, subtitle }: HeroSectionProps) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* 英雄区域背景图 - 第一幅图 */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted/50 animate-pulse" />
        )}
        <img
          src={heroImage}
          alt="Hero"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">{subtitle}</p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 shadow-lg"
            onClick={() => navigate("/articles")}
          >
            浏览文章
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
