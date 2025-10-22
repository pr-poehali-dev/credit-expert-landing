import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              <span className="text-lg font-bold">Кредитный Эксперт</span>
            </div>
            <p className="text-sm text-gray-400">
              Обучение кредитному брокерству с нуля до профессионала
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#program" className="text-gray-400 hover:text-white transition-colors">Программа</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Результаты</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Тарифы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+7 (999) 123-45-67</li>
              <li>info@creditexpert.ru</li>
              <li>@creditexpert</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>2024 Кредитный Эксперт. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;