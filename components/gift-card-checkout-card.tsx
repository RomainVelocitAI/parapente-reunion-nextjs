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
  minQuantity?: number;
  isForGift?: boolean;
}

interface GiftCardFormData {
  // Informations du payeur
  buyerFirstName: string;
  buyerLastName: string;
  buyerEmail: string;
  buyerPhone: string;
  // Informations du destinataire
  recipientType: 'self' | 'gift';
  sendEmail: boolean;
  recipientEmail: string;
  recipientName: string;
  message: string;
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

  // Step management
  const [step, setStep] = React.useState<'selection' | 'form'>('selection');

  // Loading state
  const [isLoading, setIsLoading] = React.useState(false);

  // Form state
  const [formData, setFormData] = React.useState<GiftCardFormData>({
    buyerFirstName: '',
    buyerLastName: '',
    buyerEmail: '',
    buyerPhone: '',
    recipientType: 'self',
    sendEmail: false,
    recipientEmail: '',
    recipientName: '',
    message: '',
  });

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
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const initialQuantity = item.minQuantity || 1;
        return {
          ...item,
          selected: checked,
          quantity: checked ? initialQuantity : 0
        };
      }
      return item;
    });
    onItemsChange(updatedItems);

    // Si c'est vol-marmaille, forcer le mode "gift"
    const selectedItem = items.find(item => item.id === id);
    if (selectedItem?.isForGift && checked) {
      setFormData({ ...formData, recipientType: 'gift' });
    }
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const minQty = item.minQuantity || 1;
        return { ...item, quantity: Math.max(minQty, quantity) };
      }
      return item;
    });
    onItemsChange(updatedItems);
  };

  const totalPrice = items.reduce((sum, item) =>
    item.selected ? sum + (item.price * item.quantity) : sum, 0
  );

  const handleNextStep = () => {
    const selectedItems = items.filter(item => item.selected && item.quantity > 0);

    if (selectedItems.length === 0) {
      alert("Veuillez sélectionner au moins une carte cadeau");
      return;
    }

    setStep('form');
  };

  const handleCheckout = async () => {
    // Validation des informations du payeur
    if (!formData.buyerFirstName || !formData.buyerLastName || !formData.buyerEmail || !formData.buyerPhone) {
      alert("Veuillez renseigner toutes vos informations personnelles");
      return;
    }

    // Validation du formulaire destinataire
    if (formData.recipientType === 'gift' && formData.sendEmail) {
      if (!formData.recipientEmail || !formData.recipientName) {
        alert("Veuillez renseigner le nom et l'email du destinataire");
        return;
      }
    }

    const selectedItems = items.filter(item => item.selected && item.quantity > 0);

    setIsLoading(true);

    try {
      // Appel à l'API pour créer la session Stripe
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: selectedItems,
          formData: formData,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setIsLoading(false);
        alert(`Erreur: ${data.error}`);
        return;
      }

      // Redirection vers Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Erreur lors du checkout:', error);
      alert('Une erreur est survenue lors du paiement. Veuillez réessayer.');
    }
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
        <Card className="relative z-10 rounded-2xl border bg-card p-6 min-h-[700px] flex flex-col overflow-hidden">
          <CardHeader className="p-0 mb-6 relative z-10">
            <span className="inline-block bg-[#021157] px-6 py-3 rounded-full text-2xl font-bold text-[#FFD700] whitespace-nowrap min-w-[200px] max-w-full text-center">
              Cartes Cadeaux
            </span>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col relative z-10">
            {/* ÉTAPE 1 : Sélection des cartes */}
            {step === 'selection' && (
              <>
                {/* Liste des cartes cliquables */}
                <div className="space-y-3 mb-6 flex-1 pr-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!item.selected) {
                      handleCheckboxChange(item.id, true);
                    }
                  }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer",
                    item.selected
                      ? "bg-[#021157] border-[#021157] shadow-lg"
                      : "bg-white/80 backdrop-blur-sm border-[#021157]/20 hover:border-[#021157]/50 hover:shadow-md"
                  )}
                >
                  <div className="flex-1">
                    <p className={cn(
                      "text-sm font-semibold",
                      item.selected ? "text-white" : "text-[#021157]"
                    )}>
                      {item.title}
                    </p>
                    <p className={cn(
                      "text-xs",
                      item.selected ? "text-white/80" : "text-[#021157]/70"
                    )}>
                      {item.price}€
                    </p>
                  </div>

                  {item.selected && (
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-white text-[#021157] rounded-full hover:bg-white/90 transition-colors flex items-center justify-center text-lg font-bold disabled:opacity-50"
                        disabled={item.quantity <= (item.minQuantity || 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 h-7 text-center border-2 border-white bg-white rounded text-sm font-semibold text-[#021157]"
                        min="1"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-white text-[#021157] rounded-full hover:bg-white/90 transition-colors flex items-center justify-center text-lg font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleCheckboxChange(item.id, false)}
                        className="ml-2 w-7 h-7 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center justify-center text-lg font-bold"
                        title="Retirer"
                      >
                        ×
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

                {/* Bouton Suivant */}
                <button
                  onClick={handleNextStep}
                  disabled={totalPrice === 0}
                  className="w-full inline-flex items-center justify-center rounded-lg px-6 py-4 text-lg font-bold bg-[#021157] hover:bg-[#021157]/90 text-white transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Suivant →
                </button>
              </>
            )}

            {/* ÉTAPE 2 : Formulaire d'informations */}
            {step === 'form' && (
              <>
            {/* Formulaire d'informations */}
            <div className="space-y-6 mb-6">
              {/* Informations du payeur */}
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-[#021157]/20 space-y-4">
                <h3 className="text-base font-bold text-[#021157] mb-3">Vos informations</h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-[#021157] mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.buyerFirstName}
                      onChange={(e) => setFormData({ ...formData, buyerFirstName: e.target.value })}
                      className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                      placeholder="Prénom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#021157] mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.buyerLastName}
                      onChange={(e) => setFormData({ ...formData, buyerLastName: e.target.value })}
                      className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#021157] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.buyerEmail}
                    onChange={(e) => setFormData({ ...formData, buyerEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#021157] mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.buyerPhone}
                    onChange={(e) => setFormData({ ...formData, buyerPhone: e.target.value })}
                    className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                    placeholder="06 XX XX XX XX"
                    required
                  />
                </div>
              </div>

              {/* Informations du destinataire */}
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-[#021157]/20 space-y-4">
                <h3 className="text-base font-bold text-[#021157] mb-3">Destinataire de la carte</h3>

                {/* Type de destinataire */}
                <div>
                <label className="block text-sm font-semibold text-[#021157] mb-2">
                  Cette carte cadeau est pour :
                </label>
                {items.some(item => item.selected && item.isForGift) && (
                  <p className="text-xs text-orange-600 mb-2 italic">
                    Le vol Marmaille est obligatoirement un cadeau (pour enfant)
                  </p>
                )}
                <div className="flex gap-4">
                  <label className={`flex items-center gap-2 ${items.some(item => item.selected && item.isForGift) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                    <input
                      type="radio"
                      name="recipientType"
                      value="self"
                      checked={formData.recipientType === 'self'}
                      onChange={(e) => setFormData({ ...formData, recipientType: e.target.value as 'self' | 'gift' })}
                      className="w-4 h-4 accent-[#021157]"
                      disabled={items.some(item => item.selected && item.isForGift)}
                    />
                    <span className="text-sm text-[#021157]">Moi-même</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recipientType"
                      value="gift"
                      checked={formData.recipientType === 'gift'}
                      onChange={(e) => setFormData({ ...formData, recipientType: e.target.value as 'self' | 'gift' })}
                      className="w-4 h-4 accent-[#021157]"
                    />
                    <span className="text-sm text-[#021157]">Offrir</span>
                  </label>
                </div>
              </div>

              {/* Options si c'est un cadeau */}
              {formData.recipientType === 'gift' && (
                <>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sendEmail}
                        onChange={(e) => setFormData({ ...formData, sendEmail: e.target.checked })}
                        className="w-4 h-4 accent-[#021157]"
                      />
                      <span className="text-sm text-[#021157]">
                        Envoyer la carte par email au destinataire
                      </span>
                    </label>
                    <p className="text-xs text-[#021157]/60 mt-1 ml-6">
                      Décochez si vous souhaitez remettre la carte vous-même
                    </p>
                  </div>

                  {formData.sendEmail && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-[#021157] mb-2">
                          Nom du destinataire *
                        </label>
                        <input
                          type="text"
                          value={formData.recipientName}
                          onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                          className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                          placeholder="Prénom et nom"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#021157] mb-2">
                          Email du destinataire *
                        </label>
                        <input
                          type="email"
                          value={formData.recipientEmail}
                          onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                          className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50"
                          placeholder="email@exemple.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#021157] mb-2">
                          Message personnalisé (optionnel)
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= 200) {
                              setFormData({ ...formData, message: value });
                            }
                          }}
                          className="w-full px-3 py-2 border border-[#021157] rounded-lg text-sm text-[#021157] focus:outline-none focus:ring-2 focus:ring-[#021157]/50 resize-none"
                          placeholder="Votre message pour le destinataire..."
                          rows={3}
                          maxLength={200}
                        />
                        <p className="text-xs text-[#021157]/60 mt-1">
                          {formData.message.length}/200 caractères
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
              </div>
            </div>

                {/* Prix Total */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border-2 border-[#021157] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#021157]">Total</span>
                    <span className="text-3xl font-bold text-[#021157]">{totalPrice}€</span>
                  </div>
                </div>

                {/* Boutons de navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('selection')}
                    disabled={isLoading}
                    className="flex-1 inline-flex items-center justify-center rounded-lg px-6 py-4 text-lg font-bold bg-white border-2 border-[#021157] text-[#021157] hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-lg font-bold bg-[#FFD700] hover:bg-[#FFC700] text-[#021157] transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#021157]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Redirection vers le paiement...</span>
                      </>
                    ) : (
                      <>Payer {totalPrice}€</>
                    )}
                  </button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
