const blogCards = [
  {
    image: './assets/images/blog-card-1.png',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    href: '#',
  },
  {
    image: './assets/images/blog-card-2.png',
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    href: '#',
  },
  {
    image: './assets/images/blog-card-3.png',
    title: 'Revamping the Membership Model with TNM Coaching',
    href: '#',
  },
]

export default function CommunityUpdates() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-4">
          {/* Section Header */}
          <div className="text-center max-w-[630px]">
            <h2 className="text-[36px] font-semibold leading-[44px] text-dark-grey">
              Caring is the new marketing
            </h2>
            <p className="text-base leading-6 text-grey mt-2">
              The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="flex items-start justify-between gap-[17px] w-full mt-4">
            {blogCards.map((card, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                {/* Image Container */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[368px] h-[286px] rounded-lg object-cover"
                  loading="lazy"
                />
                {/* Content Card - overlapping the image */}
                <div
                  className="bg-silver rounded-lg p-4 w-[317px] -mt-24 relative z-10 flex flex-col items-center gap-4"
                  style={{ boxShadow: '0 8px 16px rgba(171, 190, 209, 0.4)' }}
                >
                  <h3 className="text-[20px] font-semibold leading-7 text-grey text-center">
                    {card.title}
                  </h3>
                  <a
                    href={card.href}
                    className="flex items-center justify-center gap-2 text-base font-medium text-primary hover:text-[#3d9a40] transition-colors"
                  >
                    Readmore
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.62 3.95334L13.6667 8L9.62 12.0467"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.33337 8H13.5534"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
