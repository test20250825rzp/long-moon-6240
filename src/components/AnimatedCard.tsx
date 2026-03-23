
import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: "fade" | "slide" | "scale" | "flip";
}

export function AnimatedCard({
  children,
  delay = 0,
  className,
  animation = "fade",
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out";
    if (!isVisible) {
      switch (animation) {
        case "slide":
          return `${baseClass} opacity-0 translate-y-12`;
        case "scale":
          return `${baseClass} opacity-0 scale-90`;
        case "flip":
          return `${baseClass} opacity-0 rotate-x-12`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }
    return `${baseClass} opacity-100 translate-y-0 scale-100 rotate-x-0`;
  };

  return (
    <div ref={ref} className={cn(getAnimationClass(), className)}>
      {children}
    </div>
  );
}
