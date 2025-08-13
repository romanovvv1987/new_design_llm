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
  PlayCircle,
  X,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus
} from 'lucide-react'

const VcFeedPage = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('signin') // 'signin' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = (e) => {
    e.preventDefault()
    // Здесь будет логика авторизации
    console.log(`${authMode} with:`, { email, password })
    setShowAuthModal(false)
    setEmail('')
    setPassword('')
  }

  const handleQuickAuth = (provider) => {
    // Здесь будет логика быстрой авторизации через провайдеры
    console.log(`Quick auth with ${provider}`)
    setShowAuthModal(false)
  }

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
              <a href="#" className="text-lg font-black text-gray-900">
                GPTMARKETCUP
              </a>
            </div>



            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2">
                {isDesktopSearchOpen ? (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles, authors, topics..."
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
                    {searchQuery && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                        <div className="p-3">
                          <h3 className="text-sm font-medium text-gray-900 mb-3">Search Results</h3>
                          <div className="space-y-2">
                            {articles
                              .filter(article => 
                                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                              )
                              .slice(0, 5)
                              .map(article => (
                                <div key={article.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                  <div className="flex-shrink-0">
                                    {article.image ? (
                                      <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-8 h-8 object-cover rounded-lg"
                                      />
                                    ) : (
                                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <div className="text-gray-400 text-xs">
                                          <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{article.title}</h4>
                                    <p className="text-xs text-gray-500">{article.author}</p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
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
              <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="h-full">
                  <SheetHeader>
                    <SheetTitle className="text-left">Search & Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search articles, authors, topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                    </div>
                    
                    {/* Search Results */}
                    {searchQuery && (
                      <div className="mt-6 space-y-4">
                        <h3 className="text-sm font-medium text-gray-900">Search Results</h3>
                        <div className="space-y-3">
                          {articles
                            .filter(article => 
                              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                            )
                            .slice(0, 5)
                            .map(article => (
                              <div key={article.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex-shrink-0">
                                  {article.image ? (
                                    <img 
                                      src={article.image} 
                                      alt={article.title}
                                      className="w-12 h-12 object-cover rounded-lg"
                                    />
                                  ) : (
                                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                      <div className="text-gray-400 text-xs text-center">
                                        <div className="w-6 h-6 mx-auto mb-1">
                                          <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{article.title}</h4>
                                  <p className="text-xs text-gray-500">{article.author}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                    

                    
                    {/* Popular Searches */}
                    {!searchQuery && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h3>
                        <div className="flex flex-wrap gap-2">
                          {['GPT-4', 'AI', 'Machine Learning', 'OpenAI', 'Technology'].map(tag => (
                            <button
                              key={tag}
                              onClick={() => setSearchQuery(tag)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition-colors"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowAuthModal(true)}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Button>
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
                  <span>Explore topics</span>
                </a>
              </div>

              {/* Topic Tags */}
              <div className="flex items-center gap-3 flex-nowrap">
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Culture
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Self Improvement
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  World
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Life
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Society
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Software Development
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Technology
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Media
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Work
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Programming
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Data Science
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Artificial Intelligence
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Machine Learning
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Quantum Computing
                </a>
                <a href="#" className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  Cybersecurity
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
              {/* Navigation Tabs */}
              <div className="mb-8 border-b border-gray-200">
                <div className="relative">
                  <div className="flex overflow-x-auto scrollbar-hide space-x-6 lg:space-x-8">
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Popular
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      All
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      News
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Analysis
                    </button>
                  </div>
                  
                  {/* Scroll Indicators */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
              
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
                          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex items-center justify-center relative">
                            <div className="text-gray-300 text-center">
                              <PlayCircle className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1" />
                              <div className="text-xs text-gray-400">Video</div>
                            </div>
                          </div>
                        ) : article.isPodcast ? (
                          // Если это подкаст
                          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-300 text-center">
                              <svg className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                              <div className="text-xs text-gray-400">Podcast</div>
                            </div>
                          </div>
                        ) : article.isPhoto ? (
                          // Если это фотогалерея
                          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-300 text-center">
                              <svg className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <div className="text-xs text-gray-400">Gallery</div>
                            </div>
                          </div>
                        ) : (
                          // Если нет ни изображения, ни видео - показываем простой placeholder
                          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-300 text-center">
                              <svg className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                              </svg>
                              <div className="text-xs text-gray-400">Image</div>
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
                        {/* Title, Premium Badge and Bookmark */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-start gap-2 flex-1">
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
                          <button className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors ml-2">
                            <Bookmark className="h-5 w-5" />
                          </button>
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
                        
                        {/* Members Only Block for Premium Articles */}
                        {article.isPremium && (
                          <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm font-medium text-blue-700">История только для участников</span>
                            </div>
                            <p className="text-xs text-blue-600">
                              Подпишитесь на Medium, чтобы читать эту и другие эксклюзивные истории
                            </p>
                          </div>
                        )}
                        
                        {/* Publication Block */}
                        <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                                                          <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-red-500 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>Поддержать</span>
                            </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Meta Info */}
                        <div className="lg:hidden relative overflow-x-auto scrollbar-hide">
                          <div className="flex items-center justify-between text-sm text-gray-500 min-w-max">
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
                          
                          {/* Scroll Indicators */}
                          <div className="absolute left-0 top-0 bottom-0 flex items-center pointer-events-none">
                            <div className="w-4 h-full bg-gradient-to-r from-white to-transparent"></div>
                          </div>
                          <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none">
                            <div className="w-4 h-full bg-gradient-to-l from-white to-transparent"></div>
                          </div>
                        </div>
                        
                        {/* Desktop Meta Info */}
                        <div className="hidden lg:flex items-center justify-between text-sm text-gray-500">
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
                  Load More
                </Button>
              </div>
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* AI Models Top 10 Preview */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.topAIModels')}</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "GPT-4", company: "OpenAI", version: "23.02.2025", inputPrice: "$10", outputPrice: "$30" },
                    { rank: 2, name: "Claude 3 Opus", company: "Anthropic", version: "15.02.2025", inputPrice: "$5", outputPrice: "$25" },
                    { rank: 3, name: "Gemini Ultra", company: "Google", version: "10.02.2025", inputPrice: "$3.50", outputPrice: "$10.50" },
                    { rank: 4, name: "Claude 3 Sonnet", company: "Anthropic", version: "20.02.2025", inputPrice: "$3", outputPrice: "$15" },
                    { rank: 5, name: "GPT-3.5 Turbo", company: "OpenAI", version: "18.02.2025", inputPrice: "$0.50", outputPrice: "$1.50" }
                  ].map((model) => (
                    <div key={model.rank} className="group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">{model.rank}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {model.name}
                            </h4>
                            <span className="text-xs text-gray-500">({model.version})</span>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <p className="text-xs text-gray-500">{model.company}</p>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-gray-600 font-medium">{model.inputPrice}</span>
                              <ArrowDown className="h-3 w-3 text-gray-400" />
                              <ArrowUp className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-600 font-medium">{model.outputPrice}/1M</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a href="/top10" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    View full ranking →
                  </a>
                </div>
              </div>
              
              {/* Reading List */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bookmark className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Reading list</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Click the <Bookmark className="h-4 w-4 inline text-gray-400" /> on any story to easily add it to your reading list or a custom list that you can share.
                </p>
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Your reading list is empty</p>
                  <p className="text-xs text-gray-400 mt-1">Start building your list by bookmarking stories</p>
                </div>
              </div>



              {/* Who to Follow */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Who to follow</h3>
                <div className="space-y-4">
                  {/* Author 1 */}
                  <div className="flex items-start gap-3">
                    <Avatar 
                      alt="Linda Caroll" 
                      size="md"
                      src="https://miro.medium.com/v2/resize:fill:128:128/1*Qyz-Q2jRxi9usgoaacyF9w.jpeg"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">Linda Caroll</h4>
                      <p className="text-xs text-gray-500 mb-1">55K followers</p>
                      <p className="text-xs text-gray-600 line-clamp-2">Everything is storytelling. https://lindac.substack.com/</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>



                  {/* Author 3 */}
                  <div className="flex items-start gap-3">
                    <Avatar 
                      alt="Wes O'Donnell" 
                      size="md"
                      src="https://miro.medium.com/v2/resize:fill:128:128/1*dniFgGeopx0e8X8ouGv7yQ@2x.jpeg"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">Wes O'Donnell</h4>
                      <p className="text-xs text-gray-500 mb-1">47K followers</p>
                      <p className="text-xs text-gray-600 line-clamp-2">US Army & US Air Force Veteran | Global Security Writer | Juris Doctor | Intel Forecaster | TEDx Speaker</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Author 4 */}
                  <div className="flex items-start gap-3">
                    <Avatar 
                      alt="Counter Arts" 
                      size="md"
                      src="https://miro.medium.com/v2/resize:fill:128:128/1*StB59injG6ZBN2B2iksKYg.png"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">Counter Arts</h4>
                      <p className="text-xs text-gray-500 mb-1">Publication · 37K followers</p>
                      <p className="text-xs text-gray-600 line-clamp-2">The (Counter)Cultural One-Stop for Nonfiction on Medium… incorporating categories for: 'Art', 'Culture', 'Equality', 'Photography', 'Film', 'Mental Health', 'Music' and 'Literature'.</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Author 5 */}
                  <div className="flex items-start gap-3">
                    <Avatar 
                      alt="Dr. Allison Wiltz" 
                      size="md"
                      src="https://miro.medium.com/v2/resize:fill:128:128/1*f8Q6_ie8s7pPBleC5vG6xQ@2x.jpeg"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">Dr. Allison Wiltz</h4>
                      <p className="text-xs text-gray-500 mb-1">73K followers</p>
                      <p className="text-xs text-gray-600 line-clamp-2">Black womanist scholar with a PhD from New Orleans, LA with bylines in Oprah Daily, Momentum, ZORA, Cultured. #WEOC Founder</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 text-gray-400 hover:text-blue-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Присоединяйтесь к нам</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Следите за нашими обновлениями в социальных сетях
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
        </Container>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {authMode === 'signin' ? 'Войти' : 'Зарегистрироваться'}
                </h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowAuthModal(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Auth Buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => handleQuickAuth('google')}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Продолжить с Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => handleQuickAuth('facebook')}
                >
                  <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Продолжить с Facebook
                </Button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">или</span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {authMode === 'signin' ? 'Войти' : 'Зарегистрироваться'}
                </Button>
              </form>

              {/* Switch Mode */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {authMode === 'signin' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {authMode === 'signin' ? 'Зарегистрироваться' : 'Войти'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VcFeedPage
