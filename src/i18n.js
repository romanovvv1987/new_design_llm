import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.feed': 'Feed',
      'nav.top10': 'Top 10',
      'nav.medium': 'Medium',
      'nav.popular': 'Popular',
      'nav.all': 'All',
      'nav.news': 'News',
      'nav.analysis': 'Analysis',
      
      // Buttons
      'button.follow': 'Follow',
      'button.subscribe': 'Subscribe',
      'button.support': 'Donate',
      'button.addToReadingList': '+',
      'button.like': 'Like',
      'button.share': 'Share',
      'button.bookmark': 'Bookmark',
      'button.comment': 'Comment',
      'button.listen': 'Listen',
      'button.search': 'Search',
      'button.loadMore': 'Load More',
      'button.signUp': 'Sign up',
      'button.signIn': 'Sign in',
      'button.signUpWithGoogle': 'Sign up with Google',
      'button.alreadyHaveAccount': 'Already have an account?',
      'button.signInHere': 'Sign in here',
      'button.createAccount': 'Create an account to read the full story.',
      'button.authorMadeStoryAvailable': 'The author made this story available to GPTMARKETCUP members only.',
      
      // Sidebar blocks
      'sidebar.readingList': 'Bookmarks',
      'sidebar.readingListEmpty': 'Your reading list is empty',
      'sidebar.readingListDescription': 'Start building your list by bookmarking stories',
      'sidebar.whoToFollow': 'Who to follow',
      'sidebar.topAIModels': 'Top AI Models',
      'sidebar.viewFullRanking': 'View full ranking',
      'sidebar.latest': 'Latest',
      'sidebar.related': 'Related',
      'sidebar.trending': 'Trending',
      
      // Article actions
      'article.memberOnly': 'History for members only',
      'article.writtenBy': 'Written by',
      'article.minRead': 'min read',
      'article.ago': 'ago',
      'article.followers': 'followers',
      'article.following': 'following',
      'article.searchResults': 'Search Results',
      'article.searchResultsFor': 'Search results for',
      
      // Comments
      'comments.title': 'Comments',
      'comments.addComment': 'Add a comment...',
      'comments.reply': 'Reply',
      'comments.like': 'Like',
      'comments.report': 'Report',
      
      // Publication
      'publication.subscribe': 'Subscribe to publication',
      'publication.aiTechnologyInsights': 'AI & Technology Insights',
      'publication.description': 'Publication for expert articles about artificial intelligence, technologies and their impact on the future. From researchers, for researchers.',
      
      // Reading list instructions
      'readingList.instructions': 'Click the bookmark on any story to easily add it to your reading list or a custom list that you can share.',
      
      // Time
      'time.minutes': 'minutes',
      'time.hours': 'hours',
      'time.days': 'days',
      
      // User menu
      'userMenu.profile': 'Profile',
      'userMenu.settings': 'Settings',
      'userMenu.signOut': 'Sign out',
      
      // Search
      'search.placeholder': 'Search articles, authors, topics...',
      'search.title': 'Search & Navigation',
      'search.selectLanguage': 'Select language',
      
      // Language
      'language.english': 'English',
      'language.russian': 'Русский',
      
      // Auth
      'auth.createAccount': 'Create an account to read the full story.',
      'auth.authorMadeStoryAvailable': 'The author made this story available to GPTMARKETCUP members only.',
      'auth.alreadyHaveAccount': 'Already have an account?',
      'auth.signInHere': 'Sign in here',
      'auth.signIn': 'Sign in',
      'auth.signUp': 'Sign up',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.enterEmail': 'Enter your email',
      'auth.enterPassword': 'Enter your password',
      'auth.continueWithGoogle': 'Continue with Google',
      'auth.continueWithFacebook': 'Continue with Facebook',
      'auth.or': 'or',
      'auth.dontHaveAccount': "Don't have an account?",
      'auth.termsAgreement': 'By continuing, you agree to our',
      'auth.termsOfService': 'Terms of Service',
      'auth.and': 'and',
      'auth.privacyPolicy': 'Privacy Policy',
      
      // AI Models
      'aiModels.rank': 'Rank',
      'aiModels.version': 'Version',
      'aiModels.inputPrice': 'Input Price',
      'aiModels.outputPrice': 'Output Price',
      'aiModels.pricePer1M': 'per 1M tokens',
      
      // Common
      'common.following': 'following',
      'common.bullet': '•',
      'common.selectLanguage': 'Select language',
      
      // Social Media
      'social.joinUs': 'Join us',
      'social.followUpdates': 'Follow our updates on social networks'
    }
  },
  ru: {
    translation: {
      // Navigation
      'nav.home': 'Главная',
      'nav.feed': 'Лента',
      'nav.top10': 'Топ 10',
      'nav.medium': 'Medium',
      'nav.popular': 'Популярное',
      'nav.all': 'Все',
      'nav.news': 'Новости',
      'nav.analysis': 'Анализ',
      
      // Buttons
      'button.follow': 'Подписаться',
      'button.subscribe': 'Подписаться',
      'button.support': 'Поддержать',
      'button.addToReadingList': '+',
      'button.like': 'Нравится',
      'button.share': 'Поделиться',
      'button.bookmark': 'Закладка',
      'button.comment': 'Комментировать',
      'button.listen': 'Слушать',
      'button.search': 'Поиск',
      'button.loadMore': 'Загрузить еще',
      'button.signUp': 'Зарегистрироваться',
      'button.signIn': 'Войти',
      'button.signUpWithGoogle': 'Зарегистрироваться через Google',
      'button.alreadyHaveAccount': 'Уже есть аккаунт?',
      'button.signInHere': 'Войти здесь',
      'button.createAccount': 'Создайте аккаунт, чтобы прочитать полную историю.',
      'button.authorMadeStoryAvailable': 'Автор сделал эту историю доступной только для участников GPTMARKETCUP.',
      
      // Sidebar blocks
      'sidebar.readingList': 'Закладки',
      'sidebar.readingListEmpty': 'Ваш список чтения пуст',
      'sidebar.readingListDescription': 'Начните создавать список, добавляя истории в закладки',
      'sidebar.whoToFollow': 'Кого почитать',
      'sidebar.topAIModels': 'AI модели',
      'sidebar.viewFullRanking': 'Посмотреть полный рейтинг',
      'sidebar.latest': 'Последние',
      'sidebar.related': 'Похожие',
      'sidebar.trending': 'Популярное',
      
      // Article actions
      'article.memberOnly': 'История только для участников',
      'article.writtenBy': 'Автор',
      'article.minRead': 'мин чтения',
      'article.ago': 'назад',
      'article.followers': 'подписчиков',
      'article.following': 'подписок',
      'article.searchResults': 'Результаты поиска',
      'article.searchResultsFor': 'Результаты поиска для',
      
      // Comments
      'comments.title': 'Комментарии',
      'comments.addComment': 'Добавить комментарий...',
      'comments.reply': 'Ответить',
      'comments.like': 'Нравится',
      'comments.report': 'Пожаловаться',
      
      // Publication
      'publication.subscribe': 'Подписаться на публикацию',
      'publication.aiTechnologyInsights': 'AI & Technology Insights',
      'publication.description': 'Публикация для экспертных статей о искусственном интеллекте, технологиях и их влиянии на будущее. От исследователей, для исследователей.',
      
      // Reading list instructions
      'readingList.instructions': 'Нажмите на закладку любой истории, чтобы легко добавить её в ваш список чтения или пользовательский список, которым можно поделиться.',
      
      // Time
      'time.minutes': 'минут',
      'time.hours': 'часов',
      'time.days': 'дней',
      
      // User menu
      'userMenu.profile': 'Профиль',
      'userMenu.settings': 'Настройки',
      'userMenu.signOut': 'Выйти',
      
      // Search
      'search.placeholder': 'Поиск статей, авторов, тем...',
      'search.title': 'Поиск и навигация',
      'search.selectLanguage': 'Выбрать язык',
      
      // Language
      'language.english': 'English',
      'language.russian': 'Русский',
      
      // Auth
      'auth.createAccount': 'Создайте аккаунт, чтобы прочитать полную историю.',
      'auth.authorMadeStoryAvailable': 'Автор сделал эту историю доступной только для участников GPTMARKETCUP.',
      'auth.alreadyHaveAccount': 'Уже есть аккаунт?',
      'auth.signInHere': 'Войти здесь',
      'auth.signIn': 'Войти',
      'auth.signUp': 'Зарегистрироваться',
      'auth.email': 'Email',
      'auth.password': 'Пароль',
      'auth.enterEmail': 'Введите ваш email',
      'auth.enterPassword': 'Введите ваш пароль',
      'auth.continueWithGoogle': 'Продолжить с Google',
      'auth.continueWithFacebook': 'Продолжить с Facebook',
      'auth.or': 'или',
      'auth.dontHaveAccount': 'Нет аккаунта?',
      'auth.termsAgreement': 'Продолжая, вы соглашаетесь с нашими',
      'auth.termsOfService': 'Условиями использования',
      'auth.and': 'и',
      'auth.privacyPolicy': 'Политикой конфиденциальности',
      
      // AI Models
      'aiModels.rank': 'Ранг',
      'aiModels.version': 'Версия',
      'aiModels.inputPrice': 'Цена ввода',
      'aiModels.outputPrice': 'Цена вывода',
      'aiModels.pricePer1M': 'за 1M токенов',
      
      // Common
      'common.following': 'подписок',
      'common.bullet': '•',
      'common.selectLanguage': 'Выбрать язык',
      
      // Social Media
      'social.joinUs': 'Присоединяйтесь к нам',
      'social.followUpdates': 'Следите за нашими обновлениями в социальных сетях'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
