export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop pt-14 pb-6 relative overflow-hidden"
    >
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Profile Image */}
        <div className="hero-glow rounded-full p-[2px] bg-gradient-to-br from-accent/60 to-accent/20">
          <div className="w-24 h-24 rounded-full bg-container-low overflow-hidden border-2 border-container-highest">
            <img src="https://res.cloudinary.com/dkdloke4m/image/upload/v1785448047/IMG_3257_cjolqz.jpg" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Typography */}
        <div className="text-center flex flex-col gap-1">
          <p className="text-outline text-sm font-medium tracking-wide uppercase">Hello, I'm</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Nate Alleyne
          </h1>
          <p className="text-lg md:text-xl text-outline font-light">Software Developer</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-accent text-primary font-semibold rounded shadow-lg shadow-accent/20
            hover:bg-accent/90 hover:shadow-accent/30 transition-all duration-200 text-sm"
          >
            View My Work
          </a>
          <a
            href="/Nathaniel_Alleyne_Resume_07242026.pdf"
            download
            className="px-6 py-2.5 border border-accent/40 text-accent font-semibold rounded hover:bg-accent/10 hover:scale-105 transition-all duration-200 text-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
