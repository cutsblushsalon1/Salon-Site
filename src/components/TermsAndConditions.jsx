import React from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const sections = [
  {
    number: "01",
    title: "About Our Services",
    content: (
      <p>
        Cuts & Blush Unisex Salon provides hair, beauty, skin, makeup, grooming,
        and related salon services. Service availability, duration, pricing,
        and results may vary depending on the service selected, hair or skin
        condition, and individual requirements.
      </p>
    ),
  },
  {
    number: "02",
    title: "Appointments",
    content: (
      <>
        <p>
          Appointment requests submitted through the website are subject to
          confirmation by our salon team. A request submitted online does not
          necessarily guarantee an appointment until it has been confirmed.
        </p>
        <p>
          We recommend arriving on time for your appointment. Delays may reduce
          the available service time or require the appointment to be
          rescheduled.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Cancellations & Rescheduling",
    content: (
      <p>
        If you are unable to attend an appointment, please contact us as early
        as possible. We may reschedule appointments based on availability.
        Repeated late cancellations or no-shows may affect future booking
        availability.
      </p>
    ),
  },
  {
    number: "04",
    title: "Pricing & Offers",
    content: (
      <>
        <p>
          Prices displayed on our website may be promotional, starting prices,
          or indicative prices and may vary depending on hair length, product
          usage, service complexity, or individual requirements.
        </p>
        <p>
          Promotional offers are subject to their stated conditions,
          availability, and validity period. Offers cannot be combined unless
          explicitly stated otherwise.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Memberships",
    content: (
      <p>
        Membership benefits are available according to the membership plan
        selected at the time of purchase. Discounts, complimentary services,
        validity periods, and other benefits are subject to the applicable
        membership terms communicated by the salon.
      </p>
    ),
  },
  {
    number: "06",
    title: "Service Results",
    content: (
      <p>
        Salon and beauty results can differ from person to person. Results may
        depend on factors including existing hair condition, previous chemical
        treatments, skin type, lifestyle, aftercare, and other individual
        circumstances. Our team will provide professional recommendations based
        on the information available at the time of service.
      </p>
    ),
  },
  {
    number: "07",
    title: "Customer Responsibilities",
    content: (
      <p>
        Customers are responsible for providing accurate information relevant
        to their service, including known allergies, sensitivities, previous
        treatments, or other information that may reasonably affect the
        service. Customers should follow aftercare instructions provided by our
        salon professionals.
      </p>
    ),
  },
  {
    number: "08",
    title: "Website Use",
    content: (
      <p>
        You agree to use this website for lawful purposes and not to interfere
        with its operation, attempt unauthorized access, submit misleading
        information, or misuse any forms, booking functionality, content, or
        services available through the website.
      </p>
    ),
  },
  {
    number: "09",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may provide links to third-party platforms such as Google
        Maps, WhatsApp, Instagram, Facebook, or other services. These platforms
        operate independently and may have their own terms and policies.
      </p>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <p>
        Cuts & Blush Unisex Salon may update these Terms and Conditions from
        time to time. Changes will become effective when the updated terms are
        published on this page. Your continued use of the website after an
        update constitutes continued use of the website under the updated
        terms.
      </p>
    ),
  },
  {
    number: "11",
    title: "Contact",
    content: (
      <>
        <p>
          For questions about appointments, services, memberships, or these
          Terms and Conditions, please contact our salon team.
        </p>

        <a
          href="tel:+919279874506"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold"
        >
          +91 92798 74506
          <ArrowUpRight size={15} />
        </a>
      </>
    ),
  },
];

function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-gold selection:text-white">
      <Header />

      <section className="px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="eyebrow">Legal / Terms</p>

            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[.88] tracking-[-.055em]">
              Terms &
              <br />
              <em>Conditions.</em>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              These terms outline the basic rules for using the Cuts & Blush
              Unisex Salon website, requesting appointments, using our
              services, and participating in salon offers and memberships.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-black/35">
              <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">
                Effective: August 30, 2026
              </span>
              <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-gold">
                Cuts & Blush Salon
              </span>
            </div>
          </div>

          <div className="mt-16 grid gap-3 lg:grid-cols-[.7fr_1.3fr] lg:gap-6">
            <aside className="h-fit rounded-[1.75rem] bg-ink p-7 text-white lg:sticky lg:top-28">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/35">
                On this page
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#terms-${section.number}`}
                    className="group flex items-center gap-3 text-sm text-white/55 transition hover:text-white"
                  >
                    <span className="text-[10px] text-gold">
                      {section.number}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs leading-5 text-white/40">
                  Need help before booking? Speak directly with our team.
                </p>

                <a
                  href="tel:+919279874506"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Contact us
                  <ArrowUpRight size={15} className="text-gold" />
                </a>
              </div>
            </aside>

            <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/55">
              {sections.map((section, index) => (
                <section
                  key={section.number}
                  id={`terms-${section.number}`}
                  className={`scroll-mt-28 p-7 sm:p-9 md:p-12 ${
                    index !== sections.length - 1
                      ? "border-b border-black/10"
                      : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-[10px] font-bold tracking-[.15em] text-gold">
                      {section.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-3xl leading-none tracking-tight md:text-4xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-sm leading-7 text-black/55 md:text-base">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default TermsAndConditions;