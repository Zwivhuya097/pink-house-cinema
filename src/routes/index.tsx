import { createFileRoute } from "@tanstack/react-router";
import heroVid from "@/assets/lanterns.mp4.asset.json";
import heroPoster from "@/assets/lanterns-poster.jpg.asset.json";
import skylight from "@/assets/skylight.mp4.asset.json";
import skylightPoster from "@/assets/skylight-poster.jpg.asset.json";
import candle from "@/assets/candle.mp4.asset.json";
import candlePoster from "@/assets/candle-poster.jpg.asset.json";
import order from "@/assets/order.mp4.asset.json";
import orderPoster from "@/assets/order-poster.jpg.asset.json";
import terrace from "@/assets/terrace.jpg.asset.json";
import food from "@/assets/food.jpg.asset.json";
import solo from "@/assets/solo.jpg.asset.json";
import lights from "@/assets/lights.jpg.asset.json";
import sign from "@/assets/sign.jpg.asset.json";
import grill from "@/assets/grill.jpg.asset.json";
import plants from "@/assets/plants.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pink House Biaba — Dinner Under the Skylight" },
      { name: "description", content: "Pink House Biaba: an aesthetic garden restaurant for good food, golden lantern-lit dinners and solo dates. Reserve your table." },
      { property: "og:title", content: "Pink House Biaba — Dinner Under the Skylight" },
      { property: "og:description", content: "Aesthetic garden dining, lantern-lit evenings and good food. Reserve your table." },
    ],
  }),
  component: Index,
});

const PHONE = "072 488 4308";
const TEL = "tel:0724884308";

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="font-display text-xl tracking-[0.35em] uppercase">Pink House</a>
        <nav className="hidden gap-10 text-xs uppercase tracking-[0.3em] text-foreground/80 md:flex">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
        </nav>
        <a href={TEL} className="border border-primary/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Reserve</a>
      </header>

      {/* HERO */}
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden grain">
        <video
          className="absolute inset-0 h-full w-full object-cover scale-105"
          src={heroVid.url}
          poster={heroPoster.url}
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-cinema" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-x-0 top-0 h-16 bg-background md:h-10" style={{ opacity: 0 }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="animate-rise font-script text-4xl text-primary md:text-6xl">welcome to</p>
          <h1 className="animate-rise font-display text-7xl font-light leading-[0.9] tracking-tight md:text-[11rem]" style={{ animationDelay: ".2s" }}>
            Pink <em className="text-gradient-pink not-italic font-medium italic">House</em>
          </h1>
          <p className="animate-rise mt-6 max-w-md text-sm uppercase tracking-[0.4em] text-foreground/80" style={{ animationDelay: ".5s" }}>
            Dinner under the skylight · Biaba
          </p>
          <div className="animate-rise mt-12 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: ".8s" }}>
            <a href={TEL} className="bg-primary px-10 py-4 text-xs uppercase tracking-[0.35em] text-primary-foreground transition-transform hover:scale-[1.03]">Reserve a table</a>
            <a href="#menu" className="border border-foreground/40 px-10 py-4 text-xs uppercase tracking-[0.35em] backdrop-blur-sm hover:border-primary hover:text-primary transition-colors">See the menu</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-foreground/60">Scroll</div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 font-display text-3xl italic text-primary/80">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Aesthetic", "Good food", "Solo dates", "Golden lanterns", "Garden terrace", "Easter @ Pink House"].map((w) => (
              <span key={k + w} className="flex items-center gap-16">{w}<span className="text-accent text-lg">✦</span></span>
            )),
          )}
        </div>
      </div>

      {/* STORY */}
      <section id="story" className="grid gap-16 px-6 py-28 md:grid-cols-2 md:px-16 md:py-40 items-center">
        <div>
          <p className="font-script text-4xl text-primary">our story</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight md:text-7xl">A garden of light, wood & <em className="text-gradient-pink">blush</em>.</h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Rattan lanterns sway over reclaimed-wood walls, trailing greenery spills from the rafters, and the pink brick glows at golden hour.
            Pink House is where you come for the plate, stay for the mood, and leave with a camera roll full of memories.
          </p>
        </div>
        <div className="relative grid grid-cols-2 gap-4">
          <img src={terrace.url} alt="Pink House terrace with rattan lanterns" className="aspect-[3/4] w-full object-cover" />
          <img src={sign.url} alt="Pink House sign on wooden wall" className="mt-16 aspect-[3/4] w-full object-cover" />
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-card px-6 py-28 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-primary">from the kitchen</p>
            <h2 className="mt-2 font-display text-5xl font-light md:text-7xl">Plates worth the trip</h2>
          </div>
          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {[
              { img: grill.url, name: "Eggstra Mixed Grill", price: "R60", note: "Stacked, saucy and served with a cold Coke (R25)." },
              { img: food.url, name: "Grilled Chicken & Salad", price: "Ask us", note: "Crisp greens, flame-kissed chicken and a mango sundowner." },
              { img: solo.url, name: "Signature Cocktails", price: "Ask us", note: "Made for solo dates, girls' nights and golden-hour toasts." },
            ].map((d) => (
              <article key={d.name} className="group">
                <div className="overflow-hidden">
                  <img src={d.img} alt={d.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span className="text-accent tracking-widest">{d.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{d.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NIGHTS — video reel */}
      <section className="px-6 py-28 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-4xl text-primary">after dark</p>
          <h2 className="mt-2 font-display text-5xl font-light md:text-7xl">When the lanterns glow</h2>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[[skylight, skylightPoster], [candle, candlePoster], [order, orderPoster]].map(([v, p], i) => (
              <div key={i} className="relative overflow-hidden grain vignette">
                <video src={v.url} poster={p.url} autoPlay muted loop playsInline className="aspect-[9/16] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="grid grid-cols-2 md:grid-cols-4">
        {[lights, plants, terrace, solo].map((g, i) => (
          <img key={i} src={g.url} alt="Pink House atmosphere" className="aspect-square w-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        ))}
      </section>

      {/* RESERVE */}
      <section className="relative overflow-hidden px-6 py-36 text-center grain">
        <img src={terrace.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-cinema" />
        <div className="relative">
          <p className="font-script text-5xl text-primary">your table awaits</p>
          <h2 className="mt-4 font-display text-6xl font-light md:text-8xl">Reserve at <em className="text-gradient-pink">Pink House</em></h2>
          <a href={TEL} className="mt-12 inline-block bg-primary px-12 py-5 text-xs uppercase tracking-[0.4em] text-primary-foreground hover:scale-[1.03] transition-transform">Call {PHONE}</a>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-16">
        <span className="font-display text-base tracking-[0.35em] text-foreground">Pink House · Biaba</span>
        <a href="https://www.tiktok.com/@pinkhousebiaba" className="hover:text-primary">@pinkhousebiaba</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
