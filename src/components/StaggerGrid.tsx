
import { ReactNode } from "react";
import { AnimatedCard } from "./AnimatedCard";

interface StaggerGridProps {
  children: ReactNode[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
}

export function StaggerGrid({
  children,
  columns = 2,
  gap = 6,
}: StaggerGridProps) {
  return (
    <div
      className={`grid grid-cols-1 ${
        columns >= 2 ? "md:grid-cols-2" : ""
      } ${columns >= 3 ? "lg:grid-cols-3" : ""} ${
        columns >= 4 ? "xl:grid-cols-4" : ""
      } gap-${gap}`}
    >
      {children.map((child, index) => (
        <AnimatedCard key={index} delay={index * 100}>
          {child}
        </AnimatedCard>
      ))}
    </div>
  );
}
