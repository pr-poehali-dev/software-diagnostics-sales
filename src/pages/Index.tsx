import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const features = [
    {
      icon: 'Activity',
      title: 'Диагностика в реальном времени',
      description: 'Мгновенный доступ к параметрам работы двигателя, трансмиссии и других систем автомобиля'
    },
    {
      icon: 'Database',
      title: 'База кодов ошибок',
      description: 'Расшифровка более 50 000 кодов неисправностей для всех марок автомобилей'
    },
    {
      icon: 'Gauge',
      title: 'Расширенная телеметрия',
      description: 'Запись и анализ данных с возможностью построения графиков параметров'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Защищенное хранение истории диагностики и отчетов в облаке'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '2 990',
      period: 'месяц',
      description: 'Для небольших сервисов',
      features: [
        'До 5 автомобилей в день',
        'Базовая диагностика OBD-II',
        'История за 30 дней',
        'Email поддержка'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '7 990',
      period: 'месяц',
      description: 'Для профессиональных сервисов',
      features: [
        'Неограниченное количество авто',
        'Расширенная диагностика',
        'История без ограничений',
        'Приоритетная поддержка 24/7',
        'Интеграция с CRM',
        'Экспорт отчетов'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'По запросу',
      period: '',
      description: 'Для сетей автосервисов',
      features: [
        'Все из Professional',
        'Мультипользовательские лицензии',
        'Индивидуальная интеграция',
        'Персональный менеджер',
        'SLA 99.9%',
        'Обучение персонала'
      ],
      popular: false
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Activity" className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">AutoDiag Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('product')} className="text-sm font-medium hover:text-primary transition-colors">
              О продукте
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('download')} className="text-sm font-medium hover:text-primary transition-colors">
              Загрузки
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('pricing')}>Начать</Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                Профессиональная диагностика
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Программное обеспечение для диагностики автомобилей
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Мощный инструмент для профессиональной диагностики, совместимый с тысячами моделей автомобилей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('pricing')} className="text-lg px-8">
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('product')} className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Возможности продукта</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Всё необходимое для профессиональной диагностики в одном решении
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите подходящий план для вашего бизнеса
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative border-2 hover:shadow-xl transition-all duration-300 animate-scale-in ${
                    plan.popular ? 'border-primary shadow-lg scale-105' : 'hover:border-primary/50'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="mb-4">{plan.description}</CardDescription>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-2">₽/{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.id === 'enterprise' ? 'Связаться с нами' : 'Выбрать план'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Загрузки</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Скачайте программное обеспечение для вашей операционной системы
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <Icon name="Monitor" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Windows</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Версия 3.2.1</p>
                    <Button variant="outline" className="w-full">
                      <Icon name="Download" className="mr-2 h-4 w-4" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <Icon name="Apple" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>macOS</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Версия 3.2.1</p>
                    <Button variant="outline" className="w-full">
                      <Icon name="Download" className="mr-2 h-4 w-4" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <Icon name="Smartphone" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Android/iOS</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Версия 3.2.0</p>
                    <Button variant="outline" className="w-full">
                      <Icon name="Download" className="mr-2 h-4 w-4" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-lg text-muted-foreground">
                  Есть вопросы? Мы всегда готовы помочь
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name="Mail" className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Напишите нам на почту</p>
                    <a href="mailto:support@autodiag.pro" className="text-primary hover:underline font-medium">
                      support@autodiag.pro
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Телефон</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Звоните в рабочие дни</p>
                    <a href="tel:+78001234567" className="text-primary hover:underline font-medium">
                      8 (800) 123-45-67
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Activity" className="h-5 w-5 text-primary" />
              <span className="font-semibold">AutoDiag Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 AutoDiag Pro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
