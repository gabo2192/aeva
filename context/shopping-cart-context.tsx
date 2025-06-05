"use client";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

export const ShoppingCartContext = createContext<{
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}>({
  quantity: 0,
  setQuantity: () => {},
});

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ShoppingCartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
