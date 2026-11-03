import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

 export const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "Dinner Sets", href: "/dinnerware" },
      { label: "Mugs & Cups", href: "/drinkware" },
      { label: "Serving Bowls", href: "/shop" },
      { label: "Tea Sets", href: "/drinkware" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", href: "/" },
      { label: "Returns", href: "/" },
      { label: "Care guide", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending) return;  

    setSending(true);
    try {
      await emailjs.sendForm("service_77m9x8k", "template_efhy5jn", form.current, {
        publicKey: "wJo3JKkjDqwuvZNbQ",
      });

      form.current.reset();

      Swal.fire({
        title: "Thank You!",
        text: "You have successfully subscribed to our newsletter.",
        icon: "success",
        confirmButtonText: "Done",
        confirmButtonColor: "#C2603A",
      });
    } catch (error) {
      console.error("Email error:", error);

      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#C2603A",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="bg-dark-warm-charcoal pt-10 sm:pt-15 lg:pt-18 pb-4 sm:pb-5 md:pb-7 lg:pb-10">
      <div className="max-w-360 w-full mx-auto px-4 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-5">
          {/* Brand */}
          <div className="w-full max-w-95 flex flex-col items-start">
            <a
              href="/"
              className="text-2xl sm:text-26 md:text-28 font-bold leading-118 text-soft-cream"
            >
              Clay<span className="text-orange-100">well</span>
            </a>

            <p className="mt-4 font-normal text-xs sm:text-15 leading-160 text-warm-gray-100">
              Thoughtfully made crockery for everyday meals and special occasions.
            </p>
          </div>

           <div className="max-w-74.25 w-full flex flex-row sm:justify-between gap-10 lg:gap-5">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="w-auto flex flex-col items-start">
                <h3 className="text-sm sm:text-base font-medium leading-118 text-soft-cream mb-3">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label} className="leading-118">
                      <a
                        href={link.href}
                        className="footer-link hover:text-white text-xs sm:text-15 font-normal leading-118 text-warm-gray-100 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

           
          <div className="w-full max-w-85 flex flex-col items-start">
            <h3 className="text-sm sm:text-base font-medium leading-118 text-soft-cream mb-3.5">
              Join our newsletter
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex items-center bg-dark-brown-700 rounded-[26px] p-1.5"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Your email address"
                required
                className="newsletter-email min-w-0 flex-1 bg-transparent  outline-none border-none px-3.5 text-xs sm:text-sm font-normal leading-118 text-white placeholder:text-warm-gray-500"
              />

              <button
                type="submit"
                disabled={sending}
                className="shrink-0  bg-orange-100 text-white text-xs sm:text-sm font-normal leading-118 px-3.5 sm:px-5 py-2 sm:py-3 rounded-[20px] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 group relative max-w-44.25 overflow-hidden border-0  ease-out   hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)] active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full "
              >
                {sending ? "Sending..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-px bg-dark-brown-800 mt-7 sm:mt-10 md:mt-12 lg:mt-14 mb-4 sm:mb-5 md:mb-7"></div>

        <div className="flex flex-row items-center justify-between gap-4">
          <p className="font-normal sm:text-13 text-xs leading-118 text-warm-gray-500">
            © {currentYear} Claywell. All rights reserved.
          </p>

          <div className="flex items-center gap-1 font-normal sm:text-13 text-xs leading-118 text-warm-gray-500">
            <a href="/" className="footer-link hover:text-white transition-colors duration-300">
              Privacy
            </a>

            <span>·</span>

            <a href="/" className="footer-link hover:text-white transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
