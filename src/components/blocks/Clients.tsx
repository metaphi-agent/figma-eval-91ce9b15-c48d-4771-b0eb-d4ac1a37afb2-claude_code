const clientLogos = [
  { src: './assets/images/client-1.png', alt: 'Logo 1' },
  { src: './assets/images/client-2.png', alt: 'Logo 2' },
  { src: './assets/images/client-3.png', alt: 'Logo 3' },
  { src: './assets/images/client-4.png', alt: 'Logo 4' },
  { src: './assets/images/client-5.png', alt: 'Logo 5' },
  { src: './assets/images/client-6.png', alt: 'Logo 6' },
  { src: './assets/images/client-7.png', alt: 'Logo 7' },
]

export default function Clients() {
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-4">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] text-dark-grey">
              Our Clients
            </h2>
            <p className="text-base leading-6 text-grey mt-2">
              We have been working with some Fortune 500+ clients
            </p>
          </div>

          {/* Client Logos */}
          <div className="flex items-center justify-between w-full mt-4">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[48px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
