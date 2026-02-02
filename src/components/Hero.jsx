// src/components/Hero.jsx
import hero from '../assets/001.jpg'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-[-150px]"
      style={{
        // Replace with your own high-res London skyline image (public/images/hero-bg.jpg or external URL)
        backgroundImage: `url('public/001.jpg')`,
      }}
    >
      {/* Reddish-dark overlay for text contrast */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-red-950/40 to-black/70"></div> */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 pt-48 pb-40 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  mb-8 drop-shadow-2xl">
          <span className='text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight'>EMPOWER</span>
          <br />
          YOUR DIGITAL JOURNEY WITH
          <br />
          <span className="font-extrabold leading-tight tracking-tight">AI AUTOMATION</span>
        </h1>

        <a href="/" className="inline-block">
  <button
    className="
      bg-red-700 
      text-white 
      px-6 py-4 
      rounded-xl 
      font-semibold 
      tracking-wide
      shadow-lg shadow-red-700/30
      transition-all duration-300 ease-out
      hover:bg-red-600
      hover:shadow-xl hover:shadow-red-600/40
      hover:-translate-y-0.5
      active:translate-y-0
      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
    "
  >
    Get a Free Audit
  </button>
</a>

      </div>

      {/* Social icons – bottom left */}
      {/* <div className="absolute bottom-10 left-6 md:left-12 z-20 flex flex-col gap-5">
        <a
          href="#"
          className="text-white hover:text-red-300 transition text-2xl font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
        <a
          href="#"
          className="text-white hover:text-red-300 transition text-2xl font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          FB
        </a>
        <a
          href="#"
          className="text-white hover:text-red-300 transition text-2xl font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>
      </div> */}
    </section>
  );
}