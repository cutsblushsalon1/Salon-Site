import React from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you interact with Cuts & Blush Unisex Salon, we may collect
          information that you voluntarily provide to us, including your name,
          phone number, appointment details, selected services, and membership
          information.
        </p>
        <p>
          We may also collect limited technical information such as your
          browser type, device information, pages visited, and general website
          usage data to help us improve your experience.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We use the information we collect to manage appointments, provide
          salon services, respond to enquiries, process membership-related
          requests, and communicate important information about your bookings.
        </p>
        <p>
          Where appropriate, we may also use your contact information to send
          service updates, appointment reminders, offers, or other
          salon-related communications.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Appointments & Communications",
    content: (
      <>
        <p>
          When you submit an appointment request through our website, the
          information you provide may be used by our team to contact you and
          confirm or manage your appointment.
        </p>
        <p>
          If you communicate with us through WhatsApp, phone, or another
          third-party communication platform, that communication may also be
          subject to the privacy practices of the respective platform.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Sharing of Information",
    content: (
      <p>
        We do not sell your personal information. We may share information
        only when reasonably necessary to operate our services, process
        bookings, use trusted service providers, comply with applicable law,
        or protect the rights and safety of Cuts & Blush Unisex Salon, our
        customers, or others.
      </p>
    ),
  },
  {
    number: "05",
    title: "Cookies & Website Technologies",
    content: (
      <p>
        Our website may use cookies, session storage, analytics technologies,
        or similar tools to remember preferences, maintain functionality,
        understand website usage, and improve performance. You can control
        certain cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    number: "06",
    title: "Data Security",
    content: (
      <p>
        We take reasonable measures to protect information submitted through
        our website and business channels. However, no method of transmission
        or electronic storage can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    number: "07",
    title: "Third-Party Services",
    content: (
      <p>
        Our website may contain links or integrations with third-party
        services, including maps, social media, communication platforms, or
        payment and booking services. We are not responsible for the privacy
        practices of third-party websites or services, and we encourage you to
        review their respective policies.
      </p>
    ),
  },
  {
    number: "08",
    title: "Your Choices",
    content: (
      <p>
        You may contact us to ask about the personal information we hold about
        you, request correction of inaccurate information, or ask questions
        about how your information is used, subject to applicable legal
        requirements.
      </p>
    ),
  },
  {
    number: "09",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our services, technology, or legal requirements. The updated policy
        will be published on this page with a revised effective date.
      </p>
    ),
  },
  {
    number: "10",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact Cuts & Blush Unisex Salon.
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

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-gold selection:text-white">
      <Header />

      <section className="px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="eyebrow">Legal / Privacy</p>

            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[.88] tracking-[-.055em]">
              Privacy
              <br />
              <em>Policy.</em>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              Your privacy matters to us. This policy explains what
              information Cuts & Blush Unisex Salon may collect, how we use it,
              and the choices available to you when using our website and
              services.
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
                    href={`#privacy-${section.number}`}
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
                  Questions about your information? Our team is happy to help.
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
                  id={`privacy-${section.number}`}
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

export default PrivacyPolicy;