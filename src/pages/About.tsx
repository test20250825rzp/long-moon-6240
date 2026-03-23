
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, MapPin, Link as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { cn } from "@/lib/utils";

// 关于页面装饰图
const aboutCoverImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop";

const About = () => {
  const [coverLoaded, setCoverLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  const skills = [
    { name: "React", level: "精通" },
    { name: "TypeScript", level: "精通" },
    { name: "Node.js", level: "熟练" },
    { name: "TailwindCSS", level: "精通" },
    { name: "Next.js", level: "熟练" },
    { name: "GraphQL", level: "熟悉" },
    { name: "Python", level: "熟悉" },
    { name: "Docker", level: "熟悉" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 关于页面封面图 */}
      <div className="relative h-[300px] overflow-hidden bg-muted">
        {!coverLoaded && <div className="absolute inset-0 skeleton" />}
        <img
          src={aboutCoverImage}
          alt="About Cover"
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            coverLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
          onLoad={() => setCoverLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        {/* 动态光效 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-20 relative">
        {/* 个人信息卡片 */}
        <AnimatedCard animation="scale" delay={100}>
          <Card className="mb-8 shadow-xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-background shadow-lg bg-muted animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Avatar"
                      className={cn(
                        "w-full h-full object-cover transition-opacity duration-300",
                        avatarLoaded ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={() => setAvatarLoaded(true)}
                    />
                    <AvatarFallback className="text-2xl">博</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    博主姓名
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    前端开发工程师 / 技术博主 / 开源爱好者
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {[
                      { icon: Github, label: "GitHub" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Mail, label: "联系我" },
                    ].map(({ icon: Icon, label }, index) => (
                      <Button
                        key={label}
                        variant="outline"
                        size="sm"
                        className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <Icon className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* 关于我 */}
        <AnimatedCard animation="slide" delay={200}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                关于我
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="transition-all duration-300 hover:text-foreground">
                你好！我是一名热爱编程的前端开发工程师，专注于 React、TypeScript 和现代 Web 技术的发展。
                在这个博客中，我会分享我的学习心得、项目经验以及对技术的思考。
              </p>
              <p className="transition-all duration-300 hover:text-foreground">
                我相信技术应该服务于人，优秀的代码不仅要功能完善，更要易于理解和维护。
                我热衷于开源社区，喜欢通过分享来帮助他人，同时也从他人的经验中学习成长。
              </p>
              <p className="transition-all duration-300 hover:text-foreground">
                工作之余，我喜欢阅读、旅行和摄影。这些爱好让我保持对世界的好奇心，
                也为我的技术创作提供了源源不断的灵感。
              </p>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* 技能栈 */}
        <AnimatedCard animation="slide" delay={300}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                技能栈
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-muted rounded-lg p-4 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/10"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* 联系方式 */}
        <AnimatedCard animation="slide" delay={400}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                联系方式
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
                  <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="transition-colors group-hover:text-foreground">
                    中国 · 上海
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
                  <LinkIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <a
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
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
        </AnimatedCard>
      </div>
    </div>
  );
};

export default About;
