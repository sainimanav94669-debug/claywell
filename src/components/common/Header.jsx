
import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);

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
    <header className="w-full border-b border-[#e8e1d8] bg-[#FAF6F0] py-2 sm:py-4 overflow-hidden">
      <nav className="mx-auto flex   max-w-360 items-center justify-between px-4 sm:px-10 lg:px-20">

        
        <a href="/" className="shrink-0">
          <img width="106" height="33" src="/images/webp/Claywell.webp" alt="Claywell"  className="h-auto xl:min-h-8.25 max-w-26.5 object-contain" />
        </a>

         
        <ul className="hidden items-center gap-8 leading-[113%] lg:flex xl:gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-[15px] leading-[100%] font-medium text-[#5A5048] transition-all duration-300 hover:text-[#c65d3d]" > {item.name} </a>
            </li>
          ))}
        </ul>

        {/* Search and Cart */}
        <div className="flex items-center gap-5">
          <form
            onSubmit={handleSearch}
            className="hidden w-60 items-center rounded-full border border-[#E6DCCF] bg-white px-4.5 py-3.25 sm:flex"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search crockery..."
              className="w-full bg-transparent text-sm leading-[115%] outline-none placeholder:text-[#9A8F85]"
            />

             
          </form>

          <button
            aria-label="Shopping cart"
            className="relative flex sm:h-12 h-9 w-9 sm:w-12 cursor-pointer items-center justify-center rounded-full bg-[#292522] text-white transition-colors hover:bg-[#c65d3d]"
          >
             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 5.5H19.25L17.875 13.75H6.875L5.5 5.5Z" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#FAF6F0"/>
<path d="M5.50004 5.5L4.58337 2.75H1.83337" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#FAF6F0"/>
<path d="M8.25 19.7083C9.00939 19.7083 9.625 19.0927 9.625 18.3333C9.625 17.5739 9.00939 16.9583 8.25 16.9583C7.49061 16.9583 6.875 17.5739 6.875 18.3333C6.875 19.0927 7.49061 19.7083 8.25 19.7083Z" fill="#FAF6F0"/>
<path d="M16.5 19.7083C17.2594 19.7083 17.875 19.0927 17.875 18.3333C17.875 17.5739 17.2594 16.9583 16.5 16.9583C15.7406 16.9583 15.125 17.5739 15.125 18.3333C15.125 19.0927 15.7406 19.7083 16.5 19.7083Z" fill="#FAF6F0"/>
</svg>


            <span className="absolute -right-0.75 -top-0.75 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c65d3d]   text-[11px] font-bold">
              {cartCount}
            </span>
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
        <div className="border-t border-[#e8e1d8] bg-[#f8f5ef] px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#49413a] hover:text-[#c65d3d]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

