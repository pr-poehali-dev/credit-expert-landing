import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
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

      <section id="program" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Программа обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пошаговая система из 8 модулей — от основ до масштабирования бизнеса
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                number: "01",
                title: "Основы брокерства",
                description: "Что такое кредитный брокер, как работает рынок, откуда брать клиентов"
              },
              {
                number: "02",
                title: "Работа с банками",
                description: "Партнёрство с банками, получение аккредитации, оформление сделок"
              },
              {
                number: "03",
                title: "Андеррайтинг",
                description: "Анализ платёжеспособности, проверка документов, оценка рисков"
              },
              {
                number: "04",
                title: "Продажи и переговоры",
                description: "Скрипты продаж, работа с возражениями, закрытие сделок"
              },
              {
                number: "05",
                title: "Поиск клиентов",
                description: "Прямые и рекламные каналы, холодные звонки, реклама в интернете"
              },
              {
                number: "06",
                title: "Юридические аспекты",
                description: "Договоры, защита интересов, работа с претензиями"
              },
              {
                number: "07",
                title: "Автоматизация",
                description: "CRM-системы, сервисы для брокеров, автоворонки продаж"
              },
              {
                number: "08",
                title: "Масштабирование",
                description: "Найм сотрудников, построение команды, выход на 1+ млн в месяц"
              }
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">
                      {module.number}
                    </div>
                    <div>
                      <CardTitle className="mb-2">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Результаты учеников</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории тех, кто прошёл обучение и вышел на стабильный доход
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Александр М.",
                result: "520 000 ₽",
                period: "первый месяц",
                story: "Закрыл 4 сделки с застройщиками. До курса работал менеджером."
              },
              {
                name: "Екатерина В.",
                result: "1 200 000 ₽",
                period: "за 3 месяца",
                story: "Запустила рекламу ВКонтакте, клиенты приходят потоком."
              },
              {
                name: "Михаил С.",
                result: "850 000 ₽",
                period: "второй месяц",
                story: "Работает с малым бизнесом, построил команду из 3 человек."
              },
              {
                name: "Ольга Д.",
                result: "380 000 ₽",
                period: "через 2 недели",
                story: "Первая сделка на 350К, теперь есть база постоянных клиентов."
              },
              {
                name: "Дмитрий К.",
                result: "2 100 000 ₽",
                period: "за квартал",
                story: "Специализируется на крупных корпоративных кредитах."
              },
              {
                name: "Анна Л.",
                result: "670 000 ₽",
                period: "за месяц",
                story: "Ушла с найма, теперь работает на себя с командой."
              }
            ].map((student, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{student.period}</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">{student.result}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{student.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кто уже прошёл курс
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Сергей Иванов",
                role: "Начинающий брокер",
                text: "Курс окупился уже после первой сделки! Алексей даёт проверенные инструменты, а не воду. Особенно понравились модули про андеррайтинг и работу с банками."
              },
              {
                name: "Марина Соколова",
                role: "Владелец агентства",
                text: "Проходила курс год назад, теперь у меня команда из 5 человек. Благодаря знаниям из курса выстроила процессы и автоматизацию. Рекомендую!"
              },
              {
                name: "Игорь Смирнов",
                role: "Кредитный брокер",
                text: "Самое ценное — практика и связи с банками. Алексей помог закрыть первые сложные сделки. Сейчас работаю с крупным бизнесом, доход стабильный."
              },
              {
                name: "Татьяна Козлова",
                role: "Экс-менеджер банка",
                text: "Работала в банке 8 лет, думала знаю всё. Но курс открыл глаза на другую сторону процесса. Ушла на вольные хлеба и не жалею."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
