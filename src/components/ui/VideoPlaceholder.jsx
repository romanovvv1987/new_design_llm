import React from 'react'
import { PlayCircle } from 'lucide-react'

const VideoPlaceholder = ({ 
  size = "md", 
  duration, 
  className = "",
  showParticles = true 
}) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-24 h-24 lg:w-32 lg:h-32",
    lg: "w-32 h-32 lg:w-40 lg:h-40",
    xl: "w-40 h-40 lg:w-48 lg:h-48"
  }

  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8 lg:h-10 lg:w-10",
    lg: "h-10 w-10 lg:h-12 lg:w-12",
    xl: "h-12 w-12 lg:h-16 lg:w-16"
  }

  const durationSizes = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-sm"
  }

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Анимированные частицы */}
      {showParticles && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-6 right-2 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-250"></div>
        </div>
      )}
      
      {/* Иконка видео */}
      <PlayCircle className={`${iconSizes[size]} text-white drop-shadow-lg relative z-10`} />
      
      {/* Длительность видео */}
      {duration && (
        <div className={`absolute bottom-1 right-1 bg-black bg-opacity-70 text-white ${durationSizes[size]} px-1.5 py-0.5 rounded`}>
          {duration}
        </div>
      )}
    </div>
  )
}

export default VideoPlaceholder
