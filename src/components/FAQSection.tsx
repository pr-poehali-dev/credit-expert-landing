import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на вопросы, которые задают чаще всего
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Нужно ли специальное образование?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, специальное образование не требуется. На курсе вы получите все необходимые знания — от азов до продвинутых техник. Главное — желание учиться и работать с людьми.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Сколько нужно денег на старт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимальные вложения — стоимость курса. Для работы нужен только телефон и компьютер. Офис и команда не требуются. Можно начать работать из дома.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Как быстро окупится обучение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем ученики окупают курс после 1-2 сделок, то есть за 1-2 месяца. Многие выходят на прибыль уже в первый месяц обучения, закрывая сделки параллельно с учёбой.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Помогаете ли с первыми клиентами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, на тарифах "Профессионал" и "VIP" есть поддержка кураторов. На VIP-тарифе помогаем с первыми сделками лично, даём связи с банками и ведём за руку до результата.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Можно ли работать в другом городе?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, кредитное брокерство — удалённая работа. Вы можете жить и работать из любого города России и даже из-за границы. Большинство процессов проходят онлайн.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Есть ли рассрочка на обучение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем рассрочку на 6 месяцев без процентов. Также можно оплатить картой с кэшбэком или через системы "Долями", "Тинькофф Сплит".
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
