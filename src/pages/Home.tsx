
import { BlogCard } from "@/components/BlogCard";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { AnimatedCard } from "@/components/AnimatedCard";

// 模拟数据
const blogData = {
  heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=600&fit=crop",
  avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  name: "博主姓名",
  bio: "热爱编程与分享的开发者，专注于前端技术与用户体验。",
  articles: [
    {
      id: "1",
      title: "React 18 新特性详解：并发渲染与自动批处理",
      excerpt: "深入探讨 React 18 带来的重大更新，包括并发模式、Suspense 改进以及全新的 Hooks。",
      coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      category: "技术分享",
      publishedAt: "2024-01-15",
      readTime: 8,
    },
    {
      id: "2",
      title: "TypeScript 高级类型技巧：让你的代码更安全",
      excerpt: "学习如何使用 TypeScript 的高级类型系统，包括条件类型、映射类型和模板字面量类型。",
      coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      category: "技术分享",
      publishedAt: "2024-01-10",
      readTime: 12,
    },
    {
      id: "3",
      title: "Tailwind CSS v4 全新体验：更快、更简洁",
      excerpt: "Tailwind CSS v4 带来了全新的配置方式和性能优化，让我们一起探索新版本的魅力。",
      coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
      category: "技术分享",
      publishedAt: "2024-01-05",
      readTime: 6,
    },
    {
      id: "4",
      title: "周末旅行：探索城市中的隐秘角落",
      excerpt: "记录一次意外的城市探险之旅，发现那些被忽略的美好风景。",
      coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=400&fit=crop",
      category: "旅行日记",
      publishedAt: "2024-01-01",
      readTime: 5,
    },
    {
      id: "5",
      title: "2024 年读书总结：那些改变我思维的好书",
      excerpt: "回顾过去一年读过的书籍，分享那些给我带来启发和思考的作品。",
      coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop",
      category: "读书笔记",
      publishedAt: "2023-12-28",
      readTime: 10,
    },
    {
      id: "6",
      title: "如何保持高效：我的日常工作效率技巧",
      excerpt: "分享一些帮助我保持专注和高效的工作方法和工具。",
      coverImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
      category: "生活随笔",
      publishedAt: "2023-12-20",
      readTime: 7,
    },
  ],
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 英雄区域 */}
      <HeroSection
        heroImage={blogData.heroImage}
        title="欢迎来到我的博客"
        subtitle="分享技术、生活与思考，记录成长的每一步"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 文章列表 */}
          <div className="lg:col-span-2">
            <AnimatedCard animation="slide" delay={200}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-primary rounded-full" />
                最新文章
              </h2>
            </AnimatedCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogData.articles.map((article, index) => (
                <BlogCard key={article.id} {...article} index={index} />
              ))}
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <Sidebar
              avatarImage={blogData.avatarImage}
              name={blogData.name}
              bio={blogData.bio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
