import * as React from "react"
import { cn } from "../../lib/utils"

const Tag = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full bg-medium-tag px-3 py-1 text-xs font-medium text-medium-tag-text hover:bg-medium-tag-hover transition-colors cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})
Tag.displayName = "Tag"

export { Tag }
