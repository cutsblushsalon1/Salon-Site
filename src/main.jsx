import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  MapPin,
  Instagram,
  Phone,
  Star,
  Clock,
  MessageCircle,
} from "lucide-react";
import "remixicon/fonts/remixicon.css";
import "./styles.css";
import Header from "./components/Header";
import Marquee from "./components/Marquee";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Hair Artistry",
    copy: "Cuts, color, styling and restorative rituals tailored to your texture.",
    price: "From ₹399",
  },
  {
    title: "Skin & Glow",
    copy: "Refined facials and glow treatments designed for a fresh, healthy finish.",
    price: "From ₹799",
  },
  {
    title: "Grooming",
    copy: "Precision beard work, clean-ups and occasion-ready detailing.",
    price: "From ₹299",
  },
  {
    title: "Beauty Rituals",
    copy: "Manicure, pedicure, waxing and finishing touches in one calm space.",
    price: "From ₹349",
  },
];

const staffMembers = [
  {
    name: "Nadeem Ahmad",
    role: "Creative Director",
    image: "/staffs/staff1.jpg",
  },
  {
    name: "Hanshika Singh",
    role: "Senior Make-up Artist",
    image: "/staffs/staff2.jpg",
  },
  {
    name: "Anjali",
    role: "Senior Beautician & Make-up Artist",
    image: "/staffs/staff3.jpg",
  },
  {
    name: "Rihan Salmani",
    role: "Senior Hair Artist",
    image: "/staffs/staff4.jpg",
  },
  {
    name: "Priya",
    role: "Senior Beautician",
    image: "/staffs/staff5.jpg",
  },
];

const looks = [
  "/salon1.jpg",
  "/salon2.jpg",
  "/salon3.jpg",
];

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 38, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });

      gsap.utils.toArray(".service-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: i * 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-gold selection:text-white">
      <Header />

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative min-h-[92vh] overflow-hidden px-5 pb-20 pt-36 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-end gap-12 md:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10">
            <h1 className="max-w-4xl font-display text-[clamp(4rem,10vw,9rem)] leading-[.82] tracking-[-.06em]">
              Look good.
              <br />
              <em>Feel</em> even better.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">
              A premium unisex salon built around thoughtful service, modern
              technique and an atmosphere that makes taking time for yourself
              feel effortless.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition"
              >
                Book Appointment <ArrowUpRight size={16} />
              </a>
              <a
                href="#services"
                className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/70"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="relative h-[50vh] min-h-[380px] overflow-hidden rounded-[2rem] md:h-[66vh]">
            <img
              src="/hero.jpg"
              alt="Modern salon interior"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/80">
                  Cuts & Blush Unisex Salon
                </p>
                <p className="mt-0.5 font-display text-2xl">
                  Premium Experience
                </p>
              </div>
              <div className="hidden rounded-full border border-white/30 bg-black/15 px-4 py-2 text-xs backdrop-blur md:block">
                Opens · 10:00 AM — 09:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Services */}
      <section id="services" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">01 / Services</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none tracking-tight md:text-7xl">
                Your best look,
                <br />
                <em>carefully considered.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/55">
              From a quick refresh to a full transformation, every appointment
              is designed to feel personal—not processed.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="service-card group rounded-[1.75rem] border border-black/10 bg-white/45 p-7 transition duration-500 hover:-translate-y-1 hover:bg-white md:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold text-black/35">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    className="text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    size={21}
                  />
                </div>
                <h3 className="mt-16 font-display text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                  {s.copy}
                </p>
                <div className="mt-8 border-t border-black/10 pt-4 text-xs font-semibold uppercase tracking-[.16em] text-gold">
                  {s.price}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="bg-[#e9e4da] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="reveal">
            <img
              src="experience.jpg"
              alt="Salon styling detail"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="reveal">
            <p className="eyebrow">02 / The experience</p>
            <h2 className="mt-4 font-display text-5xl leading-[.95] tracking-tight md:text-7xl">
              A little more
              <br />
              <em>than a salon.</em>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-black/60">
              We believe premium isn't about being complicated. It's about
              listening carefully, getting the details right and giving you
              space to enjoy the process.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                "Consult first",
                "Skilled artists",
                "Premium products",
                "No-rush service",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white/40 p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="overflow-hidden relative bg-ink px-5 py-24 text-white md:px-10 md:py-32"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-white/[0.035]" />
          <div className="absolute -right-20 top-40 h-[300px] w-[300px] rounded-full border border-white/[0.035]" />
          <div className="absolute left-[-12rem] bottom-[-10rem] h-[500px] w-[500px] rounded-full border border-gold/[0.06]" />

          <span className="absolute right-[7%] top-[20%] hidden select-none font-display text-[18rem] leading-none text-white/[0.018] lg:block">
            &amp;
          </span>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-gold">
                03 / Meet the team
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[.92] tracking-tight md:text-7xl lg:text-8xl">
                The people behind
                <br />
                <em>your best look.</em>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Five specialists. Different strengths. One shared belief — every
              client deserves thoughtful service and a beautiful finish.
            </p>
          </div>

          {/* Staff Grid */}
          <div className="mt-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {staffMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-white/[0.04]">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role} at Cuts & Blush Unisex Salon`}
                      loading={index > 1 ? "lazy" : "eager"}
                      className="
              aspect-[4/5]
              w-full
              object-cover
              object-[center_20%]
              transition-transform
              duration-1000
              ease-[cubic-bezier(.22,1,.36,1)]
              group-hover:scale-[1.045]
            "
                    />

                    {/* Soft image gradient */}
                    <div
                      className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/5
              to-transparent
              opacity-80
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
                    />

                    {/* Number */}
                    <div
                      className="
              absolute
              left-4
              top-4
              flex
              h-8
              min-w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              px-2
              text-[9px]
              font-medium
              tracking-wider
              text-white/80
              backdrop-blur-xl
            "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Staff Info */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3
                          className="
                  truncate
                  font-display
                  text-2xl
                  leading-none
                  text-white
                "
                        >
                          {member.name}
                        </h3>

                        <p className="mt-2 text-xs text-white/40">
                          {member.role}
                        </p>
                      </div>

                      {/* Gold indicator */}
                      <span
                        className="
                mt-1
                h-2
                w-2
                shrink-0
                rounded-full
                bg-gold/60
                transition-all
                duration-300
                group-hover:scale-150
                group-hover:bg-gold
              "
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="reveal mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-white/40">
              Not sure who to book with?
              <span className="ml-1 text-white/70">We'll help you choose.</span>
            </p>

            <a
              href="#book"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition sm:self-auto"
            >
              Find your stylist
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Looks */}
      <section id="looks" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">04 / The lookbook</p>
              <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
                Made to be <em>seen.</em>
              </h2>
            </div>
            <a
              href="#book"
              className="hidden items-center gap-2 text-sm font-semibold md:flex"
            >
              Book your transformation <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {looks.map((src, i) => (
              <motion.div
                key={src}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className={`overflow-hidden rounded-[1.75rem] ${i === 1 ? "md:mt-14" : ""}`}
              >
                <img
                  src={src}
                  alt={`Salon look ${i + 1}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section
        id="book"
        className="bg-ink px-5 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_.75fr] md:items-end">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-gold">
              05 / Your chair is waiting
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-6xl leading-[.9] tracking-tight md:text-8xl">
              Ready for your
              <br />
              <em>next look?</em>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/55">
              Tell us what you have in mind. We'll help you choose the right
              service and a time that works.
            </p>
            <a
              href="tel:+919279874506"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-1"
            >
              <Phone size={17} /> Call to book
            </a>
          </div>
          <div
            id="visit"
            className="reveal rounded-[2rem] border border-white/10 bg-white/[.05] p-7 md:p-9"
          >
            <div className="flex items-start justify-between">
              <MapPin className="text-gold" size={22} />
              <Instagram size={21} className="text-white/50" />
            </div>
            <h3 className="mt-14 font-display text-3xl">
              Come by Cuts & Blush.
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              East Ram Krishna Nagar,
              <br />
              Patna, Bihar
            </p>
            <div className="my-7 h-px bg-white/10" />
            <div className="flex justify-between text-sm">
              <span className="text-white/45">Mon — Sun</span>
              <span>09:00 AM — 09:00 PM</span>
            </div>
            <a
              href="https://maps.google.com/?q=East+Ramkrishna+Nagar+Patna"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
            >
              Get directions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section
        id="appointment"
        className="bg-[#f0ece4] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div className="reveal md:sticky md:top-28">
            <p className="eyebrow">06 / Book your appointment</p>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-tight md:text-7xl">
              Your time.
              <br />
              <em>Your chair.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-black/55">
              Choose your preferred service and request a time. Our team will
              confirm your appointment shortly.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="rounded-2xl bg-white/60 p-4">
                <strong>Walk-ins welcome</strong>
                <span className="ml-2 text-black/45">
                  subject to availability
                </span>
              </div>
              <div className="rounded-2xl bg-white/60 p-4">
                <strong>Easy confirmation</strong>
                <span className="ml-2 text-black/45">phone or WhatsApp</span>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "tel:+919279874506";
            }}
            className="reveal rounded-[2rem] bg-white p-6 shadow-soft md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field">
                <span>Your name</span>
                <input required name="name" placeholder="Full name" />
              </label>
              <label className="field">
                <span>Phone number</span>
                <input required name="phone" type="tel" placeholder="+91" />
              </label>
              <label className="field">
                <span>Service</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Hair Artistry</option>
                  <option>Skin & Glow</option>
                  <option>Grooming</option>
                  <option>Beauty Rituals</option>
                </select>
              </label>
              <label className="field">
                <span>Preferred date</span>
                <input required name="date" type="date" />
              </label>
              <label className="field sm:col-span-2">
                <span>Preferred time</span>
                <select name="time" defaultValue="">
                  <option value="" disabled>
                    Choose a time
                  </option>
                  <option>Morning · 9 AM – 12 PM</option>
                  <option>Afternoon · 12 PM – 4 PM</option>
                  <option>Evening · 4 PM – 9 PM</option>
                </select>
              </label>
            </div>
            <button className="mt-7 w-full rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Request appointment
            </button>
            <p className="mt-3 text-center text-xs text-black/40">
              By submitting, you'll be redirected to call the salon for
              confirmation.
            </p>
          </form>
        </div>
      </section>

      {/* Trust */}
      <section id="return" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-12 text-center">
            <p className="eyebrow">07 / Why clients return</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
              Small details.
              <br />
              <em>Big difference.</em>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Personal consultation",
                "We start by understanding your style, routine and what you actually want.",
              ],
              [
                "02",
                "Premium finish",
                "Clean technique, considered products and attention to the final detail.",
              ],
              [
                "03",
                "Comfort first",
                "A calm, welcoming space where your appointment never feels rushed.",
              ],
              [
                "04",
                "Local & trusted",
                "A premium salon experience, right here in East Ram Krishna Nagar.",
              ],
            ].map(([n, t, c]) => (
              <article
                key={n}
                className="reveal rounded-[1.75rem] border border-black/10 p-6 md:p-7"
              >
                <span className="text-xs font-bold text-gold">{n}</span>
                <h3 className="mt-12 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-black/50">{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="bg-[#e9e4da] px-5 py-24 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">08 / Client love</p>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            {[
              [
                "“Loved the finish and the attention to detail. The whole experience felt premium.”",
                "Local client",
              ],
              [
                "“Finally found a salon where they actually listen before starting. Highly recommended.”",
                "Local client",
              ],
              [
                "“Clean space, friendly team and great styling. I'll definitely be back.”",
                "Local client",
              ],
            ].map(([q, a]) => (
              <blockquote
                key={q}
                className="rounded-[1.75rem] bg-white/55 p-6 md:p-7"
              >
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((x) => (
                    <Star key={x} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-7">{q}</p>
                <footer className="mt-5 text-xs uppercase tracking-[.16em] text-black/40">
                  {a}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#e9e4da] px-5 py-24 md:px-10"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 lg:grid-cols-[1.05fr_.95fr]">
            {/* LEFT — Contact information */}
            <div className="relative overflow-hidden p-7 sm:p-9 md:p-12">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-gold/20" />
              <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border border-gold/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-black/35">
                    Get in touch
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-black/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#72865f]" />
                    Available today
                  </span>
                </div>

                <h3 className="mt-12 max-w-md font-display text-4xl leading-[.95] tracking-tight sm:text-5xl md:text-6xl">
                  We're here
                  <br />
                  <em>for you.</em>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-6 text-black/50">
                  Whether you're planning a fresh cut, a complete
                  transformation, or simply want to ask a question — our team is
                  just a message away.
                </p>

                {/* Contact actions */}
                <div className="mt-10 space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+919279874506"
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/65 p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                        <i class="ri-phone-line"></i>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/35">
                          Call
                        </p>

                        <p className="text-sm font-semibold sm:text-base">
                          +91 92798 74506
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-black/25 transition-all duration-200 group-hover:text-gold"
                    />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919279874506"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/65 p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3f4a3b] text-white">
                        <i class="ri-whatsapp-line"></i>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/35">
                          WhatsApp
                        </p>

                        <p className="text-sm font-semibold sm:text-base">
                          Start a conversation
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-black/25 transition-all duration-200 group-hover:text-gold"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Location / visit */}
            <div className="relative min-h-[480px] overflow-hidden bg-ink text-white lg:min-h-full">
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                alt="Cuts & Blush Unisex Salon interior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />

              <div className="relative flex h-full min-h-[480px] flex-col justify-between p-7 sm:p-9 md:p-12">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                    <MapPin size={19} className="text-gold" />
                  </div>

                  <a
                    href="https://maps.google.com/?q=East+Ram+Krishna+Nagar+Patna+Bihar"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] font-semibold backdrop-blur-md transition hover:bg-white hover:text-ink"
                  >
                    Open Maps
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </a>
                </div>

                {/* Bottom */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">
                    Find us
                  </p>

                  <h3 className="mt-2 max-w-md font-display text-4xl leading-none sm:text-5xl">
                    East <em>Ramkrishna</em> Nagar
                  </h3>

                  <p className="mt-5 text-sm text-white/55">
                    Patna, Bihar - 800027
                  </p>

                  {/* Opening hours */}
                  <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[.16em] text-white/35">
                        Opening hours
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        MONDAY - SUNDAY
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gold" />

                      <span className="text-sm font-medium">
                        10:00 AM — 09:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="relative mt-4 overflow-hidden rounded-[2rem] bg-ink px-6 py-8 text-white sm:px-9 md:px-12 md:py-10">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-gold/20" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />

                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">
                    Ready when you are
                  </p>
                </div>

                <h3 className="mt-3 font-display text-3xl leading-none sm:text-4xl md:text-5xl">
                  Your chair is waiting.
                </h3>
              </div>

              <a
                href="#book"
                className="group flex w-full items-center justify-between rounded-full bg-white p-1.5 pl-5 text-sm font-semibold text-ink sm:w-auto sm:justify-start"
              >
                <span className="mr-5">Book Appointment</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-7 pt-16 text-white md:px-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          {/* Main footer */}
          <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
            {/* Brand */}
            <div>
              <a
                href="#top"
                className="inline-flex items-baseline font-display text-3xl tracking-[-.04em]"
              >
                Cuts & Blush Salon
              </a>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                Premium unisex salon experiences crafted with care, precision
                and a little bit of beauty.
              </p>

              <p className="mt-5 text-xs uppercase tracking-[.16em] text-white/25">
                East Ramkrishna Nagar · Patna · Bihar
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {[
                  ["Services", "#services"],
                  ["Experience", "#experience"],
                  ["Looks", "#looks"],
                  ["Book appointment", "#book"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:+919279874506"
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  +91 92798 74506
                </a>

                <a
                  href="https://wa.me/919279874506"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.google.com/?q=East+Ram+Krishna+Nagar+Patna+Bihar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10" />

          {/* Bottom footer */}
          <div className="flex flex-col gap-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Cuts & Blush Unisex Salon. All rights
              reserved.
            </p>

            <div className="flex items-center gap-5">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>

              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>

              <a
                href="#top"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                Back to top
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
