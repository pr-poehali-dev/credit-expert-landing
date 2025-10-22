import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Сергей Иванов",
      role: "Начинающий брокер",
      text: "Курс окупился уже после первой сделки! Алексей даёт проверенные инструменты, а не воду. Особенно понравились модули про андеррайтинг и работу с банками."
    },
    {
      name: "Марина Соколова",
      role: "Владелец агентства",
      text: "Проходила курс год назад, теперь у меня команда из 5 человек. Благодаря знаниям из курса выстроила процессы и автоматизацию. Рекомендую!"
    },
    {
      name: "Игорь Смирнов",
      role: "Кредитный брокер",
      text: "Самое ценное — практика и связи с банками. Алексей помог закрыть первые сложные сделки. Сейчас работаю с крупным бизнесом, доход стабильный."
    },
    {
      name: "Татьяна Козлова",
      role: "Экс-менеджер банка",
      text: "Работала в банке 8 лет, думала знаю всё. Но курс открыл глаза на другую сторону процесса. Ушла на вольные хлеба и не жалею."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят те, кто уже прошёл курс
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
