import Button from '../ui/Button'

export default function Calendar() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-24">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src="./assets/images/calendar-illustration.png"
              alt="Mobile login illustration"
              className="w-[442px] h-[433px] object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[36px] font-semibold leading-[44px] text-black">
                How to design your site footer like we did
              </h2>
              <p className="text-base leading-6 text-grey">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <Button variant="primary" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
