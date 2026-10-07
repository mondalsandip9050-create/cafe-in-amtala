import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Menu as MenuIcon, X, MapPin, Phone, MessageCircle, Clock, Coffee, Zap, Sandwich, Sparkles,
  Utensils, ShoppingBag, Bike, Timer, CupSoda, Cookie, Car, Star, ChevronDown, ImageIcon,
  Instagram, Facebook, ChevronLeft, ChevronRight,
} from "lucide-react";
import logo from "@/assets/logo-new.png.asset.json";
import cups from "@/assets/cups.jpg.asset.json";
import coffee from "@/assets/coffee.jpg.asset.json";
import espresso from "@/assets/espresso.jpg.asset.json";
import cold from "@/assets/cold.jpg.asset.json";
import focaccia from "@/assets/focaccia.jpg.asset.json";
import { cafe, menu, reviews } from "@/lib/cafe";

const TITLE = "Wildbean Café | Amtala — Coffee, Food & Quick Bites";
const DESC =
  "Visit Wildbean Café | Amtala for freshly brewed coffee, teas, smoothies and quick bites. Find us in Amtala, West Bengal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: cafe.name,
          telephone: "+916291434742",
          address: { "@type": "PostalAddress", streetAddress: cafe.address2, addressLocality: "Amtala", addressRegion: "West Bengal", postalCode: "743503", addressCountry: "IN" },
          openingHours: "Mo-Su 06:00-22:00",
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Menu", "Experience", "Gallery", "Reviews", "Location", "Contact"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const btnGold = "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-card";
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary hover:text-primary";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{children}</p>;
}

function Index() {
  useReveal();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Why />
        <MenuSection />
        <Services />
        <Experience />
        <Gallery />
        <Reviews />
        <Location />
        <Reserve />
      </main>
      <Footer />
      <a href={cafe.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp us"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-card transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="Wildbean Café logo" className="h-11 w-auto rounded-md" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-foreground/75 transition hover:text-primary">{n}</a>
          ))}
        </nav>
        <a href="#reserve" className={`${btnGold} hidden !py-2.5 lg:inline-flex`}>Reserve a Table</a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-2xl">{n}</a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className={`${btnGold} mt-6 w-full`}>Reserve a Table</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 md:items-center md:pb-0">
      <img src={coffee.url} alt="Frothy filter coffee in a brass davara with coffee beans" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-primary">Wildbean Café | Amtala</p>
          <h1 className="animate-fade-up mt-5 text-5xl font-light leading-[1.02] [animation-delay:150ms] sm:text-7xl lg:text-8xl">
            Good Coffee.<br /><span className="italic text-gold">Great Moments.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-lg text-lg text-foreground/80 [animation-delay:300ms]">
            Freshly brewed coffee, quick bites, and a premium café experience in Amtala.
          </p>
          <p className="animate-fade-up mt-4 flex items-center gap-2 text-xs tracking-[0.25em] text-muted-foreground [animation-delay:400ms]">
            <MapPin className="h-3.5 w-3.5 text-primary" /> AMTALA, WEST BENGAL
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:500ms] sm:flex-row">
            <a href="#menu" className={btnGold}>Explore Menu</a>
            <a href={cafe.mapsLink} target="_blank" rel="noreferrer" className={btnGhost}>Get Directions</a>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-foreground/50 md:block">
        <ChevronDown />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32 lg:px-8">
      <div className="reveal overflow-hidden rounded-3xl shadow-card">
        <img src={espresso.url} alt="Espresso in a glass cup with coffee beans" className="aspect-[4/5] w-full object-cover" loading="lazy" />
      </div>
      <div className="reveal">
        <Eyebrow>About us</Eyebrow>
        <h2 className="text-4xl font-light leading-tight sm:text-6xl">Your Perfect <span className="italic text-gold">Coffee Stop.</span></h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          Wild Bean Café is Jio-bp's quick-service coffee and food destination, offering freshly brewed coffee, teas, smoothies, and quick bites for travellers on the move.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Enjoy great coffee and snacks in one place while you take a break from the journey.
        </p>
        <p className="mt-8 font-display text-xl text-primary">{cafe.nameBn}</p>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: Coffee, t: "Freshly Brewed", d: "Enjoy freshly prepared coffee and beverages." },
    { icon: Zap, t: "Quick & Convenient", d: "Perfect for quick breaks, commutes and journeys." },
    { icon: Sandwich, t: "Coffee + Quick Bites", d: "Great beverages paired with convenient food options." },
    { icon: Sparkles, t: "Premium Experience", d: "A comfortable and modern café experience at Amtala." },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="reveal mb-14"><Eyebrow>Why Wildbean Café</Eyebrow>
          <h2 className="text-4xl font-light sm:text-5xl">Made for every stop.</h2></div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.t} className="reveal group bg-background p-8 transition hover:bg-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between">
                <it.icon className="h-7 w-7 text-primary" strokeWidth={1.3} />
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-10 text-2xl">{it.t}</h3>
              <p className="mt-3 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const cats = Object.keys(menu);
  const [cat, setCat] = useState<string>(cats[0]!);
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
      <div className="reveal mx-auto max-w-2xl text-center">
        <Eyebrow>Signature menu</Eyebrow>
        <h2 className="text-4xl font-light sm:text-6xl">Explore Our <span className="italic text-gold">Menu</span></h2>
        <p className="mt-5 text-muted-foreground">From classic coffee to indulgent favourites, discover something for every mood.</p>
      </div>
      <div className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:justify-center" role="tablist">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${cat === c ? "border-transparent bg-gold text-primary-foreground" : "border-border text-foreground/75 hover:border-primary hover:text-primary"}`}>
            {c}
          </button>
        ))}
      </div>
      <div key={cat} className="mt-10 grid gap-4 md:grid-cols-2">
        {(menu[cat] ?? []).map((m, i) => (
          <article key={m.name} className="animate-fade-up group flex items-start justify-between gap-5 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="min-w-0">
              <h3 className="flex items-center gap-2.5 font-sans text-lg font-semibold">
                <span className="h-2 w-2 shrink-0 rounded-sm bg-accent" />{m.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-display text-xl text-primary">{m.price}</p>
              {m.size && <p className="mt-1 text-xs text-muted-foreground">{m.size}</p>}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">Prices shown as Regular / Large where applicable.</p>
      <div className="mt-8 text-center">
        <a href={cafe.phoneHref} className={btnGhost}>View Full Menu — Ask In Store</a>
      </div>
    </section>
  );
}

function Services() {
  const s = [
    { icon: Utensils, t: "Dine-in" }, { icon: ShoppingBag, t: "Takeaway" }, { icon: Bike, t: "Home Delivery" },
    { icon: Timer, t: "Quick Service" }, { icon: CupSoda, t: "Coffee & Beverages" }, { icon: Cookie, t: "Quick Bites" }, { icon: Car, t: "Travel Stop" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="reveal mb-10"><Eyebrow>Services</Eyebrow><h2 className="text-3xl font-light sm:text-4xl">However you like it.</h2></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {s.map((x) => (
            <div key={x.t} className="reveal flex flex-col items-start gap-6 rounded-2xl border border-border p-5 transition hover:border-primary/40">
              <x.icon className="h-6 w-6 text-primary" strokeWidth={1.3} />
              <span className="text-sm font-medium">{x.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 md:py-44">
      <img src={espresso.url} alt="Espresso in a glass cup" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <div className="reveal relative mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>The experience</Eyebrow>
        <h2 className="text-4xl font-light leading-tight sm:text-6xl">More Than Just a <span className="italic text-gold">Coffee Break.</span></h2>
        <p className="mt-7 text-lg leading-relaxed text-foreground/80">
          Whether you're starting your day, taking a break from the road, or meeting someone over coffee, Wildbean Café | Amtala is designed to make every stop a little better.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: coffee.url, alt: "Filter coffee in brass davara", cls: "md:col-span-2 md:row-span-2" },
    { src: cups.url, alt: "Wildbean Café branded cups", cls: "md:row-span-2" },
    { src: logo.url, alt: "Wildbean Café logo", cls: "" },
    { src: espresso.url, alt: "Espresso in a glass cup with coffee beans", cls: "" },
    { src: cold.url, alt: "Wildbean Café Creamy Choco Cold Coffee", cls: "" },
    { src: focaccia.url, alt: "Focaccia sandwich on a wooden board", cls: "md:col-span-2" },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
      <div className="reveal mb-12"><Eyebrow>Gallery</Eyebrow><h2 className="text-4xl font-light sm:text-5xl">A look inside.</h2></div>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {imgs.map((im, i) => im.src ? (
          <button key={i} onClick={() => setOpen(im.src)} className={`reveal group relative overflow-hidden rounded-2xl bg-card ${im.cls} ${i === 0 ? "col-span-2" : ""}`}>
            <img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ) : (
          <div key={i} className={`reveal flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-card/50 text-center text-xs text-muted-foreground ${im.cls}`}>
            <ImageIcon className="h-6 w-6" strokeWidth={1.2} />{im.alt}
          </div>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-5 backdrop-blur" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5" aria-label="Close"><X /></button>
          <img src={open} alt="Gallery image enlarged" className="max-h-[85vh] max-w-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i]!;
  return (
    <section id="reviews" className="border-y border-border bg-card/40">
      <div className="reveal mx-auto max-w-3xl px-5 py-24 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h2 className="text-4xl font-light sm:text-5xl">What Our Customers Say</h2>
        <figure key={i} className="animate-fade-up mt-12 rounded-3xl border border-dashed border-border bg-background p-8 sm:p-12">
          <div className="flex justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
          <blockquote className="mt-6 font-display text-2xl font-light italic text-foreground/80">“{r.text}”</blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">— {r.name}</figcaption>
          <p className="mt-4 text-xs text-muted-foreground/70">Placeholder — genuine review to be added</p>
        </figure>
        <div className="mt-6 flex justify-center gap-3">
          <button aria-label="Previous review" onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary"><ChevronLeft className="h-4 w-4" /></button>
          <button aria-label="Next review" onClick={() => setI((i + 1) % reviews.length)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
      <div className="reveal mb-12"><Eyebrow>Location</Eyebrow><h2 className="text-4xl font-light sm:text-5xl">Find Us in <span className="italic text-gold">Amtala</span></h2></div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal min-h-[320px] overflow-hidden rounded-3xl border border-border">
          <iframe title="Wildbean Café Amtala map" src={cafe.mapsEmbed} className="h-full min-h-[320px] w-full grayscale invert-[0.9] hue-rotate-180" loading="lazy" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="reveal rounded-3xl border border-border bg-card p-7">
            <h3 className="font-sans text-lg font-semibold">{cafe.name}</h3>
            <p className="mt-3 flex gap-3 text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{cafe.address1}<br />{cafe.address2}</span></p>
            <a href={cafe.mapsLink} target="_blank" rel="noreferrer" className={`${btnGold} mt-6 w-full`}>Get Directions</a>
          </div>
          <div id="hours" className="reveal rounded-3xl border border-border bg-card p-7">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-sans text-lg font-semibold"><Clock className="h-4 w-4 text-primary" />Opening Hours</h3>
              <span className="flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />Open Daily</span>
            </div>
            <ul className="mt-5 divide-y divide-border text-sm">
              {cafe.hours.map((h) => (
                <li key={h.day} className="flex justify-between py-2.5"><span className="text-muted-foreground">{h.day}</span><span>{h.time}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reserve() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Table reservation request%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0ADate: ${f.get("date")}%0ATime: ${f.get("time")}%0AGuests: ${f.get("guests")}%0ARequest: ${f.get("note") || "-"}`;
    window.open(`https://wa.me/916291434742?text=${msg}`, "_blank");
    setSent(true);
  };
  const input = "w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  return (
    <section id="reserve" className="relative overflow-hidden border-t border-border">
      <div id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:py-32 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <Eyebrow>Reserve & Contact</Eyebrow>
          <h2 className="text-4xl font-light leading-tight sm:text-6xl">Make Your Next Stop <span className="italic text-gold">Delicious.</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Coffee, conversations and quick bites are waiting for you.</p>
          <div className="mt-10 space-y-4">
            <a href={cafe.phoneHref} className="flex items-center gap-4 text-lg hover:text-primary"><Phone className="h-5 w-5 text-primary" />{cafe.phone}</a>
            <a href={cafe.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg hover:text-primary"><MessageCircle className="h-5 w-5 text-accent" />WhatsApp {cafe.phone}</a>
            <p className="flex items-center gap-4 text-lg"><MapPin className="h-5 w-5 text-primary" />Amtala, West Bengal</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={cafe.phoneHref} className={btnGold}>Call Now</a>
            <a href={cafe.whatsapp} target="_blank" rel="noreferrer" className={btnGhost}>WhatsApp Us</a>
            <a href={cafe.mapsLink} target="_blank" rel="noreferrer" className={btnGhost}>Get Directions</a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="reveal grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:grid-cols-2 sm:p-9">
          <h3 className="text-2xl sm:col-span-2">Reserve a Table</h3>
          <input name="name" required placeholder="Name" className={`${input} sm:col-span-2`} />
          <input name="phone" required type="tel" placeholder="Phone Number" className={`${input} sm:col-span-2`} />
          <input name="date" required type="date" aria-label="Date" className={input} />
          <input name="time" required type="time" aria-label="Time" className={input} />
          <input name="guests" required type="number" min={1} max={30} placeholder="Number of Guests" className={`${input} sm:col-span-2`} />
          <textarea name="note" rows={3} placeholder="Special Request" className={`${input} sm:col-span-2`} />
          <button type="submit" className={`${btnGold} sm:col-span-2`}>Reserve a Table</button>
          {sent && <p className="text-sm text-accent sm:col-span-2">Opening WhatsApp to confirm your booking…</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Wildbean Café logo" className="h-14 w-auto rounded-md" />
          <p className="mt-5 font-display text-2xl">{cafe.name}</p>
          <p className="mt-2 text-muted-foreground">{cafe.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram (coming soon)" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook (coming soon)" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm text-muted-foreground" aria-label="Footer">
          {["Home", "About", "Menu", "Gallery", "Reviews", "Location", "Contact"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-primary">{n}</a>
          ))}
        </nav>
        <div className="space-y-2 text-sm text-muted-foreground">
          <a href={cafe.phoneHref} className="block hover:text-primary">Phone: {cafe.phone}</a>
          <a href={cafe.whatsapp} className="block hover:text-primary">WhatsApp: {cafe.phone}</a>
          <p>{cafe.address2}</p>
          <p>Open daily · 06:00 AM – 10:00 PM</p>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">© 2026 Wildbean Café | Amtala. All rights reserved.</p>
    </footer>
  );
}
