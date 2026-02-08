const features = [
  {
    icon: './assets/images/feature-card-1.png',
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: './assets/images/feature-card-2.png',
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: './assets/images/feature-card-3.png',
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
]

export default function Community() {
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="flex flex-col gap-4">
          {/* Section Header */}
          <div className="text-center max-w-[630px] mx-auto">
            <h2 className="text-[36px] font-semibold leading-[44px] text-dark-grey">
              Manage your entire community in a single system
            </h2>
            <p className="text-base leading-6 text-grey mt-2">
              Who is Nextcent suitable for?
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex items-stretch justify-between gap-[26px] mt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-1 bg-white rounded-lg p-8 flex flex-col items-center text-center gap-2"
                style={{ boxShadow: '0 2px 4px rgba(171, 190, 209, 0.2)' }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[65px] h-auto mb-4"
                  loading="lazy"
                />
                <h3 className="text-[28px] font-bold leading-[36px] text-dark-grey">
                  {feature.title}
                </h3>
                <p className="text-sm leading-5 text-grey">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
