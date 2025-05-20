import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AuthButtons from './AuthButtons';
import { Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {data:session,status}=useSession();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-reel-dark/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient-primary">REELRUSH</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-white/80 hover:text-reel-primary transition-colors">Home</Link>
            <Link href="/trending" className="text-white/80 hover:text-reel-primary transition-colors">Trending</Link>
            <Link href="#" className="text-white/80 hover:text-reel-primary transition-colors">Categories</Link>
            <Link href="#" className="text-white/80 hover:text-reel-primary transition-colors">About</Link>
          </nav>
          {status==="unauthenticated" &&  <AuthButtons />}
           
        </div>

        {/* Mobile menu button */}
        <button 
          
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-reel-dark-accent border-t border-reel-gray-dark">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4 mb-6">
              <a href="#" className="text-white/80 hover:text-reel-primary py-2 transition-colors">Home</a>
              <a href="#" className="text-white/80 hover:text-reel-primary py-2 transition-colors">Trending</a>
              <a href="#" className="text-white/80 hover:text-reel-primary py-2 transition-colors">Categories</a>
              <a href="#" className="text-white/80 hover:text-reel-primary py-2 transition-colors">About</a>
            </nav>
            {status==="unauthenticated" &&  <AuthButtons />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;