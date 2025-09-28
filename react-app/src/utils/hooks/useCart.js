import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartCount,
} from "@store/selectors/cartSelectors";
import { calcSubtotal, calcTotal } from "@utils/helpers/calculations";

export const useCart = () => {
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const totals = useMemo(() => {
    const subtotal = calcSubtotal(items);
    const total = calcTotal({ subtotal, discounts: 0, tax: 0, shipping: 0 });
    return { subtotal, total };
  }, [items]);
  return { items, count, ...totals };
};
