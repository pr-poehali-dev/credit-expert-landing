import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="TrendingUp" size={28} className="text-primary" />
          <span className="text-xl font-bold text-primary">Кредитный Эксперт</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
          <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Программа</a>
          <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button size="sm" className="hidden md:flex">Записаться</Button>
      </div>
    </header>
  );
};

export default Header;
