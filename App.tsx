import React, { useState, useMemo } from 'react';
import { PROFILE, LINKS } from './data';
import ProfileHeader from './components/ProfileHeader';
import SearchBar from './components/SearchBar';
import LinkCard from './components/LinkCard';
import { Github, Twitter, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLinks = useMemo(() => {
    if (!searchTerm.trim()) return LINKS;
    
    const lowerTerm = searchTerm.toLowerCase();
    return LINKS.filter(link => 
      link.title.toLowerCase().includes(lowerTerm) || 
      link.category?.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-0"></div>
      
      <main className="relative z-10 max-w-md mx-auto px-4 py-12 min-h-screen flex flex-col">
        
        <ProfileHeader profile={PROFILE} />

        <div className="w-full">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />

          <div className="flex flex-col w-full space-y-1">
            {filteredLinks.length > 0 ? (
              filteredLinks.map(link => (
                <LinkCard key={link.id} link={link} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500 bg-white/50 rounded-xl border border-dashed border-gray-300">
                <p>No links found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-2 text-violet-600 font-medium hover:underline text-sm"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        <footer className="mt-auto pt-12 pb-6 flex flex-col items-center">
          <div className="flex space-x-6 mb-4 text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-600 transition-colors"><Github size={20} /></a>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;