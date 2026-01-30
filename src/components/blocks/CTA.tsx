import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="py-8 bg-silver">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-[64px] font-semibold leading-[76px] text-black max-w-[887px]">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button variant="primary" size="md" icon="right">
            Get a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
