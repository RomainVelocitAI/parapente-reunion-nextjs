"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

interface InteractiveFlightCardProps {
  title: string;
  durations: FlightDuration[];
  imageUrl?: string;
  className?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function InteractiveFlightCard({
  title,
  durations,
  imageUrl = "/images/paraglider-pixar.png",
  className,
  buttonText = "Réserver",
  buttonHref = "#",
}: InteractiveFlightCardProps) {
  const [selectedDuration, setSelectedDuration] = React.useState(2);
  const currentDuration = durations[selectedDuration];

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

  return (
    <>
      <style>{bounceStyle}</style>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 0.97, boxShadow: "0px 15px 35px rgba(0,0,0,0.25)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={cn("relative w-full cursor-pointer rounded-2xl", className)}
      >
        {/* Card */}
        <Card className="relative z-10 rounded-2xl border bg-card p-6 md:p-8 min-h-[400px] md:min-h-[320px] flex flex-col">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-[#FFD700]">{title}</CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col max-w-full md:max-w-[60%]">
            {/* Prix et durée */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-[#021157]">
                  {currentDuration.price}€
                </span>
              </div>
              <p className="text-lg text-[#021157]/70 font-semibold">
                Durée : {currentDuration.label}
              </p>
            </div>

            {/* Slider */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#021157] mb-4">
                Choisissez la durée de votre vol
              </label>
              <input
                type="range"
                min="0"
                max={durations.length - 1}
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #021157 0%, #021157 ${(selectedDuration / (durations.length - 1)) * 100}%, #e5e7eb ${(selectedDuration / (durations.length - 1)) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <span>15min</span>
                <span>30min</span>
                <span>40min</span>
                <span>50min</span>
                <span>60min</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#021157] mb-6 flex-1">
              {currentDuration.description}
            </p>

            {/* Bouton */}
            <a
              href={buttonHref}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-[#FFD700] hover:bg-[#FFC700] text-[#021157] transition-colors shadow-lg"
            >
              {buttonText}
            </a>
          </CardContent>
        </Card>

        {/* Image de parapente */}
        <motion.img
          src={imageUrl}
          alt={title}
          className="absolute -top-8 -right-12 md:-top-12 md:-right-20 h-32 md:h-48 w-auto object-contain pointer-events-none z-20 bounce"
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
