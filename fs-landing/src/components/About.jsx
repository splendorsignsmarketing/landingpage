export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="max-w-lg lg:max-w-none">
            <p className="text-brand-red text-[11px] tracking-[0.3em] uppercase font-body mb-4">
              Our Mission
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark uppercase tracking-wide leading-[1.1] mb-8">
              Building the <span className="text-brand-red">Foundation</span> of Our Communities
            </h2>

            <div className="w-12 h-[2px] bg-brand-red mb-8" />

            <p className="text-brand-gray text-base md:text-lg leading-relaxed font-body font-light max-w-xl">
              Building the invisible foundation of our communities through resilient water
              and wastewater solutions. FS Design-Build specializes in engineering the
              essential infrastructure of tomorrow.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl text-brand-dark font-bold">$1.8B</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gray font-body mt-1 block">
                  Project Value
                </span>
              </div>
              <div className="w-[1px] h-12 bg-brand-dark/10" />
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl text-brand-dark font-bold">200+</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gray font-body mt-1 block">
                  Projects Delivered
                </span>
              </div>
              <div className="w-[1px] h-12 bg-brand-dark/10" />
              <div className="text-center">
                <span className="block font-heading text-3xl md:text-4xl text-brand-dark font-bold">25+</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gray font-body mt-1 block">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Ambient Video Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-brand-charcoal rounded-sm overflow-hidden relative group">
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="" type="video/mp4" />
              </video>

              {/* Placeholder visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 40%, rgba(214,25,32,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, rgba(214,25,32,0.1) 0%, transparent 50%)
                  `
                }} />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/25">
                  <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[10px] tracking-[0.2em] uppercase">
                    Ambient Infrastructure Video
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-brand-red" />
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-brand-red text-white px-5 py-3 shadow-xl">
              <span className="text-[10px] tracking-[0.2em] uppercase font-heading block">Est.</span>
              <span className="text-2xl font-heading font-bold">1998</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
