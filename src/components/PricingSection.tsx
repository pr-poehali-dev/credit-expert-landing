import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Базовый",
      price: "49 900",
      description: "Для самостоятельного изучения",
      features: [
        "8 модулей обучения",
        "Видеоуроки в записи",
        "Доступ к материалам 6 месяцев",
        "Чат с куратором",
        "Сертификат о прохождении"
      ],
      popular: false
    },
    {
      name: "Стандарт",
      price: "79 900",
      description: "С поддержкой наставника",
      features: [
        "Всё из тарифа 'Базовый'",
        "Личный наставник",
        "Еженедельные созвоны",
        "Разбор ваших сделок",
        "Доступ к материалам 12 месяцев",
        "Готовые шаблоны документов"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "129 900",
      description: "Максимальное сопровождение",
      features: [
        "Всё из тарифа 'Стандарт'",
        "Личная консультация эксперта",
        "Помощь в первых 3 сделках",
        "Доступ к закрытому клубу",
        "Пожизненный доступ к материалам",
        "Приоритетная поддержка 24/7"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Выберите свой тариф</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Инвестиция в образование окупится с первой сделки
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-shadow ${plan.popular ? 'border-2 border-primary' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;