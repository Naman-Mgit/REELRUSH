import React from 'react';

import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-reel-dark">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-reel-primary/20 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-reel-secondary/20 blur-[100px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full bg-gradient-to-tr from-reel-primary to-reel-secondary opacity-10 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-[25%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-tr from-reel-primary to-reel-secondary opacity-10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[30%] left-[20%] w-16 h-16 rounded-full bg-gradient-to-tr from-reel-primary to-reel-secondary opacity-10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-gradient-primary">Share Your Moments</span>
          <br />
          <span className="text-white">In Short, Captivating Reels</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Create, discover, and share short videos that showcase your creativity.
          Join millions of users on the fastest growing video platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className=" btn btn-primary bg-reel-primary hover:bg-reel-primary/80 text-white px-8 py-6 text-lg">
            Create Reel
          </button>
          <button  className=" btn-outline flex flex-row border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Explore Trending
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;