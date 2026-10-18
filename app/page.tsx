import Image from "next/image";

const products = [
  { name: "Khaman Dhokla", hindi: "खमन ढोकला", emoji: "🟨" },
  { name: "Poha", hindi: "पोहा", emoji: "🍋" },
  { name: "Rice Idli", hindi: "इडली", emoji: "🍚" },
  { name: "Chola Gravy", hindi: "छोले ग्रेवी", emoji: "🍛" },
  { name: "Vermicelli", hindi: "सेवई", emoji: "🍜" },
  { name: "Upma", hindi: "उपमा", emoji: "🥣" },
  { name: "Moong Bhajiya", hindi: "मूंग भजिया", emoji: "🧆" },
  { name: "White Dhokla", hindi: "व्हाइट ढोकला", emoji: "⬜" },
  { name: "Dahi Vada", hindi: "दही बड़ा", emoji: "🥣" },
  { name: "Uttapam", hindi: "उत्तपम", emoji: "🥞" },
  { name: "Appe", hindi: "अप्पे", emoji: "🟤" },
];

const benefits = [
  {
    title: "Quick & easy",
    description: "Just a few simple steps to get started.",
    icon: "◷",
  },
  {
    title: "Saves time & effort",
    description: "Less preparation, more time to enjoy.",
    icon: "◴",
  },
  {
    title: "Homemade-style taste",
    description: "The familiar flavours you love at home.",
    icon: "♨",
  },
  {
    title: "Convenient for everyone",
    description: "A handy choice for families, students, and busy days.",
    icon: "⌂",
  },
  {
    title: "A variety of favourites",
    description: "From breakfast classics to delicious snacks.",
    icon: "✳",
  },
];

const whatsappLink =
  "https://wa.me/918077069535?text=Hi%20SmartBlend%2C%20I%27d%20like%20to%20know%20more%20about%20your%20premixes.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf4] text-[#183d2b]">
      <div className="bg-[#124a2b] px-4 py-2.5 text-center text-sm font-medium text-white">
        Smart mix, smart choice, SmartBlend
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="shrink-0" aria-label="SmartBlend home">
          <Image
            src="/smartblend_logo.png"
            alt="SmartBlend"
            width={2000}
            height={800}
            priority
            className="h-auto w-32 sm:w-40"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-sm font-medium text-[#42634d] md:flex"
        >
          <a className="transition-colors hover:text-[#124a2b]" href="#products">Our premixes</a>
          <a className="transition-colors hover:text-[#124a2b]" href="#why-smartblend">Why SmartBlend</a>
          <a className="transition-colors hover:text-[#124a2b]" href="#contact">Contact</a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#187544] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#105d35]"
        >
          Order on WhatsApp
        </a>
      </header>

      <section className="relative overflow-hidden bg-[#f5f2d9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8b6518]">
              Ready-to-cook Indian premixes
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#153d28] sm:text-6xl">
              Your favourite flavours,
              <span className="mt-2 block text-[#d37a16]">made easy at home.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#50664e] sm:text-lg">
              Bring much-loved Indian dishes to your kitchen with convenient
              SmartBlend premixes—simple to prepare and full of homemade-style taste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-full bg-[#176238] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#104b2a]"
              >
                Explore our premixes <span aria-hidden="true">↓</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#176238]/30 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#176238] transition-colors hover:bg-white"
              >
                Chat with us
              </a>
            </div>
            <p className="mt-8 font-serif text-xl italic text-[#8d4c24] sm:text-2xl">
              Swad Bhi, Sehat Bhi, SmartBlend Ka Saath
            </p>
          </div>

          <div className="relative flex min-h-72 items-center justify-center sm:min-h-96">
            <div className="absolute h-64 w-64 rounded-full bg-[#e8dfaa] sm:h-80 sm:w-80" />
            <div className="relative flex max-w-sm flex-col items-center rounded-[2rem] border border-white/80 bg-white/85 p-7 text-center shadow-xl shadow-[#61723a]/10 sm:p-9">
              <Image
                src="/smartblend_logo.png"
                alt="SmartBlend Premix"
                width={2000}
                height={800}
                className="h-auto w-64"
              />
              <p className="mt-5 text-sm font-semibold text-[#42634d]">
                Smart Mix, Smart Choice, SmartBlend
              </p>
              <span className="mt-5 rounded-full bg-[#edf3df] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#176238]">
                Made for everyday cooking
              </span>
            </div>
            <span className="absolute left-3 top-8 text-4xl text-[#6a9a34]" aria-hidden="true">✿</span>
            <span className="absolute bottom-8 right-3 text-4xl text-[#e2a727]" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section id="why-smartblend" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6518]">Why choose SmartBlend?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Less fuss, more time around the table
          </h2>
          <p className="mt-4 leading-7 text-[#60705c]">
            Convenient mixes for familiar Indian favourites, with simple preparation for busy everyday kitchens.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-[#e7e5cf] bg-white p-5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3df] text-2xl text-[#176238]"
                aria-hidden="true"
              >
                {benefit.icon}
              </span>
              <h3 className="mt-4 font-bold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687463]">{benefit.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-[#e9f1dd] px-4 py-2 text-sm font-semibold text-[#27653b]">100% Veg</span>
          <span className="rounded-full bg-[#e9f1dd] px-4 py-2 text-sm font-semibold text-[#27653b]">No Preservatives</span>
        </div>
      </section>

      <section id="products" className="border-y border-[#e8e4cc] bg-[#f8f6e9]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6518]">Explore the range</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A favourite for every craving</h2>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#176238] underline decoration-[#91ae72] underline-offset-4"
            >
              Ask us about the range <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-2xl border border-[#e6e2cb] bg-white"
              >
                <div className={`flex aspect-[4/3] items-center justify-center ${index % 2 === 0 ? "bg-[#edf2dc]" : "bg-[#f7eed3]"}`}>
                  <span className="text-6xl sm:text-7xl" role="img" aria-label={product.name}>
                    {product.emoji}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#78806d]">{product.hindi}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#176238] px-5 py-14 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8e7b0]">Bring home a little more flavour</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to try SmartBlend?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            Message us on WhatsApp to ask about our premixes and how to order.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#176238] transition-colors hover:bg-[#f5f2d9]"
          >
            WhatsApp us: 8077069535
          </a>
        </div>
      </section>

      <footer id="contact" className="bg-[#123c27] px-5 py-9 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <a href="#" className="rounded bg-white p-1" aria-label="SmartBlend home">
            <Image
              src="/smartblend_logo.png"
              alt="SmartBlend"
              width={2000}
              height={800}
              className="h-auto w-36"
            />
          </a>
          <div>
            <h2 className="font-bold">Get in touch</h2>
            <p className="mt-2 text-sm text-white/75">WhatsApp: 8077069535</p>
            <p className="mt-1 text-sm text-white/75">Balkeshwar, Agra</p>
          </div>
          <div className="text-sm text-white/75">
            <p className="font-semibold text-white">FSSAI Lic. No. 22726576000114</p>
            <p className="mt-2">Smart mix, smart choice, SmartBlend.</p>
            <p className="mt-4 text-xs text-white/55">© 2026 SmartBlend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
