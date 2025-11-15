import { useState } from 'react';

interface CategoryHeroProps {
  category: 'men' | 'women' | 'unisex';
}

const categoryData = {
  men: {
    title: "Men's Clothing",
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bgColor: 'from-gray-900 via-gray-800 to-gray-900',
  },
  women: {
    title: "Women's Clothing",
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bgColor: 'from-gray-900 via-gray-800 to-gray-900',
  },
  unisex: {
    title: 'Unisex Clothing',
    image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bgColor: 'from-gray-900 via-gray-800 to-gray-900',
  },
};

export default function CategoryHero({ category }: CategoryHeroProps) {
  const data = categoryData[category];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={`relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br ${data.bgColor}`}>
      <img
        src={data.image}
        alt={data.title}
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
          {data.title}
        </h1>
      </div>
    </section>
  );
}
