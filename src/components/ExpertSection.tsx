import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ExpertSection = () => {
  return (
    <section id="expert" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Об эксперте</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center p-12">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-white" />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4">Алексей Петров</h3>
                <p className="text-muted-foreground mb-4">
                  Практикующий кредитный брокер с 12-летним опытом. Провёл более 800 сделок на общую сумму 15 млрд рублей.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>Топ-10 брокеров России по версии Банки.ру</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Обучил более 2500 специалистов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <span>Собственное агентство с оборотом 50+ млн/год</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
