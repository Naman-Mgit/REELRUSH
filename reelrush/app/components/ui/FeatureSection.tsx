import React from 'react';
import { Heart, Music, Zap, Video, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: <Video className="h-8 w-8 text-reel-primary" />,
    title: "Create Short Videos",
    description: "Easily create and edit short-form videos with our intuitive tools."
  },
  {
    icon: <Music className="h-8 w-8 text-reel-primary" />,
    title: "Music Library",
    description: "Access thousands of trending songs and sound effects for your reels."
  },
  {
    icon: <Heart className="h-8 w-8 text-reel-primary" />,
    title: "Engage & Connect",
    description: "Like, comment, and share reels with friends and followers."
  },
  {
    icon: <Zap className="h-8 w-8 text-reel-primary" />,
    title: "Go Viral",
    description: "Our algorithm helps your best content reach new audiences."
  },
  {
    icon: <Globe className="h-8 w-8 text-reel-primary" />,
    title: "Global Community",
    description: "Join millions of creators and viewers from around the world."
  },
  {
    icon: <Lock className="h-8 w-8 text-reel-primary" />,
    title: "Privacy Controls",
    description: "Robust privacy settings to control who sees your content."
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="bg-reel-gray-dark rounded-lg p-6 transition-all duration-300 hover:bg-reel-gray-light hover:shadow-[0_0_15px_rgba(140,82,255,0.2)]">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-white text-xl font-medium mb-2">{feature.title}</h3>
      <p className="text-white/70">{feature.description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-20 bg-reel-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ReelRush?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Create, share, and discover short videos with powerful tools and a vibrant community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
             <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
