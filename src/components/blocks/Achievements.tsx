const stats = [
  { number: '2,245,341', label: 'Members' },
  { number: '46,328', label: 'Clubs' },
  { number: '828,867', label: 'Event Bookings' },
  { number: '1,926,436', label: 'Payments' },
]

export default function Achievements() {
  return (
    <section className="py-16 bg-silver">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-[540px]">
            <h2 className="text-[36px] font-semibold leading-[44px] text-black">
              Helping a local{' '}
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-base leading-6 text-grey mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {index === 0 && (
                      <path
                        d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 14C27.32 14 30 16.68 30 20C30 23.32 27.32 26 24 26C20.68 26 18 23.32 18 20C18 16.68 20.68 14 24 14ZM24 40C19.54 40 15.54 37.94 13 34.72C13.06 29.36 21.34 26.4 24 26.4C26.64 26.4 34.94 29.36 35 34.72C32.46 37.94 28.46 40 24 40Z"
                        fill="#4CAF4F"
                      />
                    )}
                    {index === 1 && (
                      <path
                        d="M24 4L4 14V34L24 44L44 34V14L24 4ZM24 8.92L38 16V32L24 40L10 32V16L24 8.92Z"
                        fill="#4CAF4F"
                      />
                    )}
                    {index === 2 && (
                      <path
                        d="M38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6ZM38 38H10V14H38V38Z"
                        fill="#4CAF4F"
                      />
                    )}
                    {index === 3 && (
                      <path
                        d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM30.78 32.78L22 28V14H25V26.44L32.5 30.72L30.78 32.78Z"
                        fill="#4CAF4F"
                      />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-[28px] font-bold leading-9 text-black">
                    {stat.number}
                  </p>
                  <p className="text-base leading-6 text-grey">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
