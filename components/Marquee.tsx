'use client'

export default function Marquee() {
  const marqueeText = "✨ New Arrivals: Premium Blue Ceramic | 🌟 Weekly Feature: Modern Geometric Patterns | 👥 Join Our Community: Get 10% Off! | 🚀 Limited Time: Free Shipping on Orders Over $50"

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 overflow-hidden">
      <div className="whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-12">
          <span className="text-xl font-semibold">{marqueeText}</span>
          <span className="text-xl font-semibold">{marqueeText}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        :global(.animate-marquee) {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
