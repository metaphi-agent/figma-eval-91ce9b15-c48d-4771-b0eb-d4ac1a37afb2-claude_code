export default function Testimonial() {
  return (
    <section className="py-8 bg-silver">
      <div className="container-custom">
        <div className="flex items-center gap-[78px]">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src="./assets/images/testimonial-image.png"
              alt="Testimonial"
              className="w-[326px] h-[326px] rounded-lg object-cover"
              style={{ boxShadow: '0 8px 16px rgba(171, 190, 209, 0.4)' }}
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-base leading-6 text-grey max-w-[748px]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum nam. Aenean sit amet felis blandit, feugiat eros non, fermentum tellus.
            </p>
            <div>
              <p className="text-[20px] font-semibold leading-7 text-primary">
                Tim Smith
              </p>
              <p className="text-base leading-6 text-grey">
                British Dragon Boat Racing Association
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary opacity-30" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary opacity-30" />
            </div>

            {/* Meet all customers link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-[#3d9a40] transition-colors"
            >
              Meet all customers
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
      </div>
    </section>
  )
}
