import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ExpertSection = () => {
  const achievements = [
    { icon: "TrendingUp", text: "12 лет в кредитном брокерстве" },
    { icon: "Users", text: "Обучил более 2500 брокеров" },
    { icon: "Award", text: "Сертифицированный финансовый консультант" },
    { icon: "Building", text: "Партнёр 47 банков и МФО" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ваш наставник</h2>
              <h3 className="text-2xl font-semibold mb-4">Александр Петров</h3>
              <p className="text-muted-foreground mb-6">
                Эксперт в кредитном брокерстве с 12-летним опытом. Начинал с нуля в маленьком городе, 
                построил крупнейшее агентство в регионе. Теперь помогаю другим пройти этот путь быстрее.
              </p>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement.icon as any} size={20} className="text-primary" />
                    </div>
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="User" size={120} className="text-primary/40" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;