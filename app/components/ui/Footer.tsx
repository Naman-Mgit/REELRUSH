
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-reel-dark-accent border-t border-reel-gray-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient-primary">REELRUSH</span>
            </Link>
            <p className="text-white/60 mb-4">
              Share your moments in short, captivating reels. Join our community of creators and viewers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                TikTok
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Community Guidelines</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Creator Academy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Safety Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-reel-primary transition-colors">Intellectual Property</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-reel-gray-dark text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} ReelRush. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;