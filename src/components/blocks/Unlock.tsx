import Button from '../ui/Button'

export default function Unlock() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-24">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src="./assets/images/unlock-illustration.png"
              alt="Designer working"
              className="w-[442px] h-[433px] object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[36px] font-semibold leading-[44px] text-black">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="text-base leading-6 text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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
