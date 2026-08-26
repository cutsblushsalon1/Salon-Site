import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Team", href: "#team" },
  { label: "Looks", href: "#looks" },
  { label: "Visit", href: "#book" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["top", "services", "experience", "team", "looks", "book", "reviews", "contact"];

      const current = sections.find((id) => {
        const section = document.getElementById(id);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) {
        setActive(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.06,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 md:px-6">
        <motion.div
          className={`
            rounded-full
            mx-auto max-w-7xl
            transition-all duration-500
            ${
              scrolled
                ? "border-black/15 bg-[#f6f3ed]/95 px-4 py-2.5 shadow-[0_10px_40px_rgba(17,17,15,.08)] backdrop-blur-2xl sm:px-6"
                : "border-black/10 bg-[#f6f3ed]/75 px-4 py-2.5 backdrop-blur-xl md:px-6"
            }
            border
          `}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#top"
              onClick={closeMenu}
              className="group relative flex items-center"
            >
              <div className="flex items-baseline font-display text-[1.1rem] tracking-[-0.03em] sm:text-xl">
                Cuts & Blush Salon
              </div>              
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="relative rounded-full px-4 py-2 text-[13px] font-medium text-black/65 transition-colors duration-300 hover:text-black"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 -z-10 rounded-full bg-black/[0.055]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <motion.a
                href="#appointment"
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white"
              >
                <span>Book Appointment</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </motion.a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.045] md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={19} strokeWidth={1.8} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={19} strokeWidth={1.8} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#f6f3ed]/96 p-3 shadow-[0_20px_60px_rgba(17,17,15,.12)] backdrop-blur-2xl md:hidden"
            >
              <div className="rounded-[1.25rem] bg-white/45 p-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group flex items-center justify-between
                      rounded-xl px-4 py-4
                      text-[15px] font-medium
                      transition-colors duration-300
                      ${
                        active === item.href
                          ? "bg-black/[0.045] text-black"
                          : "text-black/60 hover:bg-black/[0.035] hover:text-black"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={17}
                      className="text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    />
                  </motion.a>
                ))}
              </div>

              {/* MOBILE BOOKING CTA */}
              <motion.a
                href="#book"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.4,
                }}
                className="mt-3 flex items-center justify-between rounded-[1.2rem] bg-ink px-5 py-4 text-white"
              >
                <div>
                  <span className="block text-[10px] uppercase tracking-[.18em] text-white/45">
                    Your chair is waiting
                  </span>

                  <span className="mt-1 block text-sm font-semibold">
                    Book an appointment
                  </span>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight size={17} />
                </span>
              </motion.a>

              {/* LOCATION */}
              <div className="px-4 pb-2 pt-5 text-[11px] uppercase tracking-[.16em] text-black/35">
                East Ram Krishna Nagar · Patna
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE STICKY BOOKING BAR */}
      <motion.div
        initial={{ y: 100 }}
        animate={{
          y: scrolled && !open ? 0 : 100,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-3 left-3 right-3 z-40 md:hidden"
      >
        <a
          href="#book"
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink px-4 py-3 text-white shadow-[0_15px_50px_rgba(0,0,0,.2)]"
        >
          <div>
            <span className="block text-[9px] uppercase tracking-[.16em] text-white/45">
              Cuts & Blush
            </span>

            <span className="mt-0.5 block text-sm font-semibold">
              Book your appointment
            </span>
          </div>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </motion.div>
    </>
  );
}

export default Header;
