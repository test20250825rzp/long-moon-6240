
import { ArticleDetail as ArticleDetailComponent } from "@/components/ArticleDetail";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatedCard } from "@/components/AnimatedCard";
import { cn } from "@/lib/utils";

const articleData = {
  id: "1",
  title: "React 18 新特性详解：并发渲染与自动批处理",
  coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
  category: "技术分享",
  publishedAt: "2024-01-15",
  readTime: 8,
  author: "博主姓名",
  content: `## 前言

React 18 是 React 库的一个重要更新版本，带来了许多令人兴奋的新特性和性能改进。
本文将深入探讨 React 18 的核心特性，帮助你更好地理解和使用这些新功能。

## 并发渲染（Concurrent Rendering）

并发渲染是 React 18 最重要的更新之一。它允许 React 同时准备多个版本的 UI，
这意味着 React 可以在不阻塞主线程的情况下处理更新。

### 主要优势

1. **更好的用户体验**：UI 保持响应，即使在处理大量更新时
2. **自动优化**：React 自动决定何时中断和恢复渲染
3. **更流畅的动画**：高优先级更新（如用户输入）可以打断低优先级更新

## 自动批处理（Automatic Batching）

在 React 18 之前，只有 React 事件处理器中的状态更新会被批处理。
React 18 将这个行为扩展到了所有状态更新，包括：

- Promise 回调
- setTimeout
- setInterval
- 原生事件处理器

## 新的 Hooks

### useTransition

useTransition 允许你将某些更新标记为过渡更新，这些更新可以被中断。

\`\`\`tsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  // 过渡更新
  setSearchQuery(input);
});
\`\`\`

### useDeferredValue

useDeferredValue 允许你延迟更新某个值，直到其他更新完成。

\`\`\`tsx
const deferredValue = useDeferredValue(value);
\`\`\`

## 总结

React 18 的并发特性为构建更流畅、更响应的用户界面提供了强大的工具。
通过合理使用这些新特性，你可以显著提升应用的性能和用户体验。

## 参考资料

- [React 18 官方文档](https://react.dev)
- [React 18 工作组博客](https://reactjs.org/blog/2022/03/29/react-v18.html)`,
};

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <AnimatedCard animation="slide" delay={100}>
          <Button
            variant="ghost"
            className="mb-6 group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => navigate("/articles")}
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            返回文章列表
          </Button>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedCard animation="fade" delay={200}>
              <ArticleDetailComponent {...articleData} />
            </AnimatedCard>
          </div>

          <div className="lg:col-span-1">
            <Sidebar
              avatarImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              name="博主姓名"
              bio="热爱编程与分享的开发者，专注于前端技术与用户体验。"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
