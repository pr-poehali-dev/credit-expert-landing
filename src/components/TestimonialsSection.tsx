import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Мария В.",
      role: "Выпускница потока #12",
      text: "Курс превзошёл все ожидания! Александр объясняет сложные вещи простым языком. Уже через месяц я закрыла первую сделку на 120К. Спасибо огромное!"
    },
    {
      name: "Игорь Л.",
      role: "Выпускник потока #15",
      text: "Долго сомневался, но решился. Не пожалел ни разу. Материал структурированный, поддержка на высоте. Теперь зарабатываю больше, чем на основной работе."
    },
    {
      name: "Ольга Т.",
      role: "Выпускница потока #18",
      text: "Особенно понравилась практическая часть — разбор реальных кейсов, шаблоны документов, связи с банками. Всё работает! Рекомендую всем."
    },
    {
      name: "Сергей К.",
      role: "Выпускник потока #20",
      text: "Отличное вложение в себя. За 3 месяца окупил курс в 10 раз. Александр всегда на связи, помогает решать любые вопросы. Профессионал своего дела!"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 2500 выпускников уже изменили свою жизнь
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;