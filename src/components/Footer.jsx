import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ink px-5 pb-7 pt-16 text-white md:px-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <a
              href="/"
              className="inline-flex items-baseline font-display text-3xl tracking-[-.04em]"
            >
              Cuts & Blush Salon
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Premium unisex salon experiences crafted with care, precision and
              a little bit of beauty.
            </p>

            <p className="mt-5 text-xs uppercase tracking-[.16em] text-white/25">
              East Ramkrishna Nagar · Patna · Bihar
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {[
                ["Services", "/#services"],
                ["Experience", "/#experience"],
                ["Looks", "/#looks"],
                ["Book appointment", "/#book"],
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
                href="https://maps.app.goo.gl/Q3DysoSxHKZjvtYX7"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col gap-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Cuts & Blush Unisex Salon. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/data-deletion"
              className="transition-colors hover:text-white"
            >
              Data Deletion
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              Back to top
              <i className="ri-arrow-right-up-line" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
