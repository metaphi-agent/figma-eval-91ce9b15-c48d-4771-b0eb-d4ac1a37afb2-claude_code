import Button from '../ui/Button'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Service', href: '#' },
  { label: 'Feature', href: '#' },
  { label: 'Product', href: '#' },
  { label: 'Testimonial', href: '#' },
  { label: 'FAQ', href: '#' },
]

export default function Header() {
  return (
    <header className="bg-silver">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[84px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="./assets/logo.svg"
              alt="Nexcent"
              className="h-6"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-[50px]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-dark-grey hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Login/Register */}
          <div className="flex items-center gap-3.5">
            <a
              href="#"
              className="text-base font-medium text-primary hover:text-[#3d9a40] transition-colors"
            >
              Login
            </a>
            <Button variant="primary" size="sm" className="px-5 py-2.5">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
