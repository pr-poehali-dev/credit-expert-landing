import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Почему кредитное брокерство?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прибыльная ниша с постоянным спросом и минимальными вложениями
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="CircleDollarSign" size={24} className="text-primary" />
              </div>
              <CardTitle>Высокий доход</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Комиссия от 50 000 до 500 000 ₽ за одну сделку. Чем больше сумма кредита — тем выше ваш заработок.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <CardTitle>Гибкий график</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Работайте удалённо из любой точки мира. Сами выбираете время и количество клиентов.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <CardTitle>Постоянный спрос</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Кредиты нужны всегда: бизнесу, застройщикам, физлицам. Рынок растёт даже в кризис.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <CardTitle>Минимальный старт</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Не нужен офис, команда или большие вложения. Достаточно телефона и компьютера.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <CardTitle>Повторные сделки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Клиенты возвращаются снова и рекомендуют вас друзьям. Постоянная база приносит стабильный доход.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <CardTitle>Официальная работа</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Законная деятельность с официальным оформлением. Работаете как партнёр банков.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
