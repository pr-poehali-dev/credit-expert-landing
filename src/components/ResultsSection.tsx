import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResultsSection = () => {
  const students = [
    {
      name: "Александр М.",
      result: "520 000 ₽",
      period: "первый месяц",
      story: "Закрыл 4 сделки с застройщиками. До курса работал менеджером."
    },
    {
      name: "Екатерина В.",
      result: "1 200 000 ₽",
      period: "за 3 месяца",
      story: "Запустила рекламу ВКонтакте, клиенты приходят потоком."
    },
    {
      name: "Михаил С.",
      result: "850 000 ₽",
      period: "второй месяц",
      story: "Работает с малым бизнесом, построил команду из 3 человек."
    },
    {
      name: "Ольга Д.",
      result: "380 000 ₽",
      period: "через 2 недели",
      story: "Первая сделка на 350К, теперь есть база постоянных клиентов."
    },
    {
      name: "Дмитрий К.",
      result: "2 100 000 ₽",
      period: "за квартал",
      story: "Специализируется на крупных корпоративных кредитах."
    },
    {
      name: "Анна Л.",
      result: "670 000 ₽",
      period: "за месяц",
      story: "Ушла с найма, теперь работает на себя с командой."
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Результаты учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории тех, кто прошёл обучение и вышел на стабильный доход
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {students.map((student, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.period}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{student.result}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{student.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
