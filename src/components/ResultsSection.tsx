import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResultsSection = () => {
  const results = [
    {
      name: "Анна К.",
      result: "Первая сделка на 2-й неделе",
      income: "85 000 ₽",
      description: "Работала менеджером в банке. После курса открыла своё агентство и за месяц вышла на 300К."
    },
    {
      name: "Дмитрий С.",
      result: "3 месяца в профессии",
      income: "520 000 ₽",
      description: "Был таксистом. Сейчас работает с застройщиками, сопровождает крупные сделки."
    },
    {
      name: "Елена М.",
      result: "6 месяцев опыта",
      income: "1 200 000 ₽",
      description: "Мама в декрете. Начала с маленьких займов, теперь — ипотечный брокер с постоянной базой."
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Результаты наших учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.result}</div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-2xl font-bold text-primary">{item.income}</div>
                  <div className="text-sm text-muted-foreground">доход в месяц</div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;