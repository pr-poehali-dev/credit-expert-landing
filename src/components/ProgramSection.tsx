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
      description: "Партнёрство с банками, получение аккредитации, оформление сделок"
    },
    {
      number: "03",
      title: "Андеррайтинг",
      description: "Анализ платёжеспособности, проверка документов, оценка рисков"
    },
    {
      number: "04",
      title: "Продажи и переговоры",
      description: "Скрипты продаж, работа с возражениями, закрытие сделок"
    },
    {
      number: "05",
      title: "Поиск клиентов",
      description: "Прямые и рекламные каналы, холодные звонки, реклама в интернете"
    },
    {
      number: "06",
      title: "Юридические аспекты",
      description: "Договоры, защита интересов, работа с претензиями"
    },
    {
      number: "07",
      title: "Автоматизация",
      description: "CRM-системы, сервисы для брокеров, автоворонки продаж"
    },
    {
      number: "08",
      title: "Масштабирование",
      description: "Найм сотрудников, построение команды, выход на 1+ млн в месяц"
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
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {module.number}
                  </div>
                  <div>
                    <CardTitle className="mb-2">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
