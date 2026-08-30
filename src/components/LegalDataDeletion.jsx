import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const steps = [
  {
    number: "01",
    title: "Send a Request",
    text: "Contact Cuts & Blush Unisex Salon and request deletion of your personal information.",
  },
  {
    number: "02",
    title: "Verify Your Request",
    text: "We may ask for reasonable information to verify that the request belongs to you and prevent unauthorized deletion requests.",
  },
  {
    number: "03",
    title: "We Process the Request",
    text: "After verification, we will review the information associated with your request and process deletion where applicable.",
  },
];

const informationTypes = [
  "Personal details submitted through our website",
  "Appointment-related information",
  "Contact and enquiry information",
  "Marketing or communication preferences",
  "Other information associated with your customer profile",
];

function LegalDataDeletion() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      <section className="px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="max-w-4xl">
            <p className="eyebrow">Legal / Data</p>

            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[.88] tracking-[-.055em]">
              Data
              <br />
              <em>Deletion.</em>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              You can request the deletion of personal information associated
              with your interactions with Cuts & Blush Unisex Salon. This page
              explains how to submit a request and what happens after we
              receive it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-black/35">
              <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">
                Effective: August 30, 2026
              </span>

              <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-gold">
                Cuts & Blush Salon
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-16 grid gap-3 lg:grid-cols-[.7fr_1.3fr] lg:gap-6">
            {/* Sidebar */}
            <aside className="h-fit rounded-[1.75rem] bg-ink p-7 text-white lg:sticky lg:top-28">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/35">
                Data Control
              </p>

              <div className="mt-6">
                <p className="text-2xl font-display leading-tight">
                  Your data.
                  <br />
                  Your choice.
                </p>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  If you no longer want us to retain your personal information,
                  you can contact our team to request deletion.
                </p>
              </div>

              <a
                href="mailto:cutsblushsalon1@gmail.com?subject=Data%20Deletion%20Request"
                className="mt-8 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
              >
                <div>
                  <span className="block text-[9px] uppercase tracking-[.18em] text-white/35">
                    Start a request
                  </span>

                  <span className="mt-1 block text-sm font-semibold">
                    Email our team
                  </span>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </aside>

            {/* Content */}
            <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/55">
              {/* Request */}
              <section className="p-7 sm:p-9 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  Request deletion
                </p>

                <h2 className="mt-3 font-display text-3xl leading-none tracking-tight md:text-4xl">
                  How to request deletion
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
                  To request deletion of your personal information, send us an
                  email with the subject line{" "}
                  <strong className="font-semibold text-ink">
                    “Data Deletion Request”
                  </strong>
                  . Please include your name and the phone number or email
                  address associated with your interactions with us.
                </p>

                <a
                  href="mailto:cutsblushsalon1@gmail.com?subject=Data%20Deletion%20Request"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Request data deletion
                  <ArrowUpRight size={16} />
                </a>
              </section>

              {/* Steps */}
              <section className="border-t border-black/10 p-7 sm:p-9 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  The process
                </p>

                <div className="mt-8 divide-y divide-black/10">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-5 py-7 first:pt-0 last:pb-0"
                    >
                      <span className="pt-1 text-[10px] font-bold tracking-[.15em] text-gold">
                        {step.number}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl leading-none">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/55">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Information */}
              <section className="border-t border-black/10 p-7 sm:p-9 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  What may be deleted
                </p>

                <h2 className="mt-3 font-display text-3xl leading-none tracking-tight md:text-4xl">
                  Information covered by your request
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {informationTypes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-black/10 bg-white/45 p-4"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-gold"
                      />

                      <span className="text-sm leading-6 text-black/60">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Exceptions */}
              <section className="border-t border-black/10 p-7 sm:p-9 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  Important
                </p>

                <h2 className="mt-3 font-display text-3xl leading-none tracking-tight md:text-4xl">
                  Information we may need to retain
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-black/55 md:text-base">
                  <p>
                    Some information may need to be retained where required by
                    law, for legitimate business purposes, to resolve disputes,
                    prevent fraud or abuse, maintain transaction records, or
                    protect the rights and safety of our customers and business.
                  </p>

                  <p>
                    Where complete deletion is not possible because of a legal
                    or legitimate requirement, we will retain only the
                    information that is necessary for that purpose where
                    applicable.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="border-t border-black/10 p-7 sm:p-9 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">
                  Contact
                </p>

                <h2 className="mt-3 font-display text-3xl leading-none tracking-tight md:text-4xl">
                  Need help?
                </h2>

                <p className="mt-5 text-sm leading-7 text-black/55 md:text-base">
                  If you have questions about your data, deletion request, or
                  how your information is handled, please contact our team.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:cutsblushsalon1@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                  >
                    cutsblushsalon1@gmail.com
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="tel:+919279874506"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-ink"
                  >
                    +91 92798 74506
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default LegalDataDeletion;