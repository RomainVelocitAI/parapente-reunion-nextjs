"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// CSS bounce animation
const bounceStyle = `
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.bounce {
  animation: bounceFloat 3s ease-in-out infinite;
}
`;

interface GiftCardItem {
  id: string;
  title: string;
  price: number;
  selected: boolean;
  quantity: number;
}

interface GiftCardCheckoutCardProps {
  items: GiftCardItem[];
  onItemsChange: (items: GiftCardItem[]) => void;
  className?: string;
}

export function GiftCardCheckoutCard({
  items,
  onItemsChange,
  className,
}: GiftCardCheckoutCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, selected: checked, quantity: checked ? 1 : 0 } : item
    );
    onItemsChange(updatedItems);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    );
    onItemsChange(updatedItems);
  };

  const totalPrice = items.reduce((sum, item) =>
    item.selected ? sum + (item.price * item.quantity) : sum, 0
  );

  const handleCheckout = async () => {
    const selectedItems = items.filter(item => item.selected && item.quantity > 0);

    if (selectedItems.length === 0) {
      alert("Veuillez sélectionner au moins une carte cadeau");
      return;
    }

    // TODO: Intégrer Stripe Checkout
    console.log("Items sélectionnés:", selectedItems);
    console.log("Total:", totalPrice);
    alert(`Paiement de ${totalPrice}€ - Intégration Stripe à venir`);
  };

  return (
    <>
      {/* Inject bounce CSS */}
      <style>{bounceStyle}</style>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 0.98, boxShadow: "0px 15px 35px rgba(0,0,0,0.25)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={cn("relative cursor-pointer rounded-2xl", className)}
      >
        {/* Card */}
        <Card className="relative z-10 rounded-2xl border bg-card p-6 min-h-[600px] flex flex-col overflow-hidden">
          <CardHeader className="p-0 mb-6 relative z-10">
            <span className="inline-block bg-[#021157] px-6 py-3 rounded-full text-2xl font-bold text-[#FFD700] whitespace-nowrap min-w-[200px] max-w-full text-center">
              Cartes Cadeaux
            </span>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col relative z-10">
            {/* Liste des cartes avec checkboxes */}
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-[#021157]/20"
                >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                    className="w-5 h-5 accent-[#021157] cursor-pointer"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#021157]">{item.title}</p>
                    <p className="text-xs text-[#021157]/70">{item.price}€</p>
                  </div>

                  {item.selected && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-[#021157] text-white rounded-full hover:bg-[#021157]/90 transition-colors flex items-center justify-center text-lg font-bold"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 h-7 text-center border border-[#021157] rounded text-sm font-semibold text-[#021157]"
                        min="1"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-[#021157] text-white rounded-full hover:bg-[#021157]/90 transition-colors flex items-center justify-center text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Prix Total */}
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border-2 border-[#021157] mb-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#021157]">Total</span>
                <span className="text-3xl font-bold text-[#021157]">{totalPrice}€</span>
              </div>
            </div>

            {/* Bouton Stripe Checkout */}
            <button
              onClick={handleCheckout}
              disabled={totalPrice === 0}
              className="w-full inline-flex items-center justify-center rounded-lg px-6 py-4 text-lg font-bold bg-[#FFD700] hover:bg-[#FFC700] text-[#021157] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Payer {totalPrice > 0 ? `${totalPrice}€` : ''}
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
