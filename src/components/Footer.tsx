import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="TrendingUp" size={24} />
              <span className="font-bold">Кредитный Эксперт</span>
            </div>
            <p className="text-sm text-white/70">
              Обучение кредитному брокерству с гарантией результата
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Программа</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Результаты</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@creditexpert.ru</li>
              <li>Москва, Тверская 1</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© 2024 Кредитный Эксперт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
