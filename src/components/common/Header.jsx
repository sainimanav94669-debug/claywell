
import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

const Header = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Dinnerware", href: "/dinnerware" },
    { name: "Drinkware", href: "/drinkware" },
    { name: "About", href: "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      console.log("Searching for:", search);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="relative z-40 w-full overflow-hidden border-b border-mid-cream bg-soft-cream py-2 sm:py-4">
        <nav className="mx-auto flex max-w-360 items-center justify-between px-4 sm:px-10 lg:px-20">

          <a href="/" className="shrink-0">
            <img
              width="106"
              height="33"
              src="/images/webp/Claywell.webp"
              alt="Claywell"
              className="h-auto max-w-26.5 object-contain xl:min-h-8.25"
            />
          </a>


          <ul className="hidden items-center gap-8 leading-[113%] lg:flex xl:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-15 font-medium leading-100 text-dark-brown-900 transition-all duration-300 hover:text-orange-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>


          <div className="flex items-center gap-3 sm:gap-5">
            <form
              onSubmit={handleSearch}
              className="hidden w-60 items-center rounded-full border border-mid-cream bg-white px-4.5 py-3.25 sm:flex"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search crockery..."
                className="w-full bg-transparent text-sm leading-115 outline-none placeholder:text-mid-gray-300"
              />
            </form>


            <button
              type="button"
              onClick={openCart}
              aria-label={`Shopping cart, ${count} items`}
              className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-dark-warm-charcoal text-white transition-colors hover:bg-orange-100 sm:h-12 sm:w-12"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.5 5.5H19.25L17.875 13.75H6.875L5.5 5.5Z"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#FAF6F0"
                />
                <path
                  d="M5.50004 5.5L4.58337 2.75H1.83337"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#FAF6F0"
                />
                <circle cx="8.25" cy="18.3333" r="1.375" fill="#FAF6F0" />
                <circle cx="16.5" cy="18.3333" r="1.375" fill="#FAF6F0" />
              </svg>

              {count > 0 && (
                <span className="absolute -right-0.75 -top-0.75 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-100 px-1 text-11 font-bold">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>


            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full  text-dark-brown-900 transition-all duration-300 hover:bg-dark-warm-charcoal hover:text-white lg:hidden sm:h-12 sm:w-12"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>


      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "visible" : "invisible pointer-events-none"
          }`}
      >

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
        />


        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-soft-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >

          <div className="flex items-center justify-between border-b border-mid-cream px-6 py-5">
            <a href="/" onClick={closeMenu}>
              <img
                src="/images/webp/Claywell.webp"
                alt="Claywell"
                className="w-26.5 object-contain"
              />
            </a>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-warm-charcoal text-white transition-transform duration-300 hover:rotate-90 hover:bg-orange-100"
            >
              <X size={20} />
            </button>
          </div>


          <form
            onSubmit={handleSearch}
            className="mx-6 mt-6 flex items-center rounded-full border border-mid-cream bg-white px-4 py-3"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search crockery..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-mid-gray-300"
            />
          </form>


          <nav className="flex-1 px-6 pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray-300">
              Explore Claywell
            </p>

            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{ transitionDelay: menuOpen ? `${index * 70}ms` : "0ms" }}
                  className={`border-b border-mid-cream transition-all duration-500 ${menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                    }`}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-5 text-xl font-medium text-dark-brown-900 transition-colors hover:text-orange-100"
                  >
                    {item.name}

                    
                  </a>
                </li>
              ))}
            </ul>
          </nav>


           
        </aside>
      </div>

      <CartDrawer />
    </>
  );
};

export default Header;
