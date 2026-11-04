import React, { useState } from 'react';

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-outline-variant">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-outline-variant">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-5 text-left flex items-start justify-between gap-6 cursor-pointer group"
              type="button"
              aria-expanded={isOpen}
            >
              <span className={`font-display text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                {item.question}
              </span>
              <span className="font-mono text-lg text-primary shrink-0 leading-7 w-4 text-center">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 pr-10 max-w-[68ch] text-[0.95rem] text-on-surface-variant leading-relaxed animate-fade-in">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
