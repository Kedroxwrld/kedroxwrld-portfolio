import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        liquid:
          "btn-liquid text-ink hover:scale-105 active:scale-95",
        primary:
          "bg-gradient-to-br from-primary to-purple-deep text-white shadow-[0_12px_34px_rgba(91,50,232,0.35)] hover:scale-105 hover:shadow-[0_16px_44px_rgba(91,50,232,0.45)] active:scale-95",
        outline:
          "border-2 border-primary/60 bg-transparent text-purple-deep hover:scale-105 hover:bg-primary hover:text-white hover:shadow-[0_12px_34px_rgba(91,50,232,0.35)] active:scale-95",
        ghost:
          "border border-foreground/15 bg-transparent text-foreground hover:scale-105 hover:border-primary hover:bg-accent hover:text-purple-deep active:scale-95",
        white:
          "bg-white text-purple-deep shadow-[0_16px_44px_rgba(18,17,26,0.28)] hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "liquid",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type ?? "button"}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
