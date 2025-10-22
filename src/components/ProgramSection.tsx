import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramSection = () => {
  const modules = [
    {
      number: "01",
      title: "Основы брокерства",
      description: "Что такое кредитный брокер, как работает рынок, откуда брать клиентов"
    },
    {
      number: "02",
      title: "Работа с банками",
      description: "Как заключать партнёрские договоры, получать лучшие условия и высокие комиссии"
    },
    {
      number: "03",
      title: "Анализ клиента",
      description: "Оценка платёжеспособности, подбор оптимального кредитного продукта"
    },
    {
      number: "04",
      title: "Сопровождение сделки",
      description: "Подготовка документов, взаимодействие с банком, ведение до одобрения"
    },
    {
      number: "05",
      title: "Юридические аспекты",
      description: "Договоры, защита интересов, работа со сложными случаями"
    },
    {
      number: "06",
      title: "Маркетинг и продажи",
      description: "Привлечение клиентов через соцсети, рекламу, партнёрства и рекомендации"
    },
    {
      number: "07",
      title: "Автоматизация",
      description: "CRM-системы, шаблоны документов, автоворонки для экономии времени"
    },
    {
      number: "08",
      title: "Масштабирование",
      description: "Создание команды, выход на крупных клиентов, увеличение оборота"
    }
  ];

  return (
    <section id="program" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Программа обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Пошаговая система из 8 модулей — от основ до масштабирования бизнеса
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card key={module.number} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl font-bold text-primary/20 mb-2">{module.number}</div>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription className="text-base">{module.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;