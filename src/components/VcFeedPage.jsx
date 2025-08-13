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
import PublicationBlock from './ui/PublicationBlock'
import SocialMediaBlock from './ui/SocialMediaBlock'
import ReadingListBlock from './ui/ReadingListBlock'
import WhoToFollowBlock from './ui/WhoToFollowBlock'
import AIModelsPreviewBlock from './ui/AIModelsPreviewBlock'
import MobileBookmarksDrawer from './ui/MobileBookmarksDrawer'

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
  const [isBookmarksDrawerOpen, setIsBookmarksDrawerOpen] = useState(false)

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
              <LanguageSelect />
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsBookmarksDrawerOpen(true)}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
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
                      {t('nav.home')}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {t('nav.popular')}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {t('nav.all')}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      {t('nav.news')}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {t('nav.analysis')}
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
                        {/* Title and Bookmark */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                              {article.title}
                            </h2>
                          </div>
                          <button className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors ml-2">
                            <Bookmark className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Premium Badge - Mobile: under title, Desktop: next to title */}
                        {article.isPremium && (
                          <div className="mb-2">
                            <div className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-medium-border bg-medium-background text-medium-primary shadow-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 fill-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              <span>Только для участников</span>
                            </div>
                          </div>
                        )}
                        
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
                  {t('button.loadMore')}
                </Button>
              </div>
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-20 lg:self-start">
              
              <PublicationBlock />
              
              <AIModelsPreviewBlock />
              
              <div className="hidden lg:block">
                <ReadingListBlock />
              </div>



              <WhoToFollowBlock />

              <SocialMediaBlock />


            </div>
          </div>
        </Container>
      </main>

      {/* Mobile Bookmarks Drawer */}
      <MobileBookmarksDrawer 
        isOpen={isBookmarksDrawerOpen}
        onClose={() => setIsBookmarksDrawerOpen(false)}
      />
    </div>
  )
}

export default VcFeedPage
