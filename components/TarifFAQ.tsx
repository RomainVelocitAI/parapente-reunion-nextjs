'use client'

import { useState } from "react"
import React from "react"

interface FAQItem {
  question: string
  answer: string
}

interface TarifFAQProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
  imageUrl?: string
}

export function TarifFAQ({
  faqs,
  title = "Questions fréquentes",
  subtitle = "Tout savoir avant de réserver",
  imageUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=830&h=844&auto=format&fit=crop"
}: TarifFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 md:px-0">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src={imageUrl}
          alt="Parapente à Saint-Leu, La Réunion"
        />
        <div>
          <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-500 mt-2 pb-4">
            {subtitle}
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-slate-200 py-4 cursor-pointer"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">
                  {faq.question}
                </h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
