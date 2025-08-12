import { cn } from "../../lib/utils"
import { cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-medium-border bg-medium-background text-medium-primary shadow-sm",
        member: "border-medium-border bg-medium-background text-medium-primary shadow-sm",
        secondary: "border-medium-border bg-medium-search text-medium-secondary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const Badge = ({ className, variant, children, ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
