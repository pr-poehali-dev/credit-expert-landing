import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Нужно ли финансовое образование?",
      answer: "Нет, специального образования не требуется. Весь необходимый материал даётся в курсе — от азов до продвинутых техник."
    },
    {
      question: "Сколько времени займёт обучение?",
      answer: "Программа рассчитана на 2 месяца при занятиях 2-3 часа в день. Можно учиться в своём темпе."
    },
    {
      question: "Когда я начну зарабатывать?",
      answer: "Первые ученики закрывают сделки уже на 2-3 неделе обучения. В среднем выход на доход — через 1-2 месяца."
    },
    {
      question: "Какие гарантии результата?",
      answer: "Мы даём 14-дневную гарантию возврата денег, если курс вам не подойдёт. Плюс — сопровождение до первой сделки."
    },
    {
      question: "Можно ли совмещать с работой?",
      answer: "Да, большинство учеников проходят курс, работая на основной работе. Формат позволяет учиться в удобное время."
    },
    {
      question: "Что нужно для старта работы?",
      answer: "Минимум: компьютер, телефон, интернет. Никаких офисов, лицензий и больших вложений не требуется."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о курсе
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;