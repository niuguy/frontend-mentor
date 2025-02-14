import logoSvg from './assets/logo.svg'
import heroTabletImg from './assets/tablet/image-hero.png'
import heroLeftImg from './assets/desktop/image-hero-left.png'
import heroRightImg from './assets/desktop/image-hero-right.png'
import womanVideoCallImg from './assets/desktop/image-woman-in-videocall.jpg'
import womenChattingImg from './assets/desktop/image-women-videochatting.jpg'
import menMeetingImg from './assets/desktop/image-men-in-meeting.jpg'
import manTextingImg from './assets/desktop/image-man-texting.jpg'
import footerBgImg from './assets/desktop/image-footer.jpg'

function App() {
  return (
    <>
      <nav className="fill-[1440px] h-[108px] flex items-center justify-center">
        <img src={logoSvg} />
      </nav>

      {/* Hero */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-6
        sm:fill-[375px] sm:h-[640px]
        md:fill-[768px] md:h-[761px]
        lg:fill-[1440px] lg:h-[488px]">

        {/* Combined image for mobile and tablet */}
        <img
          src={heroTabletImg}
          alt="Profile collage"
          className="lg:hidden mb-12 w-full max-w-[820px]"
        />

        {/* Split images for desktop */}
        <img
          src={heroLeftImg}
          alt="Profile collage left"
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
        />
        <img
          src={heroRightImg}
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
      <main className="relative">
        {/* Number badge with line */}
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-[84px] bg-[#D8D8D8]"></div>
          <div className="w-[56px] h-[56px] rounded-full border border-[#D8D8D8] flex items-center justify-center">
            <h2 className="text-[16px] text-[#87879D]">01</h2>
          </div>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] mx-auto mb-16 mt-16">
          <img
            src={womanVideoCallImg}
            alt="Woman in videocall"
            className="rounded-lg w-full h-[143px] md:h-[156px] lg:h-[242px] object-cover"
          />
          <img
            src={womenChattingImg}
            alt="Women videochatting"
            className="rounded-lg w-full h-[143px] md:h-[156px] lg:h-[242px] object-cover"
          />
          <img
            src={menMeetingImg}
            alt="Men in meeting"
            className="rounded-lg w-full h-[143px] md:h-[156px] lg:h-[242px] object-cover"
          />
          <img
            src={manTextingImg}
            alt="Man texting"
            className="rounded-lg w-full h-[143px] md:h-[156px] lg:h-[242px] object-cover"
          />
        </div>

        {/* Content */}
        <section className="relative flex flex-col items-center text-center max-w-[1110px] mx-auto px-6">
          <h3 className="text-[16px] uppercase tracking-[4px] text-[#4D96A9] mb-4">
            Built for modern useq
          </h3>
          <h2 className="text-[32px] md:text-[40px] text-[#28283D] font-bold mb-8">
            Smarter meetings, all<br />in one place
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#87879D] max-w-[540px] mb-[180px]">
            Send messages, share files, show your screen, and record your meetings — all in one
            workspace. Control who can join with invite-only team access, data encryption, and data export.
          </p>

          {/* Badge positioned at the bottom of this section */}
          <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <div className="w-[1px] h-[84px] bg-[#D8D8D8]"></div>
            <div className="w-[56px] h-[56px] rounded-full border border-[#D8D8D8] flex items-center justify-center bg-white">
              <span className="text-[16px] text-[#87879D]">02</span>
            </div>
          </div>
        </section>

        <section 
          className="relative w-full text-white py-[116px] px-6 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url(${footerBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left max-w-[1110px] mx-auto">
            <h3 className="text-[32px] md:text-[40px] font-bold max-w-[350px]">
              Experience more together
            </h3>
            <p className="text-[16px] md:text-[18px] max-w-[350px] md:max-w-[400px]">
              Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
            </p>
            <button className="bg-[#855FB1] px-10 py-4 rounded-full hover:bg-[#B18BDD] mt-4 md:mt-0">
              Download v1.3
            </button>
          </div>
        </section>
      </main>

      <footer>
        {/* Footer content will go here */}
      </footer>
    </>
  )
}

export default App
