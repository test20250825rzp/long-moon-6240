
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  heroImage: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ heroImage, title, subtitle }: HeroSectionProps) {
  const navigate = useNavigate();

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* 英雄区域背景图 - 第一幅图 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-white/80 mb-8">{subtitle}</p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90"
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
