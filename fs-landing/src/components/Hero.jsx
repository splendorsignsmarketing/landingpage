import { useState } from 'react';

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-brand-charcoal">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          {/* Replace with actual cinematic drone footage */}
          <source src="" type="video/mp4" />
        </video>
        {/* Gradient overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Animated placeholder pattern for video background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 25%, rgba(214,25,32,0.03) 25%, rgba(214,25,32,0.03) 50%, transparent 50%, transparent 75%, rgba(214,25,32,0.03) 75%),
              linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 75%)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Logo Placeholder */}
        <div className="mb-8 animate-[fadeInDown_1s_ease-out]">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-2">
            <span className="font-heading text-3xl md:text-4xl font-bold text-white tracking-wider">
              FS
            </span>
          </div>
          <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mt-3 font-body">
            Design &middot; Build &middot; Deliver
          </p>
        </div>

        {/* H1 Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide max-w-5xl leading-[1.05] animate-[fadeInUp_1s_ease-out_0.3s_both]">
          Houston&rsquo;s Trusted{' '}
          <span className="text-brand-red">Infrastructure</span> &{' '}
          <span className="text-brand-red">Water Facility</span> Experts
        </h1>

        {/* Subtle Divider */}
        <div className="w-16 h-[2px] bg-brand-red mt-8 mb-8 animate-[fadeIn_1s_ease-out_0.6s_both]" />

        {/* Play Video Button */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="group flex items-center gap-3 animate-[fadeInUp_1s_ease-out_0.8s_both] cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/40 group-hover:border-brand-red flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-red/20">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white/70 group-hover:text-white text-[11px] tracking-[0.2em] uppercase font-body transition-colors">
            Play Video
          </span>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mx-auto mt-1" />
        </div>
      </div>

      {/* Video Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video bg-brand-charcoal rounded-sm overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white/30">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-xs tracking-[0.2em] uppercase">
                  Cinematic Reel Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
