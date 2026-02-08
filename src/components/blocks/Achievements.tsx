const stats = [
  { icon: './assets/icons/members-icon.svg', number: '2,245,341', label: 'Members' },
  { icon: './assets/icons/clubs-icon.svg', number: '46,328', label: 'Clubs' },
  { icon: './assets/icons/calendar-icon.svg', number: '828,867', label: 'Event Bookings' },
  { icon: './assets/icons/payments-icon.svg', number: '1,926,436', label: 'Payments' },
]

export default function Achievements() {
  return (
    <section className="py-16 bg-silver">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-[30px]">
          {/* Left Content */}
          <div className="max-w-[540px]">
            <h2 className="text-[36px] font-semibold leading-[44px] text-dark-grey">
              Helping a local{' '}
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-base leading-6 text-grey mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats - 2x2 Grid */}
          <div className="flex flex-col gap-10">
            {/* Row 1 */}
            <div className="flex gap-[30px]">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center gap-4 w-[255px]">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <p className="text-[28px] font-bold leading-9 text-dark-grey">
                      {stat.number}
                    </p>
                    <p className="text-base leading-6 text-grey">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-[30px]">
              {stats.slice(2, 4).map((stat, index) => (
                <div key={index} className="flex items-center gap-4 w-[255px]">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <p className="text-[28px] font-bold leading-9 text-dark-grey">
                      {stat.number}
                    </p>
                    <p className="text-base leading-6 text-grey">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
