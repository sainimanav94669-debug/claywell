import { useEffect, useRef, useState } from "react";
import { useCart } from "../../context/CartContext";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="112" height="128"><rect width="100%" height="100%" fill="#f3ece4"/></svg>`
  );

function goToProducts(close) {
  close();
  setTimeout(
    () =>
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    320
  );
}

export default function CartDrawer({ checkoutHref = "/checkout" }) {
  const {
    items,
    count,
    subtotal,
    discount,
    shipping,
    total,
    coupon,
    isOpen,
    closeCart,
    increase,
    decrease,
    removeItem,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [code, setCode] = useState("");
  const [note, setNote] = useState(null); // { ok, message }
  const closeRef = useRef(null);

  // Esc to close, lock page scroll, focus the close button
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeCart]);

  const handleApply = (e) => {
    e.preventDefault();
    const res = applyCoupon(code);
    setNote(res);
    if (res.ok) setCode("");
  };

  const empty = items.length === 0;

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "visible" : "invisible transition-[visibility] delay-300"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-110 flex-col bg-white shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b max-w-110 border-[#eee5dc] px-6 py-6">
          <h2 className="text-2xl leading-117 font-medium text-dark-warm-charcoal">
            Your cart ({count})
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#f3ece4] text-dark-warm-charcoal cursor-pointer transition-colors hover:bg-[#eadfd3]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 4.5L9 9M9 9L13.5 13.5M9 9L13.5 4.5M9 9L4.5 13.5" stroke-width="1.5" stroke-linecap="round" stroke="#2B2622"/>
</svg>

          </button>
        </div>

        {empty ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">
            <div className="mb-4 grid h-24 w-24 place-items-center rounded-full bg-[#F6F0E8] text-orange-100">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
            </div>
            <p className="text-2xl font-medium leading-117 text-dark-warm-charcoal">
              Your cart is empty
            </p>
            <p className="mt-4 max-w-80.5 text-15 leading-120 font-normal text-dark-brown-900">
              Looks like you have not added any crockery yet. Browse our
              collections to find something you love.
            </p>
            <button
              type="button"
              onClick={() => goToProducts(closeCart)}
              className="mt-4 rounded-full bg-orange-100 cursor-pointer px-3 py-4.5 text-base leading-120 min-w-42.5 font-medium text-white transition hover:brightness-110"
            >
              Start shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border-b border-mid-cream px-6 py-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    className="h-22 w-22 shrink-0 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-17 leading-118 font-medium text-dark-warm-charcoal">
                      {item.name}
                    </p>
                    <p className="mt-1.5 text-13 font-normal leading-116 text-warm-gray-200">
                      {item.description}
                    </p>

                    <div className="mt-1.5 inline-flex items-center rounded-full border border-mid-cream">
                      <button
                        type="button"
                        onClick={() => decrease(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="grid h-9 w-9 place-items-center cursor-pointer rounded-full text-sm text-dark-brown-900 hover:bg-[#f3ece4]"
                      >
                        −
                      </button>
                      <span className="min-w-4 text-center text-sm leading-115 tabular-nums text-dark-warm-charcoal">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => increase(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="grid h-9 w-9 cursor-pointer place-items-center rounded-full text-sm text-dark-warm-charcoal hover:bg-[#f3ece4]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-9">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-[#a69b91] transition-colors hover:text-orange-100 cursor-pointer"
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.25H4.5M4.5 5.25H6.75M4.5 5.25L5.25 15H12.75L13.5 5.25M6.75 5.25H11.25M6.75 5.25V3H11.25V5.25M11.25 5.25H13.5M13.5 5.25H15M7.5 8.25V12.75M10.5 8.25V12.75" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" stroke="#9A8F85"/>
</svg>

                    </button>
                    <span className="text-13 font-bold text-dark-warm-charcoal">
                      {inr.format(item.price * item.qty)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-[#eee5dc] px-6 py-6 ">
              {coupon ? (
                <div className="flex items-center justify-between rounded-lg bg-[#f7efe7] px-4 py-2.5 text-xs text-dark-warm-charcoal">
                  <span>
                    <b className="tracking-wide">{coupon}</b> applied
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      removeCoupon();
                      setNote(null);
                    }}
                    className="text-orange-100 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex items-center gap-2 rounded-lg bg-[#f7efe7] pr-1.5">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Discount code"
                    aria-label="Discount code"
                    className="min-w-0 flex-1 bg-transparent px-4 py-4 leading-115 text-sm uppercase text-mid-gray-300 placeholder:normal-case placeholder:text-[#a69b91] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-dark-warm-charcoal px-4 py-2.5 leading-123 text-13 font-medium text-white transition-colors hover:bg-[#c65e38] group relative max-w-44.25 overflow-hidden border-0   duration-300 ease-out cursor-pointer   hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)]   before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent   before:transition-transform before:duration-700 hover:before:translate-x-full "
                  >
                    Apply
                  </button>
                </form>
              )}

              {note && !coupon && (
                <p className={`mt-1.5 text-11 ${note.ok ? "text-green-700" : "text-orange-100"}`} role="status">
                  {note.message}
                </p>
              )}

              <dl className="mt-4.5 space-y-2 text-sm font-medium leading-116 text-dark-brown-900">
                <div className="flex justify-between">
                  <dt className="text-dark-brown-900">Subtotal</dt>
                  <dd>{inr.format(subtotal)}</dd>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <dt>Discount ({coupon})</dt>
                    <dd>−{inr.format(discount)}</dd>
                  </div>
                )}
                <div className="flex justify-between text-sm font-medium  leading-116 my-3.5">
                  <dt className=" text-dark-brown-900">Shipping</dt>
                  <dd>{shipping === 0 ? "Free" : inr.format(shipping)}</dd>
                </div>
                <div className="flex justify-between leading-117 text-18 font-medium">
                  <dt>Total</dt>
                  <dd>{inr.format(total)}</dd>
                </div>
              </dl>

              <button
                href={checkoutHref}
                className="mt-3.5 block rounded-full w-full bg-orange-100 py-4.5 text-center text-sm font-medium cursor-pointer text-white transition hover:brightness-110 group relative overflow-hidden border-0  duration-300 ease-out  hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(194,96,58,0.35)] active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full "
              >
                Checkout - {inr.format(total)}
              </button>

              <button
                type="button"
                onClick={() => goToProducts(closeCart)}
                className="mt-3.5 block w-full text-center text-sm leading-115 text-dark-brown-900 cursor-pointer hover:text-dark-warm-charcoal"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
