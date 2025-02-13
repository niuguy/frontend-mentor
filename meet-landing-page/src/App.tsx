const assets = {
  logo: './assets/logo.svg',
  heroTablet: './assets/tablet/image-hero.png',
  heroDesktopLeft: './assets/desktop/image-hero-left.png',
  heroDesktopRight: './assets/desktop/image-hero-right.png'
};


function getAssetUrl(path: string) {
  return new URL(`./assets/${path}`, import.meta.url).href;
}

function App() {
  return (
    <>
      <nav className="fill-[1440px] h-[108px] flex items-center justify-center">
        <img src={getAssetUrl('logo.svg')} />
      </nav>

      {/* Hero */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-6
        sm:fill-[375px] sm:h-[640px]
        md:fill-[768px] md:h-[761px]
        lg:fill-[1440px] lg:h-[488px]">

        {/* Combined image for mobile and tablet */}
        <img 
          src={new URL(assets.heroTablet, import.meta.url).href}
          alt="Profile collage" 
          className="lg:hidden mb-12 w-full max-w-[820px]"
        />
        
        {/* Split images for desktop */}
        <img 
          src={new URL(assets.heroDesktopLeft, import.meta.url).href}
          alt="Profile collage left" 
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
        />
        <img 
          src={new URL(assets.heroDesktopRight, import.meta.url).href}
          alt="Profile collage right" 
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
        />

        {/* Content */}
        <h1 className="text-[40px] md:text-[48px] lg:text-[64px] font-bold text-[#28283D] mb-6">
          Group Chat<br />for Everyone
        </h1>
        <p className="text-[16px] md:text-[16px] lg:text-[18px] text-[#87879D] max-w-[327px] md:max-w-[457px] mb-8">
          Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          <button className="bg-[#4D96A9] text-white px-8 py-4 rounded-full hover:bg-[#71C0D4] mb-4 md:mb-0">
            Download v1.3
          </button>
          <button className="bg-[#855FB1] text-white px-8 py-4 rounded-full hover:bg-[#B18BDD]">
            What is it?
          </button>
        </div>
      </div>

      {/* Features */}
      <main>
        <section>
          <h2>01</h2>
          <h3>Built for modern use</h3>
          <h2>Smarter meetings, all in one place</h2>
          <p>Send messages, share files, show your screen, and record your meetings — all in one 
          workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
        </section>

        <section>
          <h2>02</h2>
          <h3>Experience more together</h3>
          <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        </section>

        <button>Download v1.3</button>
      </main>

      <footer>
        {/* Footer content will go here */}
      </footer>
    </>
  )
}

export default App
