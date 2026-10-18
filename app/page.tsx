const products = [
  {
    name: "Pebble ceramic mug",
    category: "Hand-finished stoneware",
    price: "$28",
    color: "bg-[#e9d9c8]",
    art: (
      <svg viewBox="0 0 220 220" aria-hidden="true" className="h-44 w-44">
        <ellipse cx="110" cy="177" rx="66" ry="10" fill="#bba995" opacity=".32" />
        <path d="M62 74h89v73a34 34 0 0 1-34 34H96a34 34 0 0 1-34-34V74Z" fill="#f8f4ed" />
        <path d="M151 91h13a22 22 0 0 1 0 44h-13" fill="none" stroke="#f8f4ed" strokeWidth="13" />
        <path d="M70 88h72" stroke="#fff" strokeWidth="5" opacity=".7" />
      </svg>
    ),
  },
  {
    name: "Sunday market tote",
    category: "Recycled cotton canvas",
    price: "$36",
    color: "bg-[#d6ddd0]",
    art: (
      <svg viewBox="0 0 220 220" aria-hidden="true" className="h-44 w-44">
        <ellipse cx="110" cy="178" rx="62" ry="9" fill="#889381" opacity=".28" />
        <path d="M64 89h92l-8 82H72l-8-82Z" fill="#f1e9d9" />
        <path d="M84 91V73a26 26 0 0 1 52 0v18" fill="none" stroke="#f1e9d9" strokeWidth="11" />
        <path d="M91 119h38" stroke="#b8aa91" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Sunday morning vase",
    category: "Sculpted ceramic",
    price: "$42",
    color: "bg-[#e6d5d0]",
    art: (
      <svg viewBox="0 0 220 220" aria-hidden="true" className="h-44 w-44">
        <ellipse cx="110" cy="178" rx="57" ry="9" fill="#a68b85" opacity=".28" />
        <path d="M95 59h30v28c0 11 27 27 27 52a42 42 0 0 1-84 0c0-25 27-41 27-52V59Z" fill="#f5eee8" />
        <path d="M97 69h26M78 143a32 32 0 0 0 30 28" fill="none" stroke="#fff" strokeWidth="5" opacity=".8" />
      </svg>
    ),
  },
  {
    name: "Little light lamp",
    category: "Soft-glow table light",
    price: "$68",
    color: "bg-[#e9e2c9]",
    art: (
      <svg viewBox="0 0 220 220" aria-hidden="true" className="h-44 w-44">
        <ellipse cx="110" cy="179" rx="59" ry="9" fill="#aa9d76" opacity=".3" />
        <path d="M69 103h82l-15-45H84l-15 45Z" fill="#fff4ce" />
        <path d="M106 103h8l8 49h-24l8-49Z" fill="#f7f1e6" />
        <path d="M87 153h46a10 10 0 0 1 10 10v5H77v-5a10 10 0 0 1 10-10Z" fill="#f7f1e6" />
        <path d="M84 62h52" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </svg>
    ),
  },
];

const categories = [
  { name: "For the home", detail: "Thoughtful little upgrades", color: "bg-[#e9d9c8]" },
  { name: "On the go", detail: "Good things to take along", color: "bg-[#d6ddd0]" },
  { name: "For slow days", detail: "Make room to unwind", color: "bg-[#e6d5d0]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#252820]">
      <div className="bg-[#282c25] px-4 py-2.5 text-center text-xs font-medium tracking-[0.12em] text-white sm:text-sm">
        A little treat: free shipping on orders over $75
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="text-xl font-bold tracking-[0.18em]" aria-label="Morrow home">
          MORROW<span className="text-[#9b7358]">.</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm text-[#62645b] md:flex">
          <a className="transition-colors hover:text-[#252820]" href="#featured">Shop</a>
          <a className="transition-colors hover:text-[#252820]" href="#categories">Collections</a>
          <a className="transition-colors hover:text-[#252820]" href="#story">Our story</a>
        </nav>
        <a
          href="#featured"
          className="rounded-full border border-[#dcd9d0] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#282c25] hover:text-white"
        >
          Find your favorite
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-12 md:pb-24 md:pt-10">
        <div className="max-w-xl py-8 md:py-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7358]">
            Good things for everyday
          </p>
          <h1 className="text-5xl font-medium leading-[1.06] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Make room for
            <br />
            <span className="font-serif italic text-[#9b7358]">the little things.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#686a61] sm:text-lg">
            Thoughtful pieces for slower mornings, well-loved homes, and all the lovely in-between.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#featured"
              className="rounded-full bg-[#282c25] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#464b40]"
            >
              Shop the collection <span aria-hidden="true">↗</span>
            </a>
            <a href="#story" className="text-sm font-medium underline decoration-[#c9b9a7] underline-offset-4">
              A little about us
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-[#686a61]">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-8 w-8 rounded-full border-2 border-[#fbfaf7] bg-[#ddc4af]" />
              <span className="h-8 w-8 rounded-full border-2 border-[#fbfaf7] bg-[#c7cec0]" />
              <span className="h-8 w-8 rounded-full border-2 border-[#fbfaf7] bg-[#e4d3c6]" />
            </div>
            <span>Loved by 2,000+ happy homes</span>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e9e5dc] sm:min-h-[460px]">
          <div className="absolute left-[12%] top-[12%] h-24 w-24 rounded-full bg-[#f7f4ec]/60 sm:h-32 sm:w-32" />
          <div className="absolute bottom-0 left-0 right-0 h-[27%] bg-[#d8d1c4]" />
          <div className="relative z-10 flex items-end gap-2 sm:gap-5">
            <div className="mb-5 flex h-40 w-28 items-center justify-center rounded-t-[3rem] rounded-b-2xl bg-[#a9b19e] shadow-xl sm:h-56 sm:w-40">
              <span className="mb-7 text-5xl text-[#e7e3d8] sm:text-7xl" aria-hidden="true">✿</span>
            </div>
            <div className="flex h-32 w-28 items-center justify-center rounded-[2rem] bg-[#f5eee4] shadow-xl sm:h-44 sm:w-36">
              <span className="text-5xl text-[#c89d7e] sm:text-6xl" aria-hidden="true">◡</span>
            </div>
            <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-t-[2.5rem] rounded-b-xl bg-[#ba8d73] shadow-xl sm:h-32 sm:w-32">
              <span className="mb-4 text-4xl text-[#f4e6d9] sm:text-5xl" aria-hidden="true">✳</span>
            </div>
          </div>
          <p className="absolute bottom-5 right-5 z-10 rounded-full bg-[#fbfaf7]/85 px-4 py-2 text-xs tracking-wide text-[#62645b]">
            Made for your everyday
          </p>
        </div>
      </section>

      <section id="categories" className="border-y border-[#ece9e2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:px-8 md:grid-cols-3 md:gap-6 md:py-16">
          {categories.map((category, index) => (
            <a
              href="#featured"
              key={category.name}
              className={`${category.color} group flex min-h-36 items-end justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1`}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#686a61]">0{index + 1}</p>
                <h2 className="mt-2 text-xl font-medium">{category.name}</h2>
                <p className="mt-1 text-sm text-[#686a61]">{category.detail}</p>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7358]">The good stuff</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">A few everyday favorites</h2>
          </div>
          <a href="#featured" className="text-sm font-medium underline decoration-[#c9b9a7] underline-offset-4">
            View all favorites <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className={`${product.color} flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-2xl`}>
                <div className="transition-transform duration-300 group-hover:scale-105">{product.art}</div>
              </div>
              <div className="flex items-start justify-between gap-2 pt-4">
                <div>
                  <h3 className="text-sm font-medium sm:text-base">{product.name}</h3>
                  <p className="mt-1 text-xs text-[#77796f] sm:text-sm">{product.category}</p>
                </div>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#e9e5dc] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7358]">A little less, a little better</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            The things we keep close should feel good to live with.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#686a61]">
            We seek out useful, lasting pieces made with care—so the ordinary parts of your day can feel a little more special.
          </p>
        </div>
      </section>

      <footer className="bg-[#282c25] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#" className="text-lg font-bold tracking-[0.18em]">MORROW.</a>
          <p className="text-sm text-white/65">Thoughtful things for every day.</p>
          <p className="text-xs text-white/50">© 2026 Morrow. Made with care.</p>
        </div>
      </footer>
    </main>
  );
}
