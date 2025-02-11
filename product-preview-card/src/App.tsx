import './App.css'
import desktopImage from './assets/image-product-desktop.jpg'
import mobileImage from './assets/image-product-mobile.jpg'

function App() {
  return (
    <>
      <body className="bg-cream text-gray min-h-screen flex justify-center items-center">
        <main className="px-5 py-7">
          <div className="card flex flex-col md:flex-row max-w-2xl rounded-xl overflow-hidden mx-auto">
            <div className="card__image basis-1/2">
              <picture>
                <source media="(min-width: 40em)" srcSet={desktopImage} />
                <img src={mobileImage} alt="Product image of Gabrielle Essence Eau De Parfum" />
              </picture>
            </div>
            <div className="card__body bg-white p-6 basis-1/2 flex flex-col justify-evenly">
              <div className="card__category uppercase text-xs md:text-sm tracking-widest mb-2">Perfume</div>

              <h1 className="card__title text-blue font-serif text-3xl md:text-4xl">Gabrielle Essence Eau De Parfum</h1>

              <p className="card__description my-5 text-sm">A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.</p>

              <div className="card__price-container flex items-center gap-5 mb-5">
                <div className="card__sale-price text-cyan font-serif text-3xl md:text-4xl">$149.99</div>
                <div className="card__regular-price line-through text-sm">$169.99</div>
              </div>
              <button className="w-full flex items-center justify-center bg-cyan hover:bg-cyan-dark transition-colors text-white p-3.5 gap-3 rounded-lg">
                <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  )
}

export default App
