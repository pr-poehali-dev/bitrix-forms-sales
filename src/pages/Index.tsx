import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Втулка направляющая',
    category: 'Направляющие элементы',
    material: 'Сталь закаленная',
    dimensions: 'Ø20x100',
    hardness: 'HRC 58-62',
    price: '2 450 ₽',
    stock: 'В наличии',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Толкатель круглый',
    category: 'Толкатели',
    material: 'Сталь закаленная',
    dimensions: 'Ø16x80',
    hardness: 'HRC 58-62',
    price: '1 850 ₽',
    stock: 'В наличии',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Колонна стандартная',
    category: 'Колонны',
    material: 'Сталь инструментальная',
    dimensions: 'Ø32x200',
    hardness: 'HRC 60-64',
    price: '4 200 ₽',
    stock: 'Под заказ',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Вкладыш опорный',
    category: 'Опорные элементы',
    material: 'Бронза',
    dimensions: '40x40x30',
    hardness: 'HB 150-180',
    price: '3 100 ₽',
    stock: 'В наличии',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Винт регулировочный',
    category: 'Крепеж',
    material: 'Сталь нержавеющая',
    dimensions: 'М12x60',
    hardness: 'HRC 38-42',
    price: '890 ₽',
    stock: 'В наличии',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Пружина сжатия',
    category: 'Пружины',
    material: 'Пружинная сталь',
    dimensions: 'Ø25x150',
    hardness: 'HRC 48-52',
    price: '1 650 ₽',
    stock: 'В наличии',
    image: '/placeholder.svg'
  }
];

const hydraulicCylinders = [
  {
    id: 'v215cr-25-12',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 25,
    rod: 12,
    stroke: 50,
    pressure: 215,
    price: '12 500 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-25-12-100',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 25,
    rod: 12,
    stroke: 100,
    pressure: 215,
    price: '13 800 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-32-16-50',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 32,
    rod: 16,
    stroke: 50,
    pressure: 215,
    price: '14 200 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-32-16-100',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 32,
    rod: 16,
    stroke: 100,
    pressure: 215,
    price: '15 900 ₽',
    stock: 'Под заказ'
  },
  {
    id: 'v215cr-40-20-50',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 40,
    rod: 20,
    stroke: 50,
    pressure: 215,
    price: '16 500 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-40-20-100',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 40,
    rod: 20,
    stroke: 100,
    pressure: 215,
    price: '18 300 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-50-25-100',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 50,
    rod: 25,
    stroke: 100,
    pressure: 215,
    price: '21 400 ₽',
    stock: 'В наличии'
  },
  {
    id: 'v215cr-63-32-100',
    name: 'Гидроцилиндр VEGA V215CR',
    series: 'V215CR',
    bore: 63,
    rod: 32,
    stroke: 100,
    pressure: 215,
    price: '26 800 ₽',
    stock: 'Под заказ'
  }
];

const categories = ['Все категории', 'Направляющие элементы', 'Толкатели', 'Колонны', 'Опорные элементы', 'Крепеж', 'Пружины', 'Гидроцилиндры'];
const materials = ['Все материалы', 'Сталь закаленная', 'Сталь инструментальная', 'Бронза', 'Сталь нержавеющая', 'Пружинная сталь'];

const slides = [
  {
    id: 1,
    title: 'Запчасти для пресс-форм',
    subtitle: 'Профессиональные стандартные элементы. Высокая точность и долговечность',
    bg: 'linear-gradient(135deg, #1A1F2C 0%, #0EA5E9 100%)'
  },
  {
    id: 2,
    title: 'Всегда в наличии',
    subtitle: 'Более 5000 наименований на складе в Москве. Отправка в день заказа',
    bg: 'linear-gradient(135deg, #0EA5E9 0%, #1A1F2C 100%)'
  },
  {
    id: 3,
    title: 'Гарантия качества',
    subtitle: 'Все детали проходят входной контроль. Сертификаты ISO 9001:2015',
    bg: 'linear-gradient(135deg, #1A1F2C 0%, #2563EB 100%)'
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [selectedMaterial, setSelectedMaterial] = useState('Все материалы');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBore, setSelectedBore] = useState<number | null>(null);
  const [selectedRod, setSelectedRod] = useState<number | null>(null);
  const [selectedStroke, setSelectedStroke] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Все категории' || product.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'Все материалы' || product.material === selectedMaterial;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMaterial && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cog" size={32} className="text-accent" />
              <div>
                <h1 className="text-2xl font-bold text-primary">Молдис</h1>
                <p className="text-xs text-muted-foreground">Запчасти для пресс-форм</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => setActiveTab('home')}>Главная</Button>
              <Button variant="ghost" onClick={() => setActiveTab('catalog')}>Каталог</Button>
              <Button variant="ghost" onClick={() => setActiveTab('about')}>О компании</Button>
              <Button variant="ghost" onClick={() => setActiveTab('delivery')}>Доставка</Button>
              <Button variant="ghost" onClick={() => setActiveTab('docs')}>Документация</Button>
              <Button variant="ghost" onClick={() => setActiveTab('contacts')}>Контакты</Button>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {activeTab === 'home' && (
        <div className="relative w-full h-[600px] overflow-hidden mb-8">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ background: slide.bg }}
            >
              <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-6xl font-bold mb-6 animate-fade-in">{slide.title}</h2>
                <p className="text-2xl mb-8 max-w-3xl opacity-90">{slide.subtitle}</p>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary" onClick={() => setActiveTab('catalog')}>
                    <Icon name="Search" size={20} className="mr-2" />
                    Открыть каталог
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Скачать прайс
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <>

            <section className="grid md:grid-cols-3 gap-6 py-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Package" size={40} className="text-accent mb-4" />
                  <CardTitle>Широкий ассортимент</CardTitle>
                  <CardDescription>Более 5000 наименований стандартных элементов в наличии</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="CheckCircle2" size={40} className="text-accent mb-4" />
                  <CardTitle>Гарантия качества</CardTitle>
                  <CardDescription>Все детали проходят входной контроль и сертификацию</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Truck" size={40} className="text-accent mb-4" />
                  <CardTitle>Быстрая доставка</CardTitle>
                  <CardDescription>Отправка в день заказа по всей России</CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section className="py-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Популярные категории</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Направляющие элементы', 'Толкатели', 'Колонны', 'Опорные элементы', 'Крепеж', 'Пружины', 'Гидроцилиндры', 'Датчики'].map((cat) => (
                  <Card key={cat} className="hover:border-accent transition-colors cursor-pointer" onClick={() => { setSelectedCategory(cat); setActiveTab('catalog'); }}>
                    <CardHeader className="text-center">
                      <Icon name="Box" size={32} className="mx-auto mb-2 text-accent" />
                      <CardTitle className="text-sm">{cat}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'catalog' && selectedCategory !== 'Гидроцилиндры' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
              <p className="text-muted-foreground">Профессиональные стандартные элементы для промышленных пресс-форм</p>
            </div>

            <div className="bg-card rounded-lg border p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск по названию</label>
                  <Input
                    placeholder="Введите название детали..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Материал</label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map(mat => (
                        <SelectItem key={mat} value={mat}>{mat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="Box" size={64} className="text-muted-foreground" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant={product.stock === 'В наличии' ? 'default' : 'secondary'}>
                        {product.stock}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Материал:</span>
                        <span className="font-medium">{product.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Размер:</span>
                        <span className="font-medium">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Твердость:</span>
                        <span className="font-medium">{product.hardness}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-2xl font-bold text-accent">{product.price}</span>
                      <Button size="sm">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground">Товары не найдены</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'catalog' && selectedCategory === 'Гидроцилиндры' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Гидроцилиндры VEGA V215CR</h2>
              <p className="text-muted-foreground">Максимальное рабочее давление до 215 бар. Внутренний диаметр от 25 до 200 мм</p>
            </div>

            <div className="bg-card rounded-lg border p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Выберите параметры</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-3 block">Диаметр поршня (мм)</label>
                  <div className="flex flex-wrap gap-2">
                    {[25, 32, 40, 50, 63, 80, 100].map(bore => {
                      const available = hydraulicCylinders.some(c => c.bore === bore);
                      return (
                        <Button
                          key={bore}
                          variant={selectedBore === bore ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedBore(selectedBore === bore ? null : bore)}
                          disabled={!available}
                          className={!available ? 'opacity-50' : ''}
                        >
                          Ø{bore}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Диаметр штока (мм)</label>
                  <div className="flex flex-wrap gap-2">
                    {[12, 16, 20, 25, 32, 40, 50].map(rod => {
                      const available = hydraulicCylinders.some(c => 
                        c.rod === rod && (!selectedBore || c.bore === selectedBore)
                      );
                      return (
                        <Button
                          key={rod}
                          variant={selectedRod === rod ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedRod(selectedRod === rod ? null : rod)}
                          disabled={!available}
                          className={!available ? 'opacity-50' : ''}
                        >
                          Ø{rod}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Ход штока (мм)</label>
                  <div className="flex flex-wrap gap-2">
                    {[50, 100, 150, 200, 250, 300].map(stroke => {
                      const available = hydraulicCylinders.some(c => 
                        c.stroke === stroke && 
                        (!selectedBore || c.bore === selectedBore) &&
                        (!selectedRod || c.rod === selectedRod)
                      );
                      return (
                        <Button
                          key={stroke}
                          variant={selectedStroke === stroke ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedStroke(selectedStroke === stroke ? null : stroke)}
                          disabled={!available}
                          className={!available ? 'opacity-50' : ''}
                        >
                          {stroke} мм
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {(selectedBore || selectedRod || selectedStroke) && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setSelectedBore(null);
                      setSelectedRod(null);
                      setSelectedStroke(null);
                    }}
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Сбросить фильтры
                  </Button>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hydraulicCylinders
                .filter(cyl => 
                  (!selectedBore || cyl.bore === selectedBore) &&
                  (!selectedRod || cyl.rod === selectedRod) &&
                  (!selectedStroke || cyl.stroke === selectedStroke)
                )
                .map((cylinder) => (
                  <Card key={cylinder.id} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                        <Icon name="Cylinder" size={80} className="text-white" fallback="Circle" />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{cylinder.name}</CardTitle>
                        <Badge variant={cylinder.stock === 'В наличии' ? 'default' : 'secondary'}>
                          {cylinder.stock}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">Серия {cylinder.series}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Диаметр поршня:</span>
                          <span className="font-medium">Ø{cylinder.bore} мм</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Диаметр штока:</span>
                          <span className="font-medium">Ø{cylinder.rod} мм</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ход штока:</span>
                          <span className="font-medium">{cylinder.stroke} мм</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Давление:</span>
                          <span className="font-medium">{cylinder.pressure} бар</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-2xl font-bold text-accent">{cylinder.price}</span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {hydraulicCylinders.filter(cyl => 
              (!selectedBore || cyl.bore === selectedBore) &&
              (!selectedRod || cyl.rod === selectedRod) &&
              (!selectedStroke || cyl.stroke === selectedStroke)
            ).length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground">Гидроцилиндры с выбранными параметрами не найдены</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
              </div>
            )}

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Технические характеристики серии V215CR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Основные параметры</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Максимальное рабочее давление: до 215 бар (3117 PSI)</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Внутренний диаметр: от 25 до 200 мм</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Диаметр штока: от 12 до 140 мм</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ход: от 20 до 1500 мм</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Температурный режим</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Магнитное исполнение: 80°C (176°F)</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Немагнитное исполнение: 120°C (248°F)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">О компании</h2>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Молдис — эксперт в области стандартных элементов</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Компания Молдис специализируется на поставке высокоточных стандартных элементов для пресс-форм с 2010 года. 
                    Мы работаем с ведущими производителями промышленного оборудования и инструмента.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">позиций в наличии</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">постоянных клиентов</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Наши преимущества</h4>
                  <ul className="space-y-3">
                    {[
                      'Работа только с сертифицированными производителями',
                      'Гарантия соответствия всех параметров техническим требованиям',
                      'Входной контроль качества каждой партии товара',
                      'Собственный склад площадью 1500 м² в Санкт-Петербурге',
                      'Техническая поддержка и консультации инженеров',
                      'Гибкая система скидок для корпоративных клиентов'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" size={24} className="mr-3 text-accent" />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold mb-2">Курьерская доставка по Москве</h4>
                    <p className="text-sm text-muted-foreground">Бесплатно при заказе от 10 000 ₽. Доставка на следующий день после оформления заказа.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold mb-2">Транспортные компании</h4>
                    <p className="text-sm text-muted-foreground">СДЭК, ПЭК, Деловые Линии, Байкал-Сервис. Отправка в день заказа.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold mb-2">Самовывоз</h4>
                    <p className="text-sm text-muted-foreground">Бесплатно. Санкт-Петербург, Невский проспект, 85. Пн-Пт: 9:00-18:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CreditCard" size={24} className="mr-3 text-accent" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Check" size={18} className="text-accent mr-3" />
                      <span>Безналичный расчет для юридических лиц (с НДС)</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={18} className="text-accent mr-3" />
                      <span>Банковские карты (онлайн-оплата)</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={18} className="text-accent mr-3" />
                      <span>Наличными при самовывозе</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={18} className="text-accent mr-3" />
                      <span>Оплата при получении (наложенный платеж)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" size={24} className="mr-3 text-accent" />
                    Сроки обработки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Заказы, оформленные до 15:00, обрабатываются в тот же день. 
                    Товары "Под заказ" изготавливаются в течение 5-14 рабочих дней в зависимости от сложности.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Документация</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Прайс-лист', desc: 'Полный каталог с ценами', icon: 'FileSpreadsheet', size: '2.4 МБ' },
                { title: 'Технический каталог', desc: 'Чертежи и спецификации', icon: 'FileText', size: '15.2 МБ' },
                { title: 'Сертификаты качества', desc: 'ISO 9001:2015', icon: 'Award', size: '1.8 МБ' },
                { title: 'Условия поставки', desc: 'Договор и реквизиты', icon: 'FileCheck', size: '0.5 МБ' },
                { title: 'Гарантийные условия', desc: 'Политика возврата', icon: 'Shield', size: '0.3 МБ' },
                { title: 'Инструкции по монтажу', desc: 'Рекомендации по установке', icon: 'Wrench', size: '8.7 МБ' }
              ].map((doc) => (
                <Card key={doc.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 flex items-center">
                          <Icon name={doc.icon} size={20} className="mr-2 text-accent" />
                          {doc.title}
                        </CardTitle>
                        <CardDescription>{doc.desc}</CardDescription>
                      </div>
                      <Badge variant="outline">{doc.size}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Офис и склад</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-sm text-muted-foreground">190000, Санкт-Петербург, Невский проспект, д. 85</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Phone" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Mail" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@moldis.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00<br/>Сб-Вс: выходной</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Отправить запрос</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Input placeholder="Опишите ваш запрос" />
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Молдис</h4>
              <p className="text-sm opacity-80">Профессиональные стандартные элементы для пресс-форм</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Направляющие элементы</li>
                <li>Толкатели</li>
                <li>Колонны</li>
                <li>Пружины</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Документация</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@moldis.ru</li>
                <li>Санкт-Петербург, Невский пр., 85</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Молдис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}