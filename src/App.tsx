import { useState, type ReactNode } from "react";
import childrenEggHunt from "./assets/children-egg-hunt.jpg";
import barbaraWebsterMemorial from "./assets/barbara-webster-memorial.png";
import churchPhoto from "./assets/dawson-church.png";
import churchLogo from "./assets/dawson-logo.png";
import churchFamilyCollage from "./assets/church-family-collage.png";
import communityTable from "./assets/community-table.jpeg";
import danielNorgrenMemorial from "./assets/daniel-norgren-memorial.jpg";
import eggHunt from "./assets/egg-hunt.jpg";
import fellowshipMeal from "./assets/fellowship-meal.jpg";
import haroldMcKaughanMemorial from "./assets/harold-mckaughan-memorial.jpg";
import letterToMrsKay from "./assets/letter-to-mrs-kay.jpg";
import pastorBill from "./assets/pastor-bill.jpg";
import sanctuaryWedding from "./assets/sanctuary-wedding.jpg";
import trunkOrTreatFlyer from "./assets/trunk-or-treat-flyer.jpg";

const kenyaPhoto =
  "https://images.unsplash.com/photo-1776039325185-8fd3d46af4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxLZW55YSUyMGFkdWx0JTIwZWR1Y2F0aW9uJTIwY29tbXVuaXR5JTIwY2xhc3Nyb29tJTIwbWVuJTIwbGVhcm5pbmclMjBOYWlyb2JpfGVufDF8fHx8MTc5MTY0MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=2044%20N%20Darlington%20Pl%2C%20Tulsa%2C%20OK%2074115";
const facebookUrl = "https://www.facebook.com/profile.php?id=61575957022220";

function Icon({
  children,
  size = 20,
  className = "",
}: {
  children: ReactNode;
  size?: number;
  className?: string;
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
  );
}

function ArrowIcon() {
  return (
    <Icon size={18}>
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  );
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
];

const events = [
  { title: "Fellowship Potluck", meta: "First Sunday of the month · After worship · Fellowship Hall" },
  { title: "Testimony Tuesday & Bible Study", meta: "Every Tuesday · 5:30 PM · Freeway Cafe`" },
  { title: "Wednesday Dinner & Bible Study", meta: "Every Wednesday · 6:00 PM · Church Fellowship Hall" }, 
  { title: "Friday Womens Bible Study", meta: "Every Friday · 6:00 PM · Church Fellowship Hall"},
  { month: "OCT", day: "30", title: "Trunk or Treat", meta: "Friday · 4:00–8:00 PM · Around back at the church" },
];

const aboutStories = [
  {
    image: fellowshipMeal,
    alt: "Dawson friends gathered around a table for a meal",
    kicker: "Familiar faces",
    title: "Around the table",
  },
  {
    image: childrenEggHunt,
    alt: "Children from Dawson walking together during an Easter egg hunt",
    kicker: "Growing together",
    title: "Our children",
  },
  {
    image: communityTable,
    alt: "Dawson church friends waving from a restaurant table",
    kicker: "Room for one more",
    title: "Shared meals",
  },
];

const leadership = [
  {
    number: "01",
    role: "Pastor",
    title: "Bill Phillips",
    text: "Preaching the Word, caring for our church family, and helping us follow Jesus in everyday life.",
  },
  {
    number: "02",
    role: "Associate pastor",
    title: "Dez Petterson",
    text: "Serving alongside our pastor, encouraging our congregation, and helping meet the needs of our church family.",
  },
  {
    number: "03",
    role: "Children's church",
    title: "Mrs. Kay Phillips",
    text: "Helping our children know they are loved while teaching them the Bible with warmth, patience, and joy. She is also the heart of the church, and prepares the meals for our bible studies and fellowship dinners",
  },
  {
    number: "4",
    role: "Church Treasurer",
    title: "Kat",
    text: "Serves as church accountant, offering a helping hand wherever needed, and singing."
  },

];

const memorials = [
  {
    image: haroldMcKaughanMemorial,
    alt: "Celebrating the life of Harold Eugene McKaughan",
    name: "Harold Eugene McKaughan",
    years: "August 5, 1938 — October 9, 2026",
    role: "Longtime board member",
    text: "A faithful servant whose steady presence and years of service helped guide Dawson and care for our church family.",
  },
  {
    image: danielNorgrenMemorial,
    alt: "Celebrating the life of Daniel Adrian Norgren",
    name: "Daniel Adrian Norgren",
    years: "August 17, 1972 — January 23, 2026",
    role: "Beloved deacon",
    text: "Remembered with love for his servant's heart, his kindness, and his devotion to the people of Dawson.",
  },
  {
    image: barbaraWebsterMemorial,
    alt: "In loving memory of Barbara Jean Webster",
    name: "Barbara Jean Webster",
    years: "March 15, 1945 — July 17, 2026",
    role: "Longtime pianist",
    text: "Her faithful music ministry helped shape our worship and filled our little church with beauty for many years.",
  },
];

const members = [
  {

    number: "1",
    role: "Church Bulletin",
    title: "Cheri Hieronymus",
    text: "Uses her Creative talents designing church Bulletin and various other creative projects for the church."
  },
  {
    number: "2",
    role: "Welcome committee and sound booth",
    title: "Gary Burks",
    text: " Always ready to welcome new faces, and get mics setup and ready for service. ",
   },
  {
    number: "3 & 4",
    role: "Church Aide's",
    title: "James & Misti", 
    text: "Misti is always smiling and ready to help with whatever the church asks of them assisting with church upkeep, meal preperation and assists Mrs. Kay. James offer his service any many areas helping members with car trouble, fixing things around the church, taking care of the lawn with wife Misti.",
  },

  {
    number: "5 & 6",
    role: "Outreach",
    title: "Dillan & Lindsey",
    text: "New to the church and already jumping in head first, they were put in charge of this years Trunk or Treat event.",
  },
  {
    number: "7 & 8",
    role: "Website & Welcome committee",
    title: "Kenny & Candy",
    text: "Candy is responsible for our website & Facbook page she is also on the welcome committee and Kenny is her loving support",
  }
  
]
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAboutCard, setActiveAboutCard] = useState(0);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <nav className="site-container flex h-24 items-center justify-between" aria-label="Main navigation">
          <a className="flex items-center gap-3" href="#top" aria-label="Dawson Free Will Baptist Church home">
            <img alt="" className="church-logo h-14 w-14 shrink-0 rounded-full object-cover" src={churchLogo} />
            <span className="text-sm font-bold tracking-tight sm:hidden">DAWSON FWB</span>
            <span className="hidden text-lg font-bold tracking-tight sm:inline">DAWSON FREE WILL BAPTIST CHURCH</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#leadership">Leadership</a>
            <a className="nav-link" href="members">Member Involvement</a>
            <a className="nav-link" href="#ministries">Ministries</a>
            <a className="nav-link" href="#kenya">Kenya</a>
            <a className="nav-link" href="#messages">Messages</a>
            <a className="nav-link" href="#events">Events</a>
          </div>

          <a className="button button-light hidden md:inline-flex" href="#visit">
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
              {[
                ["About", "about"],
                ["Leadership", "leadership"],
                ["Members","members"],
                ["Ministries", "ministries"],
                ["Kenya mission", "kenya"],
                ["Messages", "messages"],
                ["Events", "events"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <a className="button button-gold mt-2 justify-center" href="#visit" onClick={() => setMenuOpen(false)}>
                Plan a visit <ArrowIcon />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero relative flex min-h-[780px] items-end overflow-hidden text-white" id="top">
          <img
            alt="The front of Dawson Free Will Baptist Church in Tulsa"
            className="church-hero-photo absolute inset-0 h-full w-full object-cover"
            src={churchPhoto}
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="site-container relative z-10 grid w-full gap-12 pb-28 pt-40 lg:grid-cols-[1fr_340px] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow text-sand">A little church with a big heart</p>
              <h1 className="display-title mt-5 max-w-4xl">
                Faith, family &<br />
                a place to call home.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
                We are a group of imperfect individuals learning to serve our perfect God, help each other and love our community well.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button button-gold" href="#visit">Join us Sunday <ArrowIcon /></a>
                <a className="button button-ghost" href="#messages">
                  <Icon size={17}><path d="m9 7 7 5-7 5V7Z" fill="currentColor" /></Icon>
                  Hear a sermon
                </a>
              </div>
            </div>

            <div className="service-card border-l-2 border-gold pl-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">This Sunday</p>
              <p className="mt-3 font-serif text-3xl">10:45 AM</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Coffee, Donuts & Fellowship at 9:45 AM</p>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sand" href="#visit">
                What to expect <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-evergreen py-20 text-white lg:py-28" id="mrs-kay">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow text-sand">With heartfelt thanks</p>
              <h2 className="section-title mt-4">Mrs. Kay, the heart of our church.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
                Our church family wrote this letter to honor Mrs. Kay Phillips and the countless ways she quietly cares for Dawson week after week.
              </p>
              <blockquote className="kay-quote mt-8 border-l-2 border-gold pl-6 font-serif text-2xl leading-relaxed text-white/90">
                “Christ&apos;s love shines through you in everything you do. You make our little church feel like family and home to us all.”
              </blockquote>
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-sand">
                Your Dawson FWB Church family
              </p>
              <a className="button button-gold mt-9" href={letterToMrsKay} rel="noreferrer" target="_blank">
                Read the full letter <ArrowIcon />
              </a>
            </div>

            <a
              aria-label="Open the full letter to Mrs. Kay"
              className="letter-frame mx-auto block w-full max-w-xl"
              href={letterToMrsKay}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="A handwritten letter of gratitude from the Dawson church family to Mrs. Kay Phillips"
                className="w-full"
                src={letterToMrsKay}
              />
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 lg:py-32" id="about">
          <div className="site-container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="about-stack-wrap mx-auto w-full max-w-lg lg:mx-0">
              <div className="about-stack" aria-label="Stories from our church family">
                {aboutStories.map((story, index) => {
                  const position = (index - activeAboutCard + aboutStories.length) % aboutStories.length;

                  return (
                    <button
                      aria-label={`${story.title}. Show this story`}
                      aria-pressed={position === 0}
                      className={`about-card about-card-${position}`}
                      key={story.title}
                      onClick={() => setActiveAboutCard(index)}
                      type="button"
                    >
                      <img alt={story.alt} src={story.image} />
                      <span className="about-card-shade" />
                      <span className="about-card-copy">
                        <span>{story.kicker}</span>
                        <strong>{story.title}</strong>
                      </span>
                    </button>
                  );
                })}
                <button
                  className="about-stack-next"
                  onClick={() => setActiveAboutCard((current) => (current + 1) % aboutStories.length)}
                  type="button"
                >
                  Next story <ArrowIcon />
                </button>
              </div>
              <p className="about-stack-count" aria-live="polite">
                <span>0{activeAboutCard + 1}</span> / 0{aboutStories.length}
              </p>
            </div>
            <div>
              <p className="eyebrow text-fern">There&apos;s a seat for you</p>
              <h2 className="section-title mt-4">Church was never meant to be done alone.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                We&apos;re grandparents and young families, farmers, teachers, tradespeople, and friends. We sing familiar songs, open the Bible together, and stay awhile after the service to catch up.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-muted">
                Whether you&apos;ve lived here all your life or just found your way to town, we&apos;d be glad to make room for you.
              </p>
              <a className="text-link mt-8" href="#visit">Get to know us <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-24 lg:py-28" id="leadership">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-fern">Our leadership</p>
                <h2 className="section-title mt-4">Led by people who know your name.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
                Leadership here is personal. Our pastor and ministry leaders pray with us, sit across the table from us, and serve alongside us in the ordinary rhythms of church life.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {leadership.map((leader) => (
                <article className="leadership-card bg-white p-8 lg:p-10" key={leader.title}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-fern">{leader.number}</span>
                    <span className="leadership-mark" aria-hidden="true"><i /><i /><i /></span>
                  </div>
                  <p className="mt-16 text-xs font-bold uppercase tracking-[0.18em] text-fern">{leader.role}</p>
                  <h3 className="mt-3 font-serif text-3xl">{leader.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{leader.text}</p>
                </article>
              ))}
            </div>

            <a className="text-link mt-9" href="#visit">Come meet us Sunday <ArrowIcon /></a>
          </div>
        </section>
        
        <section className="border-y border-line bg-white py-24 lg:py-28" id="member">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-fern">Member Involvement</p>
                <h2 className="section-title mt-4">Our Members Get Involved.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
                Where ever there is a need our members step up volunteer or offer their skills and talents to fill it. This is not just a church it's a family.                
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {members.map((members) => (
                <article className="members-card bg-white p-8 lg:p-10" key={members.title}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-fern">{members.number}</span>
                    <span className="members-mark" aria-hidden="true"><i /><i /><i /></span>
                  </div>
                  <p className="mt-16 text-xs font-bold uppercase tracking-[0.18em] text-fern">{members.role}</p>
                  <h3 className="mt-3 font-serif text-3xl">{members.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{members.text}</p>
                </article>
              ))}
            </div>

            <a className="text-link mt-9" href="#serve">Learn more from our Members<ArrowIcon /></a>
          </div>
        </section>

        <section className="bg-cream py-24 lg:py-28" id="remembrance">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-fern">In loving memory</p>
              <h2 className="section-title mt-4">Faithful lives we will always remember.</h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                We give thanks for three cherished members of our Dawson family whose love, service, and faith left a lasting mark on our church.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {memorials.map((memorial) => (
                <article className="memorial-card overflow-hidden bg-white" key={memorial.name}>
                  <div className="memorial-image-wrap">
                    <img alt={memorial.alt} className="h-full w-full object-contain" src={memorial.image} />
                  </div>
                  <div className="border-t border-line p-7 lg:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-fern">{memorial.role}</p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight">{memorial.name}</h3>
                    <p className="mt-3 text-sm font-semibold text-muted">{memorial.years}</p>
                    <p className="mt-5 leading-7 text-muted">{memorial.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-evergreen">
              “Well done, good and faithful servant.”
            </p>
          </div>
        </section>

        <section className="bg-evergreen py-24 text-white lg:py-28" id="ministries">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
              <p className="eyebrow text-sand">Life together</p>
                <h2 className="section-title mt-4 max-w-2xl">More than a Sunday service.</h2>
              </div>
              <a className="text-link text-sand" href="#ministries">See how to get involved <ArrowIcon /></a>
            </div>
            <div className="mt-14 grid border-t border-white/15 md:grid-cols-3">
              {ministries.map((ministry) => (
                <article className="ministry-card group" key={ministry.title}>
                  <span className="text-xs font-bold tracking-widest text-sand/70">{ministry.number}</span>
                  <div className="mt-20 md:mt-28">
                    <h3 className="font-serif text-3xl">{ministry.title}</h3>
                    <p className="mt-4 max-w-xs leading-7 text-white/65">{ministry.text}</p>
                    <a className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sand" href="#visit">
                      Learn more <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 lg:py-32" id="kenya">
          <div className="kenya-pattern absolute inset-y-0 right-0 hidden w-1/3 lg:block" aria-hidden="true" />
          <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div className="kenya-photo-wrap">
              <img
                alt="Adults gathered for a learning session in Kenya"
                className="h-full min-h-[440px] w-full object-cover"
                src={kenyaPhoto}
              />
              <div className="kenya-location">
                <span>Our mission</span>
                <strong>Kenya</strong>
              </div>
            </div>

            <div>
              <p className="eyebrow text-fern">Equipping local pastors</p>
              <h2 className="section-title mt-4">Stronger pastors. Stronger local churches.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                We partner with pastors in Kenya by helping provide biblical education, practical ministry training, and resources they can carry back to the churches and communities they already know and love.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-muted">
                This is long-term, relationship-centered work: listening first, learning from one another, and investing in local leaders who will teach and serve for years to come.
              </p>

              <div className="mt-9 grid gap-5 border-y border-line py-7 sm:grid-cols-3">
                <div>
                  <span className="mission-number">01</span>
                  <p className="mt-2 font-bold text-evergreen">Learn together</p>
                </div>
                <div>
                  <span className="mission-number">02</span>
                  <p className="mt-2 font-bold text-evergreen">Equip pastors</p>
                </div>
                <div>
                  <span className="mission-number">03</span>
                  <p className="mt-2 font-bold text-evergreen">Serve churches</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a className="button button-dark" href="#give">Support the mission <ArrowIcon /></a>
                <a className="text-link self-center" href="#visit">Talk with us Sunday</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32" id="messages">
          <div className="site-container">
            <div className="grid overflow-hidden bg-white shadow-[0_24px_70px_rgba(27,44,36,0.10)] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[420px] overflow-hidden">
                <img alt="Pastor Bill Phillips speaking from the pulpit" className="pastor-photo absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" src={pastorBill} />
                <div className="absolute inset-0 bg-ink/25" />
                <a aria-label="Visit Dawson Free Will Baptist Church on Facebook" className="play-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" href={facebookUrl} rel="noreferrer" target="_blank">
                  <Icon size={26}><path d="m9 7 7 5-7 5V7Z" fill="currentColor" /></Icon>
                </a>
              </div>
              <div className="flex flex-col justify-center p-9 sm:p-14 lg:p-16">
                <p className="eyebrow text-fern">Sunday&apos;s sermon</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Faithful in the everyday</h2>
                <p className="mt-5 text-sm font-bold uppercase tracking-widest text-muted">Pastor Bill Phillips · June 8</p>
                <p className="mt-6 leading-7 text-muted">
                  Finding God&apos;s goodness in ordinary work, familiar places, and the people right in front of us.
                </p>
                <a className="button button-dark mt-8 self-start" href={facebookUrl} rel="noreferrer" target="_blank">
                  Visit Facebook <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-24" id="events">
          <div className="site-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-fern">What&apos;s happening</p>
              <h2 className="section-title mt-4">There&apos;s always something to look forward to.</h2>
              <a className="text-link mt-8" href={facebookUrl} rel="noreferrer" target="_blank">See our latest updates <ArrowIcon /></a>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {events.map((event) => (
                <a className="event-row group" href={event.title === "Trunk or Treat" ? "#trunk-or-treat" : "#events"} key={event.title}>
                  <div className="w-14 text-center">
                    <p className="text-[11px] font-bold tracking-widest text-fern">{event.month}</p>
                    <p className="font-serif text-3xl">{event.day}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl transition group-hover:text-fern">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted">{event.meta}</p>
                  </div>
                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-line transition group-hover:border-evergreen group-hover:bg-evergreen group-hover:text-white sm:flex">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>

            <article className="event-feature overflow-hidden bg-cream lg:col-span-2" id="trunk-or-treat">
              <div className="event-flyer-wrap">
                <img
                  alt="Trunk or Treat at Dawson Free Will Baptist Church, Friday October 30 from 4 to 8 PM"
                  className="h-full w-full object-contain"
                  src={trunkOrTreatFlyer}
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="eyebrow text-fern">Featured community event</p>
                <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Trunk or Treat</h3>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-evergreen">
                  Friday, October 30 · 4:00–8:00 PM
                </p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  Bring the whole family for a safe and fun evening with games, food, plenty of candy, and more. Everyone is welcome.
                </p>
                <div className="mt-7 border-l-2 border-gold pl-5">
                  <p className="font-bold text-evergreen">Dawson Free Will Baptist Church</p>
                  <p className="mt-1 leading-7 text-muted">
                    2044 N Darlington Pl, Tulsa, OK 74115
                    <br />
                    Join us around back.
                  </p>
                </div>
                <a className="button button-dark mt-8 self-start" href={directionsUrl} rel="noreferrer" target="_blank">
                  Get directions <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-cream py-24 lg:py-28" id="church-life">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-fern">Life at Dawson</p>
                <h2 className="section-title mt-4 max-w-3xl">Real people. Shared joy. God at work.</h2>
              </div>
              <a className="button button-dark self-start md:self-auto" href={facebookUrl} rel="noreferrer" target="_blank">
                Follow us on Facebook <ArrowIcon />
              </a>
            </div>

            <div className="church-gallery mt-14">
              <figure className="gallery-card gallery-card-feature">
                <img alt="A collection of wedding and church family moments at Dawson" src={churchFamilyCollage} />
                <figcaption>Celebrating life together</figcaption>
              </figure>
              <figure className="gallery-card">
                <img alt="A wedding ceremony inside Dawson Free Will Baptist Church" src={sanctuaryWedding} />
                <figcaption>Making sacred promises</figcaption>
              </figure>
              <figure className="gallery-card">
                <img alt="Children gathering Easter eggs outdoors" src={eggHunt} />
                <figcaption>Joy for every generation</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gold py-24 text-evergreen" id="visit">
          <div className="decorative-ring absolute -right-40 -top-52 h-[520px] w-[520px] rounded-full border border-evergreen/20" />
          <div className="site-container relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Come as you are</p>
              <h2 className="section-title mt-4 max-w-3xl">There&apos;s room for you here.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-evergreen/75">
                No need to dress up or know what to expect. Come through the front door and someone will be glad to show you around.
              </p>
            </div>
            <a className="button button-dark shrink-0" href={directionsUrl} rel="noreferrer" target="_blank">
              Get directions <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-10 pt-20 text-white" id="give">
        <div className="site-container">
          <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
            <div>
              <a className="flex items-center gap-4" href="#top">
                <img alt="" className="church-logo h-20 w-20 shrink-0 rounded-full object-cover" src={churchLogo} />
                <span className="text-lg font-bold">DAWSON FREE WILL BAPTIST CHURCH</span>
              </a>
              <p className="mt-6 max-w-xs leading-7 text-white/55">Loving God, caring for one another, and serving our neighbors.</p>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <div className="footer-links"><a href="#about">About</a><a href="#leadership">Leadership</a><a href="#ministries">Ministries</a><a href="#kenya">Kenya mission</a></div>
            </div>
            <div>
              <p className="footer-heading">Connect</p>
              <div className="footer-links"><a href="#visit">Plan a visit</a><a href={directionsUrl} rel="noreferrer" target="_blank">Directions</a><a href={facebookUrl} rel="noreferrer" target="_blank">Facebook</a><a href="#ministries">Serve</a></div>
            </div>
            <div>
              <p className="footer-heading">Sundays</p>
              <p className="mt-5 leading-7 text-white/55">Coffee & Donuts fellowship · 9:45 AM<br />Worship · 10:45 AM<br />2044 N Darlington Pl<br />Tulsa, OK 74115</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/40 sm:flex-row">
            <p>© 2026 Dawson Free Will Baptist Church.</p>
            <p>Small church. Open doors. Everyone welcome.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
