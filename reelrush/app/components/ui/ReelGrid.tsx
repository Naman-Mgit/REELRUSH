import React from 'react';
import { Play } from 'lucide-react';

// Mock data for reels
const reels = [
  {
    id: 1,
    title: "Sunset at the beach",
    author: "@beachlover",
    views: "2.4M",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
  },
  {
    id: 2,
    title: "Urban skateboarding",
    author: "@skatemaster",
    views: "1.2M",
    thumbnail: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Coffee art design",
    author: "@coffeelover",
    views: "895K",
    thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 4,
    title: "Mountain hiking",
    author: "@hikingexplorer",
    views: "1.7M",
    thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "City lights at night",
    author: "@urbanphotographer",
    views: "3.1M",
    thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  },
  {
    id: 6,
    title: "Cooking tutorial",
    author: "@chefsecrets",
    views: "764K",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const ReelCard = ({ reel }: { reel: typeof reels[0] }) => {
  return (
    <div className="reel-card">
      <img 
        src={reel.thumbnail} 
        alt={reel.title} 
        className="w-full h-full object-cover aspect-[9/16]"
      />
      <div className="reel-card-overlay flex flex-col justify-end p-4">
        <div className="absolute top-4 right-4 bg-black/40 rounded-full p-2">
          <Play className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-white font-medium text-lg mb-1">{reel.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-white/70 text-sm">{reel.author}</p>
          <p className="text-white/70 text-sm">{reel.views} views</p>
        </div>
      </div>
    </div>
  );
};

const ReelGrid = () => {
  return (
    <section className="py-20 bg-reel-dark-accent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Trending Reels</h2>
          <a href="#" className="text-reel-primary hover:text-reel-secondary transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelGrid;