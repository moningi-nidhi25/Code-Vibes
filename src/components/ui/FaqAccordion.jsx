import React, { useState } from 'react';

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl bg-surface-container-lowest/70 backdrop-blur-xl border border-surface-container-lowest/80 shadow-xs overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              type="button"
            >
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 transform shrink-0 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden px-5 bg-surface-container-low/40 backdrop-blur-md ${
                isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
