import { cn } from "../../lib/utils"

const Avatar = ({ src, alt, size = "md", className, ...props }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-lg",
    xl: "text-xl"
  }

  // Получаем первую букву имени
  const getInitials = (name) => {
    if (!name) return "?"
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
  }

  const initials = getInitials(alt)

  return (
    <div className={cn("rounded-full overflow-hidden border border-medium-border flex items-center justify-center", sizeClasses[size], className)} {...props}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={cn("w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium", textSizeClasses[size])}>
          {initials}
        </div>
      )}
    </div>
  )
}

export { Avatar }
