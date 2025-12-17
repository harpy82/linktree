import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex items-center justify-between p-4 w-full mb-3 rounded-xl 
        bg-white border transition-all duration-200 group
        ${link.highlight 
          ? 'border-violet-200 shadow-violet-100 hover:shadow-violet-200 hover:border-violet-300 ring-1 ring-violet-50' 
          : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
        }
        hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm
      `}
    >
      <div className="flex flex-col items-start overflow-hidden">
        <span className="font-medium text-gray-900 truncate w-full group-hover:text-violet-700 transition-colors">
          {link.title}
        </span>
        {link.category && (
          <span className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide font-medium">
            {link.category}
          </span>
        )}
      </div>
      
      <div className="ml-4 text-gray-300 group-hover:text-violet-500 transition-colors">
        <ExternalLink size={18} />
      </div>
    </a>
  );
};

export default LinkCard;