import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-secondary text-white">Старт потока через 7 дней</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Обучение кредитному брокерству
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Научитесь зарабатывать от 300 000 ₽ в месяц, помогая людям получать выгодные кредиты. 
            Полное сопровождение от А до Я.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть презентацию
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2500+</div>
              <div className="text-sm text-muted-foreground">Учеников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Успешных</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">450К</div>
              <div className="text-sm text-muted-foreground">Средний доход</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
