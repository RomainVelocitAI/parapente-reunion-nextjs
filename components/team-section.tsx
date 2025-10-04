import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility for classnames

// Define the type for each team member
interface TeamMember {
  name: string;
  image: string;
}

// Define the props for the component
export interface AnimatedTeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  className?: string;
}

// Helper function to calculate the final transform values for each card
const getCardState = (index: number, total: number, isMobile = false) => {
  const centerIndex = (total - 1) / 2;
  const distanceFromCenter = index - centerIndex;

  // Horizontal spread adaptatif selon la taille d'écran
  const xSpacing = isMobile ? 60 : 90;
  const x = distanceFromCenter * xSpacing;
  // Vertical lift to form the curve
  const y = Math.abs(distanceFromCenter) * -30;
  // Rotation for the fanned effect
  const rotate = distanceFromCenter * 12;

  return { x, y, rotate };
};

const AnimatedTeamSection = React.forwardRef<
  HTMLDivElement,
  AnimatedTeamSectionProps
>(({ title, description, members, className, ...props }, ref) => {
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation for the container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // REBUILT ANIMATION LOGIC: Integrated positioning directly into framer-motion
  const itemVariants = {
    // All cards start at the center, scaled down
    hidden: { opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 },
    // Animate to the final calculated position
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: getCardState(i, members.length, isMobile).x,
      y: getCardState(i, members.length, isMobile).y,
      rotate: getCardState(i, members.length, isMobile).rotate,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className={cn("w-full pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden", className)}
      {...props}
    >
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#021157] mb-3">
          {title}
        </h2>
        <p className="max-w-3xl text-slate-600 md:text-xl mb-8">
          {description}
        </p>

        {/* Sized container for the absolute positioning */}
        <motion.div
          ref={inViewRef}
          className="relative mt-20 flex items-center justify-center"
          style={{ minHeight: "250px" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-xl overflow-hidden shadow-lg border-2 border-background"
              custom={index} // Pass index to variants for calculation
              variants={itemVariants}
              // Set initial zIndex based on distance from center
              style={{ zIndex: members.length - Math.abs(index - (members.length - 1) / 2) }}
              whileHover={{
                scale: 1.1,
                zIndex: 99,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="tel:+262692829292"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#021157] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Voler en toute sécurité
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

AnimatedTeamSection.displayName = "AnimatedTeamSection";

export { AnimatedTeamSection };