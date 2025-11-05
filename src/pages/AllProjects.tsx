
import { FaRocket, FaCode, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AllProjects() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#01000c] via-[#040218] to-[#080331]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FaCode className="absolute top-1/4 left-1/4 text-purple-500/30 text-4xl animate-float" style={{ animationDelay: '0s' }} />
        <FaRocket className="absolute top-1/3 right-1/3 text-cyan-500/30 text-5xl animate-float" style={{ animationDelay: '1s' }} />
        <FaGithub className="absolute bottom-1/3 left-1/3 text-pink-500/30 text-4xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Rocket Illustration with Glow */}
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-4 bg-linear-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="relative animate-bounce-slow">
            <svg 
              width="200" 
              height="200" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Rocket Body */}
              <path 
                d="M100 40 L120 120 L100 180 L80 120 Z" 
                fill="url(#gradient1)" 
                stroke="#8b5cf6" 
                strokeWidth="2"
              />
              {/* Rocket Window */}
              <circle cx="100" cy="80" r="15" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2"/>
              <circle cx="100" cy="80" r="8" fill="#6366f1" opacity="0.8"/>
              {/* Left Wing */}
              <path 
                d="M80 100 L60 140 L80 130 Z" 
                fill="url(#gradient2)" 
                stroke="#ec4899" 
                strokeWidth="2"
              />
              {/* Right Wing */}
              <path 
                d="M120 100 L140 140 L120 130 Z" 
                fill="url(#gradient2)" 
                stroke="#ec4899" 
                strokeWidth="2"
              />
              {/* Flame 1 */}
              <path 
                d="M95 180 L90 195 L100 190 Z" 
                fill="#f59e0b" 
                opacity="0.8"
                className="animate-flicker"
              />
              {/* Flame 2 */}
              <path 
                d="M100 180 L95 200 L105 195 Z" 
                fill="#ef4444" 
                opacity="0.9"
                className="animate-flicker"
                style={{ animationDelay: '0.1s' }}
              />
              {/* Flame 3 */}
              <path 
                d="M105 180 L110 195 L100 190 Z" 
                fill="#fbbf24" 
                opacity="0.8"
                className="animate-flicker"
                style={{ animationDelay: '0.2s' }}
              />
              {/* Stars around rocket */}
              <circle cx="60" cy="60" r="2" fill="#a78bfa" className="animate-twinkle"/>
              <circle cx="140" cy="70" r="2" fill="#ec4899" className="animate-twinkle" style={{ animationDelay: '0.5s' }}/>
              <circle cx="150" cy="100" r="2" fill="#06b6d4" className="animate-twinkle" style={{ animationDelay: '1s' }}/>
              <circle cx="50" cy="110" r="2" fill="#fbbf24" className="animate-twinkle" style={{ animationDelay: '1.5s' }}/>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f43f5e', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 leading-none">
          <span className="block bg-linear-to-r from-white via-slate-100 to-white bg-clip-text text-transparent animate-gradient">
            Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Something Amazing is Building
          </span>
        </p>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm crafting an extraordinary showcase of all my projects. Meanwhile, check out the featured projects on the home page or explore my GitHub profile.
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-progress"></div>
          </div>
          <p className="text-slate-500 text-sm mt-3 font-medium">Building in progress...</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute -inset-px rounded-full bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400 opacity-70 blur group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-cyan-600 transition-all"></div>
            <span className="relative text-white font-semibold text-lg">Back to Home</span>
          </Link>

          <a
            href="https://github.com/HansaraHettiarachchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-purple-400/50 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 group"
          >
            <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-lg">View GitHub</span>
          </a>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 0.8; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(1.2); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        
        .animate-flicker {
          animation: flicker 0.3s ease-in-out infinite;
          transform-origin: top;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
