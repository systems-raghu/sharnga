import * as React from "react"
import { cn } from "../../lib/utils"
import { motion } from "motion/react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass" | "dark-glass"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref as any}
        whileHover={variant !== "link" ? { scale: 1.02, filter: "brightness(1.1)" } : {}}
        whileTap={variant !== "link" ? { scale: 0.98 } : {}}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-slate-900 text-white hover:bg-slate-900/90": variant === "default",
            "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900": variant === "outline",
            "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
            "text-slate-900 underline-offset-4 hover:underline": variant === "link",
            "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]": variant === "glass",
            "bg-[#1C3418]/80 backdrop-blur-md border border-white/20 text-white hover:bg-[#1C3418]/90 shadow-[0_4px_30px_rgba(0,0,0,0.1)]": variant === "dark-glass",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
