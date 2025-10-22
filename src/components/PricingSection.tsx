import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Тарифы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите формат, который подходит вам
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Базовый</CardTitle>
              <div className="text-4xl font-bold mb-1">89 000 ₽</div>
              <p className="text-muted-foreground">Для самостоятельного изучения</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Доступ к 8 модулям курса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Все шаблоны и документы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Чат с другими учениками</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Доступ навсегда</span>
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">Выбрать тариф</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-secondary text-white">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Профессионал</CardTitle>
              <div className="text-4xl font-bold mb-1">149 000 ₽</div>
              <p className="text-muted-foreground">С поддержкой и практикой</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Всё из тарифа "Базовый"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Еженедельные вебинары с разбором</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Проверка домашних заданий</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Личная поддержка куратора</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Разбор ваших реальных сделок</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Выбрать тариф</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">VIP</CardTitle>
              <div className="text-4xl font-bold mb-1">249 000 ₽</div>
              <p className="text-muted-foreground">Индивидуальное наставничество</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Всё из тарифа "Профессионал"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Личные созвоны с экспертом</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Помощь в первых сделках</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Готовые связи с банками</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Поддержка 6 месяцев</span>
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">Выбрать тариф</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
