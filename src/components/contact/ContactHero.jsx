
export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 md:py-28">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[50px] border-white/5" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-brand-red" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              Get in Touch
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Let's Talk
            <span className="text-red-400"> Business.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Have a question about our products or need help finding
            the right solution for your business? Our team is here
            to help.
          </p>
        </div>
      </div>
    </section>
  );
}
