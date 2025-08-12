import * as React from "react"
import { cn } from "../../lib/utils"

const Container = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Container.displayName = "Container"

export { Container }
