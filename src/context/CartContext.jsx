import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CART_KEY = "claywell-cart-v2";
const COUPON_KEY = "claywell-coupon";

export const FREE_SHIPPING_MIN = 1999;
export const SHIPPING_FEE = 99;
const COUPONS = {

  CLAY30: {
    percent: 30,
    category: "dinner-sets",
    expires: () => new Date(new Date().getFullYear(), 10, 15, 23, 59, 59),
  },
};


const CartContext = createContext(null);

function read(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = read(CART_KEY, []);
    return Array.isArray(saved) ? saved : [];
  });
  const [couponCode, setCouponCode] = useState(() => read(COUPON_KEY, ""));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
      localStorage.setItem(COUPON_KEY, JSON.stringify(couponCode));
    } catch { }
  }, [items, couponCode]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, { open = false } = {}) => {
    setItems((list) => {
      const found = list.find((i) => i.id === product.id);

      if (found) {
        return list.map((i) =>
          i.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...list, { ...product, qty: 1 }];
    });

    if (open) setIsOpen(true);
  }, []);

  const increase = useCallback(
    (id) =>
      setItems((l) => l.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))),
    []
  );

  const decrease = useCallback(
    (id) =>
      setItems((l) =>
        l
          .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0)
      ),
    []
  );

  const removeItem = useCallback(
    (id) => setItems((l) => l.filter((i) => i.id !== id)),
    []
  );

  const clearCart = useCallback(() => {
    setItems([]);
    setCouponCode("");
  }, []);

  const removeCoupon = useCallback(() => setCouponCode(""), []);


  const totals = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);

    const rule = COUPONS[couponCode];
    const eligible = rule
      ? items
        .filter((i) => i.category === rule.category)
        .reduce((n, i) => n + i.price * i.qty, 0)
      : 0;
    const discount = rule ? Math.round((eligible * rule.percent) / 100) : 0;
    const activeCoupon = rule && discount > 0 ? couponCode : "";

    const afterDiscount = subtotal - discount;
    const shipping =
      count === 0 || afterDiscount >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;

    return {
      count,
      subtotal,
      discount,
      shipping,
      total: afterDiscount + shipping,
      coupon: activeCoupon,
    };
  }, [items, couponCode]);


  const applyCoupon = useCallback(
    (raw) => {
      const code = raw.trim().toUpperCase();
      if (!code) return { ok: false, message: "Enter a discount code." };
      const rule = COUPONS[code];
      if (!rule) return { ok: false, message: "That code isn't valid." };
      if (new Date() > rule.expires())
        return { ok: false, message: "This code has expired." };
      const hasEligible = items.some((i) => i.category === rule.category);
      if (!hasEligible)
        return {
          ok: false,
          message: `${code} works on dinner sets. Add one to use it.`,
        };
      setCouponCode(code);
      return { ok: true, message: `${code} applied. You saved ${rule.percent}% on dinner sets.` };
    },
    [items]
  );

  const value = {
    items,
    ...totals,
    isOpen,
    openCart,
    closeCart,
    addItem,
    increase,
    decrease,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
