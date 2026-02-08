import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="bg-silver py-24">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-[104px]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-[64px] font-semibold leading-[76px] text-secondary">
                Lessons and insights{' '}
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="text-base leading-6 text-grey">
                Where to grow your business as a photographer: site or social media?
              </p>
            </div>
            <Button variant="primary" size="md">
              Register
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex-shrink-0">
            <img
              src="./assets/images/hero-illustration.png"
              alt="Business illustration"
              className="w-[391px] h-[407px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
