import Link from "next/link";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800/50 bg-gray-900/20 mt-16">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Brand and description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
            >
              readme.sh
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Exploring the intersection of technology, development, and everything in between.
            </p>
          </div>
          
          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/makors/readme.sh" 
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </Link>
            
            <Link 
              href="https://twitter.com/makors" 
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-blue-400 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            
            <Link 
              href="mailto:hello@readme.sh" 
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-green-400 transition-all duration-300 border border-gray-700/50 hover:border-green-500/30"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Bottom section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-800/30">
          <p className="text-gray-500 text-sm">
            © {currentYear} readme.sh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}