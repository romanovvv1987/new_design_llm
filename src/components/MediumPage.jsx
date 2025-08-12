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
  Menu
} from 'lucide-react'

const MediumPage = () => {
  return (
    <div className="min-h-screen bg-medium-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-medium-border bg-medium-background">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Logo */}
              <a href="#" className="medium-logo">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-bold text-lg lg:text-xl text-medium-primary">GptMarketCap</span>
                </div>
              </a>
              
              {/* Search - скрыт на мобильных */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-medium-secondary" />
                <input 
                  type="text" 
                  placeholder="Поиск" 
                  className="medium-search pl-10 w-60"
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
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-medium-secondary" />
                      <input 
                        type="text" 
                        placeholder="Поиск" 
                        className="medium-search pl-10 w-full"
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
                        <div className="font-medium text-medium-primary">Пользователь</div>
                        <div className="text-sm text-medium-secondary">@user</div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main>
        <Container>
          <div className="py-6 lg:py-8">
            {/* Publication Header */}
            <div className="border-b border-medium-border pb-4 lg:pb-6 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a href="#" className="text-base lg:text-lg font-medium text-medium-primary hover:underline">
                    AI & Technology Insights
                  </a>
                  <span className="hidden sm:inline text-medium-secondary">·</span>
                  <Button variant="ghost" size="sm" className="w-fit">
                    Подписаться на публикацию
                  </Button>
                </div>
                
                {/* Member Badge */}
                <Badge variant="member">
                  <Star className="h-4 w-4 fill-medium-yellow" />
                  <span>История только для участников</span>
                </Badge>
              </div>
            </div>

            {/* Article */}
            <article className="space-y-6 lg:space-y-8">

              {/* Article Title */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medium-primary leading-tight">
                  GPT-4 превосходит GPT-3.5 — вот что изменилось
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-medium-secondary leading-relaxed">
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
                    <a href="#" className="text-base font-medium text-medium-primary hover:underline truncate block">
                      George J. Ziogas
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-medium-secondary">
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
              <figure className="text-center">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ZkeGGo0gnAiD39Rs3nD2mg.jpeg" 
                  alt="Резюме" 
                  className="w-full max-w-4xl mx-auto rounded-lg"
                />
              </figure>

              {/* Article Text */}
              <div className="text-medium-body space-y-6 max-w-3xl mx-auto">
                <p className="text-base lg:text-lg leading-relaxed">
                  OpenAI представила GPT-4, новую языковую модель, которая значительно превосходит своего предшественника GPT-3.5 по всем ключевым параметрам.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  GPT-4 демонстрирует улучшенные способности к рассуждению, более точные ответы и лучшую производительность в сложных задачах. Модель может обрабатывать как текстовые, так и визуальные входные данные, открывая новые возможности для AI-приложений.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  В этой статье мы рассмотрим ключевые улучшения GPT-4 и их влияние на будущее искусственного интеллекта.
                </p>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-medium-primary mt-8 mb-4">
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
        </Container>
      </main>
    </div>
  )
}

export default MediumPage
