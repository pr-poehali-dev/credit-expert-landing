import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <Card className="text-left">
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input placeholder="Введите имя" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Вопрос (необязательно)</label>
                <Textarea placeholder="Расскажите, что вас интересует" rows={4} />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">info@creditexpert.ru</p>
            </div>
            <div className="text-center">
              <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Telegram / WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
