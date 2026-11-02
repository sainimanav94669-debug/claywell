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
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#eee5dc] px-5 py-4">
          <h2 className="text-base font-medium text-[#2B2622]">
            Your cart ({count})
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid h-8 w-8 place-items-center rounded-full bg-[#f3ece4] text-[#2B2622] transition-colors hover:bg-[#eadfd3]"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {empty ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f7efe7] text-[#C2603A]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
            </div>
            <p className="text-base font-medium text-[#2B2622]">
              Your cart is empty
            </p>
            <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-[#7A6F65]">
              Looks like you have not added any crockery yet. Browse our
              collections to find something you love.
            </p>
            <button
              type="button"
              onClick={() => goToProducts(closeCart)}
              className="mt-6 rounded-full bg-[#C2603A] px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
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
                  className="flex gap-3 border-b border-[#eee5dc] px-5 py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    className="h-16 w-14 shrink-0 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-[#2B2622]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#7A6F65]">
                      {item.description}
                    </p>

                    <div className="mt-2 inline-flex items-center rounded-full border border-[#e5dbd0]">
                      <button
                        type="button"
                        onClick={() => decrease(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="grid h-6 w-6 place-items-center rounded-full text-sm text-[#2B2622] hover:bg-[#f3ece4]"
                      >
                        −
                      </button>
                      <span className="min-w-5 text-center text-xs tabular-nums text-[#2B2622]">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => increase(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="grid h-6 w-6 place-items-center rounded-full text-sm text-[#2B2622] hover:bg-[#f3ece4]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-[#a69b91] transition-colors hover:text-[#C2603A]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6" />
                      </svg>
                    </button>
                    <span className="text-[13px] font-bold text-[#2B2622]">
                      {inr.format(item.price * item.qty)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-[#eee5dc] px-5 pb-5 pt-4">
              {coupon ? (
                <div className="flex items-center justify-between rounded-lg bg-[#f7efe7] px-4 py-2.5 text-xs text-[#2B2622]">
                  <span>
                    <b className="tracking-wide">{coupon}</b> applied
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      removeCoupon();
                      setNote(null);
                    }}
                    className="text-[#C2603A] hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex items-center gap-2 rounded-lg bg-[#f7efe7] p-1">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Discount code"
                    aria-label="Discount code"
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs uppercase text-[#2B2622] placeholder:normal-case placeholder:text-[#a69b91] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-[#2B2622] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#c65e38]"
                  >
                    Apply
                  </button>
                </form>
              )}

              {note && !coupon && (
                <p className={`mt-1.5 text-[11px] ${note.ok ? "text-green-700" : "text-[#C2603A]"}`} role="status">
                  {note.message}
                </p>
              )}

              <dl className="mt-4 space-y-2 text-xs text-[#2B2622]">
                <div className="flex justify-between">
                  <dt className="text-[#7A6F65]">Subtotal</dt>
                  <dd>{inr.format(subtotal)}</dd>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <dt>Discount ({coupon})</dt>
                    <dd>−{inr.format(discount)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-[#7A6F65]">Shipping</dt>
                  <dd>{shipping === 0 ? "Free" : inr.format(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-[#eee5dc] pt-2 text-sm font-bold">
                  <dt>Total</dt>
                  <dd>{inr.format(total)}</dd>
                </div>
              </dl>

              <a
                href={checkoutHref}
                className="mt-4 block rounded-full bg-[#C2603A] py-3.5 text-center text-sm font-medium text-white transition hover:brightness-110"
              >
                Checkout - {inr.format(total)}
              </a>

              <button
                type="button"
                onClick={() => goToProducts(closeCart)}
                className="mt-3 block w-full text-center text-xs text-[#7A6F65] hover:text-[#2B2622]"
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
