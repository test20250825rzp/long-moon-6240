
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";

interface ArticleDetailProps {
  title: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
  content: string;
}

export function ArticleDetail({
  title,
  coverImage,
  category,
  publishedAt,
  readTime,
  author,
  content,
}: ArticleDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* 文章封面图 - 第三幅图 */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-8">
        <Badge className="mb-4">{category}</Badge>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-6 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {format(new Date(publishedAt), "yyyy 年 M 月 d 日", {
              locale: zhCN,
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {readTime} 分钟阅读
          </span>
        </div>
      </div>

      <Separator className="mb-8" />

      <Card>
        <CardContent className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
