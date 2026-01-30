const footerLinks = {
  company: [
    { label: 'About us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact us', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Testimonials', href: '#' },
  ],
  support: [
    { label: 'Help center', href: '#' },
    { label: 'Terms of service', href: '#' },
    { label: 'Legal', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Status', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#4CAF4F"/>
        <path d="M16 12.4C14 12.4 12.4 14 12.4 16C12.4 18 14 19.6 16 19.6C18 19.6 19.6 18 19.6 16C19.6 14 18 12.4 16 12.4ZM16 18.4C14.68 18.4 13.6 17.32 13.6 16C13.6 14.68 14.68 13.6 16 13.6C17.32 13.6 18.4 14.68 18.4 16C18.4 17.32 17.32 18.4 16 18.4Z" fill="white"/>
        <path d="M19.72 12.92C20.16 12.92 20.52 12.56 20.52 12.12C20.52 11.68 20.16 11.32 19.72 11.32C19.28 11.32 18.92 11.68 18.92 12.12C18.92 12.56 19.28 12.92 19.72 12.92Z" fill="white"/>
        <path d="M21.6 9.6H10.4C9.52 9.6 9.6 10.32 9.6 10.4V21.6C9.6 22.48 10.32 22.4 10.4 22.4H21.6C22.48 22.4 22.4 21.68 22.4 21.6V10.4C22.4 9.52 21.68 9.6 21.6 9.6ZM21.2 21.2H10.8V10.8H21.2V21.2Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#4CAF4F"/>
        <path d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8ZM21.8 12.2C22.7 13.3 23.2 14.7 23.2 16.2C22.4 16 20.8 15.7 19.2 15.9C19 15.3 18.8 14.8 18.5 14.2C20.3 13.5 21.4 12.6 21.8 12.2ZM16 8.8C17.7 8.8 19.3 9.4 20.5 10.5C20.1 10.9 19.1 11.7 17.4 12.3C16.4 10.5 15.3 9.1 14.9 8.9C15.3 8.8 15.6 8.8 16 8.8ZM13.8 9.3C14.2 9.5 15.3 10.9 16.3 12.7C14 13.3 11.8 13.4 11.1 13.4C11.6 11.5 12.5 10.1 13.8 9.3ZM8.8 16C8.8 15.9 8.8 15.8 8.8 15.7C9.5 15.7 12.1 15.7 14.7 15C14.9 15.3 15 15.7 15.2 16C12.5 16.9 10.2 19 9.3 20.2C8.9 19 8.8 17.5 8.8 16ZM16 23.2C14.4 23.2 12.9 22.7 11.7 21.8C12.3 20.8 14.2 18.9 17.2 17.7C18.2 20.1 18.7 22.1 18.9 23C18 23.1 17 23.2 16 23.2ZM19.8 22.5C19.7 22 19.2 20.1 18.3 17.7C19.8 17.5 21.2 17.9 21.8 18.1C21.4 19.8 20.8 21.3 19.8 22.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#4CAF4F"/>
        <path d="M23 11.9C22.4 12.2 21.8 12.4 21.1 12.5C21.8 12.1 22.3 11.5 22.5 10.7C21.9 11.1 21.2 11.4 20.4 11.5C19.8 10.9 19 10.5 18.1 10.5C16.3 10.5 14.8 12 14.8 13.8C14.8 14.1 14.8 14.3 14.9 14.5C12.1 14.4 9.6 13 8 10.9C7.7 11.4 7.5 12 7.5 12.6C7.5 13.8 8.1 14.8 9 15.4C8.4 15.4 7.9 15.2 7.4 15V15C7.4 16.6 8.5 17.9 10 18.2C9.7 18.3 9.4 18.3 9 18.3C8.8 18.3 8.5 18.3 8.3 18.2C8.8 19.6 10 20.6 11.5 20.6C10.3 21.6 8.8 22.1 7.1 22.1C6.8 22.1 6.5 22.1 6.2 22C7.8 23 9.6 23.6 11.5 23.6C18.1 23.6 21.7 18.4 21.7 13.9V13.5C22.4 13.1 22.9 12.5 23 11.9Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#4CAF4F"/>
        <path d="M23.8 12.8C23.6 12 23 11.4 22.2 11.2C20.8 10.8 16 10.8 16 10.8C16 10.8 11.2 10.8 9.8 11.2C9 11.4 8.4 12 8.2 12.8C7.8 14.2 7.8 16 7.8 16C7.8 16 7.8 17.8 8.2 19.2C8.4 20 9 20.6 9.8 20.8C11.2 21.2 16 21.2 16 21.2C16 21.2 20.8 21.2 22.2 20.8C23 20.6 23.6 20 23.8 19.2C24.2 17.8 24.2 16 24.2 16C24.2 16 24.2 14.2 23.8 12.8ZM14.4 18.4V13.6L18.4 16L14.4 18.4Z" fill="white"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container-custom">
        <div className="flex gap-[125px] py-16">
          {/* Company Info */}
          <div className="flex flex-col gap-10 max-w-[350px]">
            <img
              src="./assets/logo.svg"
              alt="Nexcent"
              className="h-6 brightness-0 invert"
            />
            <p className="text-base leading-6 text-text-gray-300">
              Copyright 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="hover:opacity-80 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-[30px] flex-1">
            <div className="flex-1">
              <h4 className="text-[20px] font-semibold leading-7 text-white mb-6">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-5 text-text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[20px] font-semibold leading-7 text-white mb-6">
                Support
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-5 text-text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex-1">
              <h4 className="text-[20px] font-semibold leading-7 text-white mb-6">
                Stay up to date
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-[rgba(255,255,255,0.2)] text-sm leading-5 text-text-gray-300 placeholder:text-text-gray-300 px-4 py-3 rounded-l focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  className="bg-primary p-3 rounded-r hover:bg-[#3d9a40] transition-colors"
                  aria-label="Subscribe"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51 4.23L18.07 8.51C21.91 10.43 21.91 13.57 18.07 15.49L9.51 19.77C3.75 22.65 1.4 20.29 4.28 14.54L5.15 12.81C5.37 12.37 5.37 11.64 5.15 11.2L4.28 9.46C1.4 3.71 3.76 1.35 9.51 4.23Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
