import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  PlayCircle,
  X,
  Mail,
  Lock
} from 'lucide-react'

const VcPageOpen = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true) // По умолчанию авторизован
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('signin')

  const handleAuth = (e) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  const handleQuickAuth = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-lg font-black text-gray-900">
                GPTMARKETCUP
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                {t('nav.home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                {t('nav.popular')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                {t('nav.all')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                {t('nav.news')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                {t('nav.analysis')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2">
                {isDesktopSearchOpen ? (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t('search.placeholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      autoFocus
                      onBlur={() => {
                        setTimeout(() => {
                          if (!searchQuery) {
                            setIsDesktopSearchOpen(false)
                          }
                        }, 200)
                      }}
                    />
                  </div>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsDesktopSearchOpen(true)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <LanguageSelect />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <UserMenu />
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSelect />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Search & Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search articles, authors, topics..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
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
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <main>
                  <Container>
            <div className="pt-0 pb-2 lg:pb-4">


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

                  {/* Article Actions */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <Badge variant="member">
                      <Star className="h-4 w-4 fill-yellow-400" />
                      <span>{t('article.memberOnly')}</span>
                    </Badge>
                    
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-1 text-xs sm:text-sm">--</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-1 text-xs sm:text-sm">{t('button.listen')}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="hidden sm:flex">
                        <Share2 className="h-4 w-4 mr-2" />
                        {t('button.share')}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                        <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline ml-2">+</span>
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
                  </figure>

                  {/* Article Text - ПОЛНЫЙ КОНТЕНТ БЕЗ ОГРАНИЧЕНИЙ */}
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

                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Мультимодальные возможности
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      В отличие от GPT-3.5, который работает только с текстом, GPT-4 может обрабатывать изображения и понимать их содержимое. Это открывает новые возможности для создания AI-приложений, которые могут анализировать визуальную информацию.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      Например, GPT-4 может описывать изображения, отвечать на вопросы о них, анализировать графики и диаграммы, а также помогать в решении задач, требующих визуального понимания.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Улучшенная безопасность и надежность
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      OpenAI уделила особое внимание безопасности GPT-4. Модель прошла более тщательное тестирование на вредоносные запросы и показывает лучшие результаты в предотвращении генерации нежелательного контента.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      Также улучшена способность модели признавать свои ограничения и отказываться от выполнения задач, которые могут быть опасными или неэтичными.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Практические применения
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      GPT-4 уже находит применение в различных областях: от образования и здравоохранения до финансов и развлечений. Модель может использоваться для создания образовательного контента, анализа медицинских данных, автоматизации бизнес-процессов и многого другого.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      Разработчики могут интегрировать GPT-4 в свои приложения через API OpenAI, что позволяет создавать инновационные решения на основе этой мощной языковой модели.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Будущее AI-технологий
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      Появление GPT-4 знаменует новый этап в развитии искусственного интеллекта. Модель демонстрирует, что AI-системы могут становиться все более способными и универсальными, сохраняя при этом высокий уровень безопасности и надежности.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      В будущем мы можем ожидать появления еще более продвинутых моделей, которые будут еще лучше понимать контекст, работать с различными типами данных и решать все более сложные задачи.
                    </p>

                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      Заключение
                    </h2>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      GPT-4 представляет собой значительный шаг вперед в области искусственного интеллекта. Модель не только превосходит своего предшественника по всем параметрам, но и открывает новые возможности для создания AI-приложений.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      По мере развития технологий и появления новых моделей, мы будем становиться свидетелями все более впечатляющих достижений в области искусственного интеллекта, которые изменят наш мир к лучшему.
                    </p>
                  </div>
                </article>

                {/* Author Info Block */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Avatar 
                        alt="George J. Ziogas" 
                        size="lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{t('article.writtenBy')} George J. Ziogas</h3>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16">
                            <path fill="#437AFF" d="M15.163 8c0 .65-.459 1.144-.863 1.575-.232.244-.471.5-.563.719s-.086.543-.092.875c-.006.606-.018 1.3-.49 1.781-.47.481-1.15.494-1.744.5-.324.006-.655.013-.857.094s-.465.337-.704.575c-.422.412-.906.881-1.542.881-.637 0-1.12-.469-1.543-.881-.239-.238-.49-.482-.704-.575-.214-.094-.532-.088-.857-.094-.593-.006-1.273-.019-1.744-.5s-.484-1.175-.49-1.781c-.006-.332-.012-.669-.092-.875-.08-.207-.33-.475-.563-.719-.404-.431-.863-.925-.863-1.575s.46-1.144.863-1.575c.233-.244.472-.5.563-.719.092-.219.086-.544.092-.875.006-.606.019-1.3.49-1.781s1.15-.494 1.744-.5c.325-.006.655-.012.857-.094.202-.081.465-.337.704-.575C7.188 1.47 7.671 1 8.308 1s1.12.469 1.542.881c.239.238.49.481.704.575s.533.088.857.094c.594.006 1.273.019 1.745.5.47.481.483 1.175.49 1.781.005.331.011.669.091.875s.33.475.563.719c.404.431.863.925.863 1.575"></path>
                            <path fill="#fff" d="M7.328 10.5c.195 0 .381.08.519.22.137.141.215.331.216.53 0 .066.026.13.072.177a.24.24 0 0 0 .346 0 .25.25 0 0 0 .071-.177c.001-.199.079-.389.216-.53a.73.73 0 0 1 .519-.22h1.959c.13 0 .254-.053.346-.146a.5.5 0 0 0 .143-.354V6a.5.5 0 0 0-.143-.354.49.49 0 0 0-.346-.146h-1.47c-.324 0-.635.132-.865.366-.23.235-.359.552-.359.884v2.5c0 .066-.025.13-.071.177a.24.24 0 0 1-.346 0 .25.25 0 0 1-.072-.177v-2.5c0-.332-.13-.65-.359-.884A1.21 1.21 0 0 0 6.84 5.5h-1.47a.49.49 0 0 0-.346.146A.5.5 0 0 0 4.88 6v4c0 .133.051.26.143.354a.49.49 0 0 0 .347.146z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <span>9 июня 2025</span>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-600">12.5K {t('article.followers')}</a>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-600">8 {t('common.following')}</a>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-4">
                        AI researcher and technology enthusiast. Writing about artificial intelligence, machine learning, and the future of technology. <a href="#" className="text-blue-600 hover:underline">@georgeziogas</a>
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0 flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        {t('button.follow')}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{t('comments.title')} (21)</h2>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" aria-label="Shield with a checkmark" viewBox="0 0 25 25">
                            <path fillRule="evenodd" d="M11.987 5.036a.754.754 0 0 1 .914-.01c.972.721 1.767 1.218 2.6 1.543.828.322 1.719.485 2.887.505a.755.755 0 0 1 .741.757c-.018 3.623-.43 6.256-1.449 8.21-1.034 1.984-2.662 3.209-4.966 4.083a.75.75 0 0 1-.537-.003c-2.243-.874-3.858-2.095-4.897-4.074-1.024-1.951-1.457-4.583-1.476-8.216a.755.755 0 0 1 .741-.757c1.195-.02 2.1-.182 2.923-.503.827-.322 1.6-.815 2.519-1.535m.468.903c-.897.69-1.717 1.21-2.623 1.564-.898.35-1.856.527-3.026.565.037 3.45.469 5.817 1.36 7.515.884 1.684 2.25 2.762 4.284 3.571 2.092-.81 3.465-1.89 4.344-3.575.886-1.698 1.299-4.065 1.334-7.512-1.149-.039-2.091-.217-2.99-.567-.906-.353-1.745-.873-2.683-1.561m-.009 9.155a2.672 2.672 0 1 0 0-5.344 2.672 2.672 0 0 0 0 5.344m0 1a3.672 3.672 0 1 0 0-7.344 3.672 3.672 0 0 0 0 7.344m-1.813-3.777.525-.526.916.917 1.623-1.625.526.526-2.149 2.152z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Comment Input */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Avatar alt="User" size="sm" />
                      <div className="flex-1">
                        <div className="bg-white rounded-lg border border-gray-200 p-3">
                          <textarea 
                            placeholder={t('comments.addComment')} 
                            className="w-full min-h-[80px] resize-none border-none outline-none text-sm"
                            rows="3"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
                              <svg width="21" height="21">
                                <path fillRule="evenodd" d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z"></path>
                              </svg>
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
                              <svg width="21" height="21">
                                <path fillRule="evenodd" d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133m2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Cancel</Button>
                            <Button size="sm">{t('comments.reply')}</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {/* Comment 1 */}
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-start gap-3">
                        <Avatar alt="J. P. Weiss" size="sm" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">J. P. Weiss</h4>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Author</span>
                            <span className="text-xs text-gray-500">1 day ago (edited)</span>
                          </div>
                          <div className="text-sm text-gray-800 mb-3">
                            <p>Thanks Alison, and yes, I'm aware of the MFA mills around the country—where everyone ends up writing the same kinda literary stuff and hope to become the next Ocean Vuong. Not to mention the sorry state in publishing, where few make any kind of...</p>
                            <button className="text-blue-600 hover:underline text-sm mt-1">more</button>
                          </div>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fillRule="evenodd" d="M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-sm">37</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 text-sm">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-start gap-3">
                        <Avatar alt="Mukundarajan V N" size="sm" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">Mukundarajan V N</h4>
                            <span className="text-xs text-gray-500">1 day ago</span>
                          </div>
                          <div className="text-sm text-gray-800 mb-3">
                            <p>Your defiance of the machine-led colonisation of the human mind is admirable.</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fillRule="evenodd" d="M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-sm">17</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 text-sm">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comment 3 */}
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-start gap-3">
                        <Avatar alt="Jasmin James" size="sm" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">Jasmin James</h4>
                            <span className="text-xs text-gray-500">1 day ago</span>
                          </div>
                          <div className="text-sm text-gray-800 mb-3">
                            <p>I love what you write about stories 'not born of our will but passing through it'.</p>
                            <p className="mt-2">A lot of writers get asked how they got the idea for their books and all of them seem to say that the story 'existed in the ether' already or that a character 'was...</p>
                            <button className="text-blue-600 hover:underline text-sm mt-1">more</button>
                          </div>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fillRule="evenodd" d="M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-sm">80</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 text-sm">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* See all responses button */}
                  <div className="mt-6 text-center">
                    <Button variant="outline" size="lg">
                      See all responses
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-20 lg:self-start">
                
                {/* Publication Block */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        AI & Technology Insights
                      </h4>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        Публикация для экспертных статей о искусственном интеллекте, технологиях и их влиянии на будущее. От исследователей, для исследователей.
                      </p>
                      <button className="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-medium-primary text-medium-primary hover:bg-medium-primary hover:text-white h-9 px-3 text-xs">
                        <Heart className="h-4 w-4 mr-1" />
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Block 1: Reading List */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bookmark className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.readingList')}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {t('readingList.instructions')}
                  </p>
                  <div className="text-center py-8">
                    <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">{t('sidebar.readingListEmpty')}</p>
                    <p className="text-xs text-gray-400 mt-1">{t('sidebar.readingListDescription')}</p>
                  </div>
                </div>

                {/* Block 2: Latest */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.latest')}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <PlayCircle className="h-3 w-3 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            Нейросети в образовании: как AI меняет процесс обучения
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>30 мин назад</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            Этика искусственного интеллекта: вызовы и решения
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>1 час назад</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <PlayCircle className="h-3 w-3 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            Квантовые вычисления и их влияние на криптографию
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>2 часа назад</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 3: Related */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.related')}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            Сравнение GPT-3.5 и GPT-4: детальный анализ различий
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>5 мин чтения</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <PlayCircle className="h-3 w-3 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            Будущее языковых моделей: что нас ждет после GPT-4
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>7 мин чтения</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                            OpenAI: история создания и развития компании
                          </a>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>10 мин чтения</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 4: Social Media */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('social.joinUs')}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t('social.followUpdates')}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://vk.com/group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-.86-.86-1.24-.96-1.45-.96-.31 0-.4.1-.4.65v1.3c0 .47-.14.67-1.24.67-1.82 0-3.74-1.14-5.05-3.27C6.68 10.91 6.6 9.7 6.6 9.46c0-.21.1-.4.65-.4h1.46c.47 0 .61.21.78.67.76 2.26 2.02 4.23 2.54 4.23.18 0 .27-.09.27-.58V9.5c-.06-1-.58-1.08-.58-1.44 0-.18.14-.36.36-.36h2.28c.31 0 .42.15.42.49v2.66c0 .31.18.42.27.42.18 0 .31-.09.6-.89.39-1.18 1.12-3.36 1.12-3.36.09-.18.27-.36.66-.36h1.46c.55 0 .67.27.55.66-.24 1.14-2.57 4.53-2.57 4.53-.2.31-.27.42 0 .76.18.27.78.84 1.18 1.34.78.91 1.34 1.69 1.5 2.21.14.47-.09.71-.55.71z"/>
                      </svg>
                      <span className="text-sm font-medium">ВКонтакте</span>
                    </a>
                    
                    <a 
                      href="https://facebook.com/group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    
                    <a 
                      href="https://twitter.com/group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                    
                    <a 
                      href="https://t.me/group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      <span className="text-sm font-medium">Telegram</span>
                    </a>
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

export default VcPageOpen
