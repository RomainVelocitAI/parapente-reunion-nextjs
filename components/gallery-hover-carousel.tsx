"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  description = "",
  demoUrl = "#",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png",
    },
  ],
}: {
  heading?: string;
  description?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Layout Desktop: Description à gauche, Grid 2x2 à droite */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Description Section */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-4">
              {heading}
            </h3>
            {description && (
              <p
                className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

          {/* Grid 2x2 Cards Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="group block relative w-full h-[300px] lg:h-[350px]"
              >
                <Card className="overflow-hidden rounded-3xl h-full w-full">
                  {/* Image */}
                  <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                    <Image
                      width={400}
                      height={300}
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                    {/* Fade overlay at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text Section */}
                  <div className="absolute bottom-0 left-0 w-full px-4 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-medium md:text-xl">{item.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                      {item.summary}
                    </p>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-2 right-2 border border-gray-200 dark:border-gray-800 hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-primary hover:text-primary/80"
                    >
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
