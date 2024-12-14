import React from "react";
import Image from "next/image";

type Card = {
  title: string;
  description: string;
  svg: string;
};

const cards: Card[] = [
  {
    title: "Market-Making",
    description: "Building strategies to provide liquidity and capture the bid-ask spread.",
    svg: "/MM.svg",
  },
  {
    title: "Arbitrage",
    description:
      "Exploiting pricing inefficiencies across markets, including statistical, triangular, and latency arbitrage.",
    svg: "/ARB.svg",
  },
  {
    title: "Pairs Trading",
    description: "Leveraging correlated asset price movements for mean reversion opportunities.",
    svg: "/PAIR.svg",
  },
  {
    title: "Directional Trading",
    description: "Momentum-based or trend-following strategies to capitalize on price movements.",
    svg: "/MOM.svg",
  },
];

const TradingCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 mb-4 relative">
            <Image
              src={card.svg}
              alt={`Icon representing ${card.title}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
          <h2 className="text-xl text-gray-800 font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TradingCards;
