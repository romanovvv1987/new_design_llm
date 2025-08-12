import React from 'react'
import { Link } from 'react-router-dom'

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Тестовая страница
        </h1>
        
        {/* Navigation Links */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Навигация по страницам
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Link 
              to="/" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
            >
              Тестовая страница
            </Link>
            <Link 
              to="/medium" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
            >
              Medium Page
            </Link>
            <Link 
              to="/vc" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
            >
              VC Page (с комментариями)
            </Link>
            <Link 
              to="/vc-feed" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
            >
              VC Feed Page
            </Link>
            <Link 
              to="/top10" 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
            >
              Top 10 AI Models
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Проверка стилей
          </h2>
          <p className="text-gray-600 mb-4">
            Если вы видите эту страницу с правильными стилями, значит Tailwind CSS работает корректно.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Синяя кнопка
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Зеленая кнопка
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Красная кнопка
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Карточка 1</h3>
            <p className="text-gray-600">Описание первой карточки</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Карточка 2</h3>
            <p className="text-gray-600">Описание второй карточки</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Карточка 3</h3>
            <p className="text-gray-600">Описание третьей карточки</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
