
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, MapPin, Link as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

// 关于页面装饰图 - 第三幅图
const aboutCoverImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop";

const About = () => {
  const [coverLoaded, setCoverLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* 关于页面封面图 */}
      <div className="relative h-[300px] overflow-hidden bg-muted">
        {!coverLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted to-muted/50" />
        )}
        <img
          src={aboutCoverImage}
          alt="About Cover"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            coverLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setCoverLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-20 relative">
        {/* 个人信息卡片 */}
        <Card className="mb-8 shadow-xl">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-background shadow-lg bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                    alt="Avatar"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      avatarLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setAvatarLoaded(true)}
                  />
                  <AvatarFallback className="text-2xl">博</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-3xl font-bold mb-2">博主姓名</h1>
                <p className="text-muted-foreground mb-4">
                  前端开发工程师 / 技术博主 / 开源爱好者
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    联系我
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 关于我 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>关于我</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              你好！我是一名热爱编程的前端开发工程师，专注于 React、TypeScript 和现代 Web 技术的发展。
              在这个博客中，我会分享我的学习心得、项目经验以及对技术的思考。
            </p>
            <p>
              我相信技术应该服务于人，优秀的代码不仅要功能完善，更要易于理解和维护。
              我热衷于开源社区，喜欢通过分享来帮助他人，同时也从他人的经验中学习成长。
            </p>
            <p>
              工作之余，我喜欢阅读、旅行和摄影。这些爱好让我保持对世界的好奇心，
              也为我的技术创作提供了源源不断的灵感。
            </p>
          </CardContent>
        </Card>

        {/* 技能栈 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>技能栈</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "React", level: "精通" },
                { name: "TypeScript", level: "精通" },
                { name: "Node.js", level: "熟练" },
                { name: "TailwindCSS", level: "精通" },
                { name: "Next.js", level: "熟练" },
                { name: "GraphQL", level: "熟悉" },
                { name: "Python", level: "熟悉" },
                { name: "Docker", level: "熟悉" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-muted rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 联系方式 */}
        <Card>
          <CardHeader>
            <CardTitle>联系方式</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>中国 · 上海</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <LinkIcon className="h-5 w-5" />
                <a href="#" className="hover:text-primary transition-colors">
                  https://your-website.com
                </a>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">
                欢迎通过邮件或社交媒体与我联系，我很乐意交流技术或合作机会！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
