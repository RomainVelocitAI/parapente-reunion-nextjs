"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// CSS bounce animation (can also go into globals.css if preferred)
const bounceStyle = `
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.bounce {
  animation: bounceFloat 3s ease-in-out infinite;
}
`;

interface FlightDuration {
  value: number;
  label: string;
  price: number;
  description: string;
}

interface ShirtParallaxCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  className?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  // Props pour le slider interactif
  interactive?: boolean;
  durations?: FlightDuration[];
  onDurationChange?: (index: number) => void;
}

export function ShirtParallaxCard({
  title,
  description,
  price,
  imageUrl = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_shirt_product.png",
  className,
  buttonText = "Buy Now",
  buttonHref = "#",
  backgroundImage,
  interactive = false,
  durations = [],
  onDurationChange,
}: ShirtParallaxCardProps) {
  const [selectedDuration, setSelectedDuration] = React.useState(2);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleSliderChange = (index: number) => {
    setSelectedDuration(index);
    onDurationChange?.(index);
  };

  const currentDuration = interactive && durations.length > 0 ? durations[selectedDuration] : null;

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

  return (
    <>
      {/* Inject bounce CSS */}
      <style>{bounceStyle}</style>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 0.97, boxShadow: "0px 15px 35px rgba(0,0,0,0.25)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={cn("relative w-96 cursor-pointer rounded-2xl", className)}
      >
        {/* Card */}
        <Card
          className="relative z-10 rounded-2xl border bg-card p-4 min-h-[320px] flex flex-col overflow-hidden"
          style={backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : {}}
        >
          <CardHeader className="p-0 mb-4 relative z-10">
            <span className="inline-block bg-[#021157] px-4 py-2 rounded-full text-xl font-bold text-[#FFD700] whitespace-nowrap min-w-[200px] max-w-[280px] text-center">
              {title}
            </span>
          </CardHeader>
          <CardContent className="p-0 max-w-[280px] flex-1 flex flex-col relative z-10">
            {interactive && currentDuration ? (
              <>
                {/* Prix dynamique */}
                <div className="mb-4">
                  <p className="text-3xl font-bold text-[#021157]">{currentDuration.price}€</p>
                  <p className="text-sm text-[#021157]/70">Durée : {currentDuration.label}</p>
                </div>

                {/* Slider */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-[#021157] mb-2">
                    Choisissez la durée
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={durations.length - 1}
                    value={selectedDuration}
                    onChange={(e) => handleSliderChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                    style={{
                      background: `linear-gradient(to right, #021157 0%, #021157 ${(selectedDuration / (durations.length - 1)) * 100}%, #e5e7eb ${(selectedDuration / (durations.length - 1)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-gray-600">
                    <span>15min</span>
                    <span>30min</span>
                    <span>45min</span>
                    <span>60min</span>
                  </div>
                </div>

                {/* Description dynamique */}
                <p className="text-xs text-[#021157] flex-1 mb-3">{currentDuration.description}</p>
              </>
            ) : (
              <>
                <p className="text-sm text-[#021157] flex-1">{description}</p>
                <p className="mt-3 text-lg font-semibold text-[#021157]">{price}</p>
              </>
            )}

            <a
              href={buttonHref}
              className="mt-4 w-full inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#021157] hover:bg-[#021157]/90 text-white transition-colors shadow-sm"
            >
              {buttonText}
            </a>
          </CardContent>
        </Card>

        {/* Shirt image */}
        <motion.img
          src={imageUrl}
          alt={title}
          className={cn(
            "absolute -top-12 -right-20 h-48 w-auto object-contain pointer-events-none z-20 bounce"
          )}
          whileHover={{
            scale: 1.15,
            y: -6,
            boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
