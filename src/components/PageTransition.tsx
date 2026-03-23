
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
}

export function PageTransition({
  children,
  direction = "fade",
  duration = 500,
}: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation, duration]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-500 ease-in-out";
    switch (direction) {
      case "up":
        return transitionStage === "fadeIn"
          ? `${baseClass} opacity-100 translate-y-0`
          : `${baseClass} opacity-0 translate-y-8`;
      case "down":
        return transitionStage === "fadeIn"
          ? `${baseClass} opacity-100 translate-y-0`
          : `${baseClass} opacity-0 -translate-y-8`;
      case "left":
        return transitionStage === "fadeIn"
          ? `${baseClass} opacity-100 translate-x-0`
          : `${baseClass} opacity-0 translate-x-8`;
      case "right":
        return transitionStage === "fadeIn"
          ? `${baseClass} opacity-100 translate-x-0`
          : `${baseClass} opacity-0 -translate-x-8`;
      default:
        return transitionStage === "fadeIn"
          ? `${baseClass} opacity-100 scale-100`
          : `${baseClass} opacity-0 scale-95`;
    }
  };

  return (
    <div className={getAnimationClass()}>
      {children}
    </div>
  );
}
