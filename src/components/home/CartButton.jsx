import { useCart } from "../../context/CartContext";

export default function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative grid h-9 w-9 place-items-center rounded-full bg-dark-warm-charcoal  text-white transition-colors hover:bg-orange-100"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>

      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid min-h-4.5 min-w-4.5 place-items-center rounded-full bg-orange-100 px-1 text-10 font-semibold leading-none text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
