import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'right' | 'none'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded transition-colors duration-150',
        {
          'bg-primary text-white hover:bg-[#3d9a40] active:bg-[#2e8030]': variant === 'primary',
          'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white': variant === 'outline',
          'bg-secondary text-white hover:bg-[#1e272c]': variant === 'secondary',
          'px-4 py-2 text-sm gap-1': size === 'sm',
          'px-8 py-3.5 text-base gap-2': size === 'md',
          'px-10 py-4 text-lg gap-2': size === 'lg',
        },
        className
      )}
    >
      {children}
      {icon === 'right' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M14.4301 5.92999L20.5001 12L14.4301 18.07"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
