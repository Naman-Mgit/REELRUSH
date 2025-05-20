
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-reel-dark-accent border-t border-reel-gray-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient-primary">REELRUSH</span>
            </a>
            <p className="text-white/60 mb-4">
              Share your moments in short, captivating reels. Join our community of creators and viewers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/60 hover:text-reel-primary transition-colors">
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Creator Academy</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Safety Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-reel-primary transition-colors">Intellectual Property</a></li>
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