// src/components/Testimonials/TestimonialCard.tsx
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  avatarSig: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
      <p className="text-lg italic text-gray-300 mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <img
          src={`https://source.unsplash.com/random/100x100/?portrait&sig=${testimonial.avatarSig}`}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-400"
        />
        <p className="font-semibold text-amber-400">{testimonial.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
