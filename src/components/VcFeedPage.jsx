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
import VideoPlaceholder from './ui/VideoPlaceholder'
import ContentPlaceholder from './ui/ContentPlaceholder'
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
  MessageCircle,
  ThumbsUp,
  PlayCircle
} from 'lucide-react'

const VcFeedPage = () => {
  // Данные для ленты статей
  const articles = [
    {
      id: 1,
      title: "GPT-4 превосходит GPT-3.5 — вот что изменилось",
      subtitle: "Как новая модель OpenAI революционизирует AI-индустрию",
      author: "George J. Ziogas",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "2 часа назад",
      readTime: "5 мин",
      views: "12.5K",
      likes: "234",
      comments: "45",
      tags: ["Искусственный интеллект", "OpenAI", "GPT-4"],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*ZkeGGo0gnAiD39Rs3nD2mg.jpeg",
      isPremium: false,
      isVideo: false
    },
    {
      id: 2,
      title: "ChatGPT vs Claude: детальное сравнение возможностей",
      subtitle: "Анализ производительности и особенностей двух ведущих AI-моделей",
      author: "AI Research Team",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "4 часа назад",
      readTime: "8 мин",
      views: "8.2K",
      likes: "156",
      comments: "32",
      tags: ["ChatGPT", "Claude", "Сравнение"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      isPremium: true,
      isVideo: true
    },
    {
      id: 3,
      title: "Машинное обучение в медицине: революция в диагностике",
      subtitle: "Как AI помогает врачам ставить более точные диагнозы",
      author: "Dr. Elena Petrova",
      authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      date: "6 часов назад",
      readTime: "12 мин",
      views: "6.7K",
      likes: "89",
      comments: "23",
      tags: ["Медицина", "AI", "Диагностика"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      isPremium: false,
      isVideo: false
    },
    {
      id: 4,
      title: "Нейросети в образовании: как AI меняет процесс обучения",
      subtitle: "Персонализированное обучение и адаптивные технологии",
      author: "TechEdu",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      date: "1 день назад",
      readTime: "7 мин",
      views: "4.3K",
      likes: "67",
      comments: "18",
      tags: ["Образование", "AI", "Технологии"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
      isPremium: false,
      isVideo: true
    },
    {
      id: 5,
      title: "Квантовые вычисления и их влияние на криптографию",
      subtitle: "Будущее безопасности данных в эпоху квантовых компьютеров",
      author: "QuantumTech",
      authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      date: "2 дня назад",
      readTime: "15 мин",
      views: "3.1K",
      likes: "45",
      comments: "12",
      tags: ["Квантовые вычисления", "Криптография", "Безопасность"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      isPremium: true,
      isVideo: false
    },
    {
      id: 6,
      title: "Этика искусственного интеллекта: вызовы и решения",
      subtitle: "Важные вопросы о будущем AI и ответственности разработчиков",
      author: "AI Ethics",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "3 дня назад",
      readTime: "10 мин",
      views: "2.8K",
      likes: "78",
      comments: "34",
      tags: ["Этика", "AI", "Ответственность"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      isPremium: false,
      isVideo: false
    },
    {
      id: 7,
      title: "Будущее языковых моделей: что нас ждет после GPT-4",
      subtitle: "Прогнозы развития AI и новые возможности",
      author: "Future Tech",
      authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
      date: "4 дня назад",
      readTime: "9 мин",
      views: "5.2K",
      likes: "123",
      comments: "28",
      tags: ["Будущее", "AI", "Прогнозы"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      isPremium: false,
      isVideo: true
    },
    {
      id: 8,
      title: "OpenAI: история создания и развития компании",
      subtitle: "От стартапа до лидера AI-индустрии",
      author: "Tech History",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "5 дней назад",
      readTime: "14 мин",
      views: "7.8K",
      likes: "234",
      comments: "56",
      tags: ["OpenAI", "История", "Стартапы"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
      isPremium: true,
      isVideo: false
    },
    {
      id: 9,
      title: "Практическое руководство по машинному обучению",
      subtitle: "Пошаговый разбор создания AI-модели с нуля",
      author: "ML Academy",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "1 неделя назад",
      readTime: "25 мин",
      views: "3.2K",
      likes: "89",
      comments: "23",
      tags: ["Машинное обучение", "Практика", "Python"],
      image: null, // Нет скриншота видео
      isPremium: false,
      isVideo: true,
      videoDuration: "15:42"
    },
    {
      id: 10,
      title: "Интервью с экспертом по квантовым вычислениям",
      subtitle: "Разговор о будущем квантовых технологий",
      author: "Quantum Insights",
      authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      date: "1 неделя назад",
      readTime: "18 мин",
      views: "2.1K",
      likes: "67",
      comments: "15",
      tags: ["Квантовые вычисления", "Интервью", "Эксперты"],
      image: null, // Нет скриншота видео
      isPremium: true,
      isVideo: true,
      videoDuration: "22:15"
    },
    {
      id: 11,
      title: "Подкаст: Будущее веб-разработки в 2025 году",
      subtitle: "Обсуждение новых технологий и трендов с экспертами",
      author: "Web Dev Podcast",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "1 неделя назад",
      readTime: "45 мин",
      views: "1.8K",
      likes: "45",
      comments: "12",
      tags: ["Веб-разработка", "Подкаст", "2025"],
      image: null,
      isPremium: false,
      isVideo: false,
      isPodcast: true,
      audioDuration: "45:30"
    },
    {
      id: 12,
      title: "Фотогалерея: Самые красивые дата-центры мира",
      subtitle: "Визуальное путешествие по современным технологическим объектам",
      author: "Tech Photography",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "2 недели назад",
      readTime: "3 мин",
      views: "4.2K",
      likes: "156",
      comments: "34",
      tags: ["Фотография", "Дата-центры", "Архитектура"],
      image: null,
      isPremium: false,
      isVideo: false,
      isPhoto: true,
      photoCount: "24 фото"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-2xl font-bold text-blue-600">
                VC.ru
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Главная</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Популярное</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Все</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Новости</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Аналитика</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <PenTool className="h-4 w-4" />
              </Button>
              <LanguageSelect />
              <UserMenu />
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Меню</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Главная</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Популярное</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Все</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Новости</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Аналитика</a>
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
                  Культура
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Саморазвитие
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Мир
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Жизнь
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Общество
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Разработка ПО
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Технологии
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Медиа
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Работа
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Программирование
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Data Science
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Искусственный интеллект
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Машинное обучение
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Квантовые вычисления
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Кибербезопасность
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
      <main className="py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Feed - 3 columns */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {articles.map((article) => (
                  <article key={article.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex gap-4">
                      {/* Article Image */}
                      <div className="flex-shrink-0 relative">
                        {article.image ? (
                          // Если есть изображение, показываем его
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg"
                          />
                        ) : article.isVideo ? (
                          // Если нет изображения, но есть видео - показываем placeholder
                          <VideoPlaceholder 
                            size="md" 
                            duration={article.videoDuration}
                          />
                        ) : article.isPodcast ? (
                          // Если это подкаст
                          <ContentPlaceholder 
                            type="podcast"
                            size="md" 
                            duration={article.audioDuration}
                          />
                        ) : article.isPhoto ? (
                          // Если это фотогалерея
                          <ContentPlaceholder 
                            type="photo"
                            size="md"
                          />
                        ) : (
                          // Если нет ни изображения, ни видео - показываем простой placeholder
                          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-gray-400 text-xs text-center">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                </svg>
                              </div>
                              Изображение
                            </div>
                          </div>
                        )}
                        
                        {/* Video Icon Overlay для статей с изображениями */}
                        {article.isVideo && article.image && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <PlayCircle className="h-8 w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </div>
                      
                      {/* Article Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title and Premium Badge */}
                        <div className="flex items-start gap-2 mb-2">
                          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                            {article.title}
                          </h2>
                          {article.isPremium && (
                            <Badge variant="secondary" className="flex-shrink-0">
                              <Star className="h-3 w-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </div>
                        
                        {/* Subtitle */}
                        <p className="text-gray-600 text-sm lg:text-base mb-3 line-clamp-2">
                          {article.subtitle}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {article.tags.slice(0, 2).map((tag, index) => (
                            <Tag key={index} className="text-xs">
                              {tag}
                            </Tag>
                          ))}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Avatar 
                                alt={article.author} 
                                size="sm"
                                src={article.authorAvatar}
                              />
                              <span className="font-medium text-gray-700">{article.author}</span>
                            </div>
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{article.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{article.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{article.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Загрузить еще
                </Button>
              </div>
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Trending Topics */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Тренды</h3>
                </div>
                <div className="space-y-3">
                  <a href="#" className="block text-sm font-medium text-gray-900 hover:text-blue-600">
                    #GPT-4
                  </a>
                  <a href="#" className="block text-sm font-medium text-gray-900 hover:text-blue-600">
                    #ИскусственныйИнтеллект
                  </a>
                  <a href="#" className="block text-sm font-medium text-gray-900 hover:text-blue-600">
                    #OpenAI
                  </a>
                  <a href="#" className="block text-sm font-medium text-gray-900 hover:text-blue-600">
                    #МашинноеОбучение
                  </a>
                  <a href="#" className="block text-sm font-medium text-gray-900 hover:text-blue-600">
                    #КвантовыеВычисления
                  </a>
                </div>
              </div>

              {/* Popular Authors */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Популярные авторы</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar 
                      alt="George J. Ziogas" 
                      size="sm"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">George J. Ziogas</div>
                      <div className="text-xs text-gray-500">AI Researcher</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar 
                      alt="Dr. Elena Petrova" 
                      size="sm"
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=32&h=32&fit=crop&crop=face"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Dr. Elena Petrova</div>
                      <div className="text-xs text-gray-500">Medical AI</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar 
                      alt="TechEdu" 
                      size="sm"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">TechEdu</div>
                      <div className="text-xs text-gray-500">Education Tech</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Подписка на новости</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте самые интересные статьи первыми
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full" size="sm">
                    Подписаться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default VcFeedPage
