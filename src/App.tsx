import { useState, type ReactNode } from "react"

const worshipPhoto =
  "https://images.unsplash.com/photo-1767897672315-1e551e4eabfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFsbCUyMGNvdW50cnklMjBjaHVyY2glMjBydXJhbCUyMGNvbW11bml0eSUyMGV4dGVyaW9yfGVufDF8fHx8MTc5MTUyNjUxNXww&ixlib=rb-4.1.0&q=85&w=1800"
const communityPhoto =
  "https://images.unsplash.com/photo-1625283518288-00362afc8663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY29tbXVuaXR5JTIwcGljbmljJTIwZGl2ZXJzZSUyMHBlb3BsZSUyMGxhdWdoaW5nJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzkxNTI2MzQ5fDA&ixlib=rb-4.1.0&q=85&w=1200"
const messagePhoto =
  "https://images.unsplash.com/photo-1682263557065-192c50c79d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzbWFsbCUyMGNodXJjaCUyMGNvbmdyZWdhdGlvbiUyMHN1bmRheSUyMG1vcm5pbmclMjB3b29kZW4lMjBwZXdzfGVufDF8fHx8MTc5MTUyNjUyN3ww&ixlib=rb-4.1.0&q=85&w=1200"

function Icon({
  children,
  size = 20,
  className = "",
}: {
  children: ReactNode
  size?: number
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  )
}

function ArrowIcon() {
  return (
    <Icon size={18}>
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </Icon>
  )
}

function LeafMark({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`leaf-mark ${light ? "leaf-mark-light" : ""}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <i />
    </div>
  )
}

const ministries = [
  {
    title: "Sunday School",
    text: "Simple, caring Bible lessons for children during our Sunday gathering.",
    number: "01",
  },
  {
    title: "The Community Table",
    text: "A shared meal after church where there is always room for one more.",
    number: "02",
  },
  {
    title: "Care & Prayer",
    text: "Neighbors showing up with prayer, a warm meal, or a helping hand.",
    number: "03",
  },
]

const events = [
  {
    month: "JUN",
    day: "15",
    title: "Fellowship Potluck",
    meta: "Sunday · After worship · Fellowship Hall",
  },
  {
    month: "JUN",
    day: "18",
    title: "Wednesday Prayer",
    meta: "Wednesday · 6:30 PM · Church sanctuary",
  },
  {
    month: "JUN",
    day: "28",
    title: "Community Serve Day",
    meta: "Saturday · 9:00 AM · Meet at the church",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <nav
          className="site-container flex h-24 items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            className="flex items-center gap-3"
            href="#top"
            aria-label="Grace Community Church home"
          >
            <LeafMark light />
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Dawson Free Will Baptist Church
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#ministries">
              Ministries
            </a>
            <a className="nav-link" href="#messages">
              Messages
            </a>
            <a className="nav-link" href="#events">
              Events
            </a>
            <a className="nav-link" href="#give">
              Give
            </a>
          </div>

          <a
            className="button button-light hidden md:inline-flex"
            href="#visit"
          >
            Plan a visit <ArrowIcon />
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="menu-button lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className={menuOpen ? "translate-y-1.5 rotate-45" : ""} />
            <span className={menuOpen ? "opacity-0" : ""} />
            <span className={menuOpen ? "-translate-y-1.5 -rotate-45" : ""} />
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-4 border border-white/15 bg-evergreen p-6 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-5 font-semibold">
              {["About", "Ministries", "Messages", "Events", "Give"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                className="button button-gold mt-2 justify-center"
                href="#visit"
                onClick={() => setMenuOpen(false)}
              >
                Plan a visit <ArrowIcon />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          className="hero relative flex min-h-[780px] items-end overflow-hidden text-white"
          id="top"
        >
          <img
            alt="A small white church with a steeple in the countryside"
            className="absolute inset-0 h-full w-full object-cover"
            src={worshipPhoto}
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="site-container relative z-10 grid w-full gap-12 pb-28 pt-40 lg:grid-cols-[1fr_340px] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow text-sand">
                A little church with a big heart
              </p>
              <h1 className="display-title mt-5 max-w-4xl">
                Faith, family &<br />a place to call home.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
                We&apos;re a small church of friends and neighbors learning to
                follow Jesus, care for one another, and love our community well.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button button-gold" href="#visit">
                  Join us Sunday <ArrowIcon />
                </a>
                <a className="button button-ghost" href="#messages">
                  <Icon size={17}>
                    <path d="m9 7 7 5-7 5V7Z" fill="currentColor" />
                  </Icon>
                  Hear a sermon
                </a>
              </div>
            </div>

            <div className="service-card border-l-2 border-gold pl-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">
                This Sunday
              </p>
              <p className="mt-3 font-serif text-3xl">10:30 AM</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Sunday school at 9:30 AM
                <br />
                Coffee is always on
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sand"
                href="#visit"
              >
                What to expect <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 lg:py-32" id="about">
          <div className="site-container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              <div className="image-frame">
                <img
                  alt="Friends sharing a joyful afternoon together"
                  className="h-[560px] w-full object-cover"
                  src={communityPhoto}
                />
              </div>
              <div className="absolute -bottom-7 -right-5 bg-gold px-7 py-6 text-evergreen shadow-xl md:-right-10">
                <p className="font-serif text-4xl">You belong</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest">
                  before you believe
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow text-fern">There&apos;s a seat for you</p>
              <h2 className="section-title mt-4">
                Church was never meant to be done alone.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                We&apos;re grandparents and young families, farmers, teachers,
                tradespeople, and friends. We sing familiar songs, open the
                Bible together, and stay awhile after the service to catch up.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-muted">
                Whether you&apos;ve lived here all your life or just found your
                way to town, we&apos;d be glad to make room for you.
              </p>
              <a className="text-link mt-8" href="#visit">
                Get to know us <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          className="bg-evergreen py-24 text-white lg:py-28"
          id="ministries"
        >
          <div className="site-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-sand">Life together</p>
                <h2 className="section-title mt-4 max-w-2xl">
                  More than a Sunday service.
                </h2>
              </div>
              <a className="text-link text-sand" href="#ministries">
                See how to get involved <ArrowIcon />
              </a>
            </div>
            <div className="mt-14 grid border-t border-white/15 md:grid-cols-3">
              {ministries.map((ministry) => (
                <article className="ministry-card group" key={ministry.title}>
                  <span className="text-xs font-bold tracking-widest text-sand/70">
                    {ministry.number}
                  </span>
                  <div className="mt-20 md:mt-28">
                    <h3 className="font-serif text-3xl">{ministry.title}</h3>
                    <p className="mt-4 max-w-xs leading-7 text-white/65">
                      {ministry.text}
                    </p>
                    <a
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sand"
                      href="#visit"
                    >
                      Learn more <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32" id="messages">
          <div className="site-container">
            <div className="grid overflow-hidden bg-white shadow-[0_24px_70px_rgba(27,44,36,0.10)] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[420px] overflow-hidden">
                <img
                  alt="A small congregation gathered in church pews"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  src={messagePhoto}
                />
                <div className="absolute inset-0 bg-ink/25" />
                <a
                  aria-label="Play latest message"
                  className="play-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  href="#messages"
                >
                  <Icon size={26}>
                    <path d="m9 7 7 5-7 5V7Z" fill="currentColor" />
                  </Icon>
                </a>
              </div>
              <div className="flex flex-col justify-center p-9 sm:p-14 lg:p-16">
                <p className="eyebrow text-fern">Sunday&apos;s sermon</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Faithful in the everyday
                </h2>
                <p className="mt-5 text-sm font-bold uppercase tracking-widest text-muted">
                  Pastor Bill · June 8
                </p>
                <p className="mt-6 leading-7 text-muted">
                  Finding God&apos;s goodness in ordinary work, familiar places,
                  and the people right in front of us.
                </p>
                <a
                  className="button button-dark mt-8 self-start"
                  href="#messages"
                >
                  Watch message <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-24" id="events">
          <div className="site-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-fern">What&apos;s happening</p>
              <h2 className="section-title mt-4">
                There&apos;s always something to look forward to.
              </h2>
              <a className="text-link mt-8" href="#events">
                View all events <ArrowIcon />
              </a>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {events.map((event) => (
                <a className="event-row group" href="#events" key={event.title}>
                  <div className="w-14 text-center">
                    <p className="text-[11px] font-bold tracking-widest text-fern">
                      {event.month}
                    </p>
                    <p className="font-serif text-3xl">{event.day}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl transition group-hover:text-fern">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{event.meta}</p>
                  </div>
                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-line transition group-hover:border-evergreen group-hover:bg-evergreen group-hover:text-white sm:flex">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-gold py-24 text-evergreen"
          id="visit"
        >
          <div className="decorative-ring absolute -right-40 -top-52 h-[520px] w-[520px] rounded-full border border-evergreen/20" />
          <div className="site-container relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Come as you are</p>
              <h2 className="section-title mt-4 max-w-3xl">
                There&apos;s room for you here.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-evergreen/75">
                No need to dress up or know what to expect. Come through the
                front door and someone will be glad to show you around.
              </p>
            </div>
            <a
              className="button button-dark shrink-0"
              href="mailto:hello@gracecommunity.church"
            >
              Plan your visit <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-10 pt-20 text-white" id="give">
        <div className="site-container">
          <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
            <div>
              <a className="flex items-center gap-3" href="#top">
                <LeafMark light />
                <span className="text-xl font-bold">
                  Dawson Free Will Baptist Church
                </span>
              </a>
              <p className="mt-6 max-w-xs leading-7 text-white/55">
                Loving God, caring for one another, and serving our neighbors.
                At Dawson Free Will Baptist Church, we are a close-knit
                community of imperfect individuals striving to serve a perfect
                God. Everyone is welcome and you won't be lost in the croud.
                Join us on this journey of growth!
              </p>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <div className="footer-links">
                <a href="#about">About</a>
                <a href="#ministries">Ministries</a>
                <a href="#messages">Messages</a>
                <a href="#events">Events</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Connect</p>
              <div className="footer-links">
                <a href="#visit">Plan a visit</a>
                <a href="mailto:place@holder.com">Contact</a>
                <a href="#give">Give</a>
                <a href="#ministries">Serve</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Sundays</p>
              <p className="mt-5 leading-7 text-white/55">
                Sunday school · 9:30 AM
                <br />
                Worship · 10:30 AM
                <br />
                Main Street, our hometown
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/40 sm:flex-row">
            <p>© 2026 Dawson Free Will Baptist Church.</p>
            <p>Small church. Open doors. Everyone welcome.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
