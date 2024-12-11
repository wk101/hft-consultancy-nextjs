import React from 'react';

type Card = {
  title: string;
  description: string;
  svg: string;
};

const TradingCards: React.FC = () => {
  const cards: Card[] = [
    {
      title: 'Market-Making',
      description: 'Building strategies to provide liquidity and capture the bid-ask spread.',
      svg: '/MM.svg',
    },
    {
      title: 'Arbitrage',
      description: 'Exploiting pricing inefficiencies across markets, including statistical, triangular, and latency arbitrage.',
      svg: '/ARB.svg',
    },
    {
      title: 'Pairs Trading',
      description: 'Leveraging correlated asset price movements for mean reversion opportunities.',
      svg: '/PAIR.svg',
    },
    {
      title: 'Directional Trading',
      description: 'Momentum-based or trend-following strategies to capitalize on price movements.',
      svg: '/MOM.svg',
    },
  ];

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 mb-4">
            <img src={card.svg} alt={card.title} className="w-full h-full object-contain" />
          </div>
          <h2 className="text-lg text-gray-800 font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TradingCards;
