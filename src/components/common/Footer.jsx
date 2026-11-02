 import Button from "./Button";
import Paragraph from "./Paragraph";

const companyLinks = [
  "About",
  "Features",
  "Works",
  "Career",
];

const helpLinks = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];

const faqLinks = [
  "Account",
  "Manage Deliveries",
  "Orders",
  "Payments",
];

const resourcesLinks = [
  "Free eBooks",
  "Development Tutorial",
  "How-to - Blog",
  "Youtube Playlist",
];

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3
        className="
          text-[9px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-black
          sm:text-[10px]
        "
      >
        {title}
      </h3>

      <div className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <a
            href="#"
            key={link}
            className="
              text-[8px]
              leading-[130%]
              text-black/50
              transition-colors
              hover:text-black
              sm:text-[9px]
            "
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const SocialIcon = ({ children, dark = false }) => {
  return (
    <a
      href="#"
      className={`
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        border
        text-[8px]
        font-medium
        transition-all
        ${
          dark
            ? "border-black bg-black text-white"
            : "border-black/20 bg-white text-black"
        }
      `}
    >
      {children}
    </a>
  );
};

const PaymentLogo = ({ children }) => {
  return (
    <div
      className="
        flex
        h-5
        min-w-[30px]
        items-center
        justify-center
        rounded-[4px]
        border
        border-black/5
        bg-white
        px-1
        text-[6px]
        font-bold
        text-black/60
        sm:h-6
        sm:min-w-[34px]
      "
    >
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0]">

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-3
          pt-5
          sm:px-6
          sm:pt-6
          md:px-8
          lg:px-10
          xl:px-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-5
            rounded-[10px]
            bg-black
            px-4
            py-5
            sm:px-6
            sm:py-6
            md:grid-cols-2
            md:items-center
            md:gap-8
            md:px-8
          "
        >
          {/* Newsletter heading */}
          <h2
            className="
              font-integral
              text-[22px]
              font-bold
              uppercase
              leading-[105%]
              text-white
              sm:text-[26px]
              md:text-[28px]
              lg:text-[30px]
            "
          >
            Stay Up to Date About
            <br />
            Our Latest Offers
          </h2>

          {/* Newsletter form */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-2
              md:ml-auto
              md:max-w-[360px]
            "
          >
            <input
              type="email"
              placeholder="✉  Enter your email address"
              className="
                h-9
                w-full
                rounded-full
                border-none
                bg-white
                px-4
                text-[9px]
                text-black
                outline-none
                placeholder:text-black/40
                sm:h-10
                sm:text-[10px]
              "
            />

            <Button
              className="
                h-9
                w-full
                max-w-none
                border-0
                bg-white
                text-[9px]
                hover:bg-[#F0F0F0]
                hover:text-black
                sm:h-10
                sm:text-[10px]
              "
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-2
          gap-x-6
          gap-y-7
          px-3
          py-6
          sm:px-6
          sm:py-8
          md:grid-cols-4
          md:gap-8
          md:px-8
          lg:grid-cols-5
          lg:px-10
          xl:px-0
        "
      >

        {/* =================================================
            SHOP.CO
        ================================================= */}

        <div
          className="
            col-span-2
            md:col-span-4
            lg:col-span-1
          "
        >
          {/* This is NOT your Logo component */}
          <h2
            className="
              font-integral
              text-[22px]
              font-bold
              leading-none
              text-black
              sm:text-[24px]
            "
          >
            SHOP.CO
          </h2>

          <Paragraph
            className="
              mt-2
              max-w-[270px]
              text-[9px]
              leading-[145%]
              sm:text-[10px]
            "
          >
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </Paragraph>

          {/* Social icons */}
          <div className="mt-4 flex items-center gap-2">
            <SocialIcon>𝕏</SocialIcon>
            <SocialIcon dark>f</SocialIcon>
            <SocialIcon>◎</SocialIcon>
            <SocialIcon>◉</SocialIcon>
          </div>
        </div>

        {/* =================================================
            COMPANY
        ================================================= */}

        <FooterColumn
          title="Company"
          links={companyLinks}
        />

        {/* =================================================
            HELP
        ================================================= */}

        <FooterColumn
          title="Help"
          links={helpLinks}
        />

        {/* =================================================
            FAQ
        ================================================= */}

        <FooterColumn
          title="FAQ"
          links={faqLinks}
        />

        {/* =================================================
            RESOURCES
        ================================================= */}

        <FooterColumn
          title="Resources"
          links={resourcesLinks}
        />
      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          gap-4
          border-t
          border-black/10
          px-3
          py-4
          sm:px-6
          md:flex-row
          md:items-center
          md:justify-between
          md:px-8
          lg:px-10
          xl:px-0
        "
      >

        {/* Copyright */}
        <Paragraph
          className="
            text-center
            text-[8px]
            sm:text-[9px]
            md:text-left
          "
        >
          Shop.co © 2000-2023, All Rights Reserved
        </Paragraph>

        {/* Payment logos */}
        <div className="flex items-center justify-center gap-1.5">
          <PaymentLogo>
            <span className="text-[#1434CB]">VISA</span>
          </PaymentLogo>

          <PaymentLogo>
            <span>🔴</span>
            <span>🟡</span>
          </PaymentLogo>

          <PaymentLogo>
            <span className="text-[#0070BA]">Pay</span>
          </PaymentLogo>

          <PaymentLogo>
            <span>Pay</span>
          </PaymentLogo>

          <PaymentLogo>
            <span>G Pay</span>
          </PaymentLogo>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
