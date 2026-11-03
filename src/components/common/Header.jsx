import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <>
      <header className="w-full border-b border-mid-cream bg-soft-cream py-2 sm:py-4 overflow-hidden">
        <nav className="mx-auto flex max-w-360 items-center justify-between px-4 sm:px-10 lg:px-20">
          <a href="/" className="shrink-0">
            <img
              width="106"
              height="33"
              src="/images/webp/Claywell.webp"
              alt="Claywell"
              className="h-auto xl:min-h-8.25 max-w-26.5 object-contain"
            />
          </a>

          <ul className="hidden items-center gap-8 leading-[113%] lg:flex xl:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-15 leading-100 font-medium text-dark-brown-900 transition-all duration-300 hover:text-orange-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

           <div className="flex items-center gap-5">
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
              aria-label={`Shopping cart, ${count} ${count === 1 ? "item" : "items"}`}
              className="relative flex sm:h-12 h-9 w-9 sm:w-12 cursor-pointer items-center justify-center rounded-full bg-dark-warm-charcoal text-white transition-colors hover:bg-orange-100"
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
                <path
                  d="M8.25 19.7083C9.00939 19.7083 9.625 19.0927 9.625 18.3333C9.625 17.5739 9.00939 16.9583 8.25 16.9583C7.49061 16.9583 6.875 17.5739 6.875 18.3333C6.875 19.0927 7.49061 19.7083 8.25 19.7083Z"
                  fill="#FAF6F0"
                />
                <path
                  d="M16.5 19.7083C17.2594 19.7083 17.875 19.0927 17.875 18.3333C17.875 17.5739 17.2594 16.9583 16.5 16.9583C15.7406 16.9583 15.125 17.5739 15.125 18.3333C15.125 19.0927 15.7406 19.7083 16.5 19.7083Z"
                  fill="#FAF6F0"
                />
              </svg>

              {count > 0 && (
                <span className="absolute -right-0.75 -top-0.75 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-100 px-1 text-11 font-bold">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#292522]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-mid-cream bg-soft-cream px-5 py-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-warm-gray-500 hover:text-orange-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

       <CartDrawer />
    </>
  );
};

export default Header;
