import React from 'react'
import { Button } from './ui/Button'
import { Avatar } from './ui/Avatar'
import { Badge } from './ui/Badge'
import { Container } from './ui/Container'
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/Sheet'
import { LanguageSelect } from './ui/LanguageSelect'
import { UserMenu } from './ui/UserMenu'
import { Tag } from './ui/Tag'
import { 
  Search, 
  PenTool, 
  Bell, 
  Heart, 
  Play, 
  Bookmark, 
  Share2, 
  MoreHorizontal,
  Star,
  Menu,
  TrendingUp,
  Clock,
  Eye,
  PlayCircle
} from 'lucide-react'

const VcPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Logo */}
              <a href="#" className="vc-logo">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">VC</span>
                  </div>
                  <span className="font-bold text-lg lg:text-xl text-gray-900">VC.ru</span>
                </div>
              </a>
              
              {/* Search - скрыт на мобильных */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Поиск" 
                  className="w-60 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm">
                <PenTool className="h-4 w-4 mr-2" />
                Написать
              </Button>
              <LanguageSelect />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <UserMenu />
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSelect />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Меню</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Поиск" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <PenTool className="h-4 w-4 mr-2" />
                      Написать
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Уведомления
                    </Button>
                    
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <UserMenu />
                      <div>
                        <div className="font-medium text-gray-900">Пользователь</div>
                        <div className="text-sm text-gray-500">@user</div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>

      {/* Topics Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <Container>
          <div className="relative">
            <div className="flex items-center overflow-x-auto scrollbar-hide py-4">
              {/* Explore Topics Button */}
              <div className="flex-shrink-0 mr-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20" className="text-gray-600">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                    <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.478 2 12s4.477 10 10 10m3.936-14.844.147-.99-.88.477-5.898 3.194-.22.12-.037.246-.984 6.636-.146.99.879-.477 5.899-3.194.22-.119.036-.247zM9.2 15.996l.719-4.846 3.59 2.514zm1.292-5.665 3.59 2.514.718-4.846z" clipRule="evenodd"></path>
                  </svg>
                  <span>Исследовать темы</span>
                </a>
              </div>

              {/* Topic Tags */}
              <div className="flex items-center gap-3 flex-nowrap">
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Искусственный интеллект
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Технологии
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Программирование
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Data Science
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Машинное обучение
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  OpenAI
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  GPT-4
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Квантовые вычисления
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Кибербезопасность
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Медицина
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Образование
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Этика
                </a>
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center pointer-events-none">
              <div className="w-8 h-full bg-gradient-to-r from-white to-transparent"></div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none">
              <div className="w-8 h-full bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <main>
        <Container>
          <div className="py-6 lg:py-8">
            {/* Publication Header */}
            <div className="border-b border-gray-200 pb-4 lg:pb-6 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a href="#" className="text-base lg:text-lg font-medium text-gray-900 hover:underline">
                    AI & Technology Insights
                  </a>
                  <span className="hidden sm:inline text-gray-400">·</span>
                  <Button variant="ghost" size="sm" className="w-fit">
                    Подписаться на публикацию
                  </Button>
                </div>
                
                {/* Member Badge */}
                <Badge variant="member">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <span>История только для участников</span>
                </Badge>
              </div>
            </div>



            {/* VC.ru Style Layout - Main Content and Sidebar */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Main Content - 3 columns */}
              <div className="lg:col-span-3">
                {/* Article */}
                <article className="space-y-6 lg:space-y-8">

                  {/* Article Title */}
                  <div className="space-y-3 lg:space-y-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      GPT-4 превосходит GPT-3.5 — вот что изменилось
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                      Как новая модель OpenAI революционизирует AI-индустрию
                    </h2>
                  </div>

                  {/* Article Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Tag>Искусственный интеллект</Tag>
                    <Tag>OpenAI</Tag>
                    <Tag>GPT-4</Tag>
                    <Tag>Машинное обучение</Tag>
                    <Tag>Технологии</Tag>
                  </div>

                  {/* Author Info and Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar 
                        alt="George J. Ziogas" 
                        size="md"
                      />
                      <div className="min-w-0 flex-1">
                        <a href="#" className="text-base font-medium text-gray-900 hover:underline truncate block">
                          George J. Ziogas
                        </a>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-500">
                          <span>9 июня 2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-1 text-xs sm:text-sm">--</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-1 text-xs sm:text-sm">Слушать</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="hidden sm:flex">
                        <Share2 className="h-4 w-4 mr-2" />
                        Поделиться
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline ml-2">Ещё</span>
                      </Button>
                    </div>
                  </div>

                                {/* Article Image */}
              <figure className="text-center relative">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ZkeGGo0gnAiD39Rs3nD2mg.jpeg" 
                  alt="Резюме" 
                  className="w-full max-w-4xl mx-auto rounded-lg"
                />
                {/* Video Icon Overlay - можно включить для демонстрации */}
                {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                  <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                </div> */}
              </figure>

                  {/* Article Text */}
                  <div className="text-gray-800 space-y-6 max-w-3xl mx-auto">
                    <p className="text-base lg:text-lg leading-relaxed">
                      OpenAI представила GPT-4, новую языковую модель, которая значительно превосходит своего предшественника GPT-3.5 по всем ключевым параметрам.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      GPT-4 демонстрирует улучшенные способности к рассуждению, более точные ответы и лучшую производительность в сложных задачах. Модель может обрабатывать как текстовые, так и визуальные входные данные, открывая новые возможности для AI-приложений.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      В этой статье мы рассмотрим ключевые улучшения GPT-4 и их влияние на будущее искусственного интеллекта.
                    </p>
                    
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Ключевые улучшения производительности
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      GPT-4 показывает значительные улучшения в задачах, требующих творческого мышления и сложных рассуждений. Модель лучше справляется с математическими задачами, программированием и анализом текста.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      Одним из самых впечатляющих достижений является способность GPT-4 понимать и анализировать изображения, что делает его первой мультимодальной моделью такого масштаба, доступной широкой публике.
                    </p>
                  </div>
                </article>
              </div>
              
              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Block 1: Trending */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Популярное</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Искусственный интеллект в 2025 году: основные тренды и прогнозы
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>12.5K</span>
                        <span>•</span>
                        <span>2 часа назад</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        ChatGPT vs Claude: сравнение возможностей и производительности
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>8.2K</span>
                        <span>•</span>
                        <span>5 часов назад</span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Машинное обучение в медицине: революция в диагностике
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>6.7K</span>
                        <span>•</span>
                        <span>1 день назад</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 2: Latest */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Последние</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Нейросети в образовании: как AI меняет процесс обучения
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Автор: TechEdu</span>
                        <span>•</span>
                        <span>30 мин назад</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Этика искусственного интеллекта: вызовы и решения
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Автор: AI Ethics</span>
                        <span>•</span>
                        <span>1 час назад</span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Квантовые вычисления и их влияние на криптографию
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Автор: QuantumTech</span>
                        <span>•</span>
                        <span>2 часа назад</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 3: Related */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bookmark className="h-5 w-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Похожие</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Сравнение GPT-3.5 и GPT-4: детальный анализ различий
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>5 мин чтения</span>
                        <span>•</span>
                        <span>AI Research</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        Будущее языковых моделей: что нас ждет после GPT-4
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>7 мин чтения</span>
                        <span>•</span>
                        <span>Future Tech</span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                        OpenAI: история создания и развития компании
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>10 мин чтения</span>
                        <span>•</span>
                        <span>Tech History</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default VcPage
