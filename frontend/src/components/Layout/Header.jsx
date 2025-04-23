import React from 'react';
import { FileText, Link } from 'lucide-react';

const Header = () => {
  // Title for the current session/analysis
  const sessionTitle = "Comprehensive Tesla Stock Analysis and Investment Insights";
  
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <svg 
            className="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 17L12 22L22 17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 12L12 17L22 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">darwin</span>
        </div>
      </div>
      
      <div className="flex-1 text-center">
        <h1 className="text-lg font-medium">{sessionTitle}</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          className="p-2 rounded-full hover:bg-gray-800 transition-colors" 
          title="Copy link"
        >
          <Link className="w-5 h-5" />
        </button>
        
        <div className="relative group">
          <button 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors" 
            title="View all files in this task"
          >
            <FileText className="w-5 h-5" />
          </button>
          
          <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right z-10">
            <div className="bg-gray-800 rounded-md shadow-lg py-1">
              <div className="px-4 py-2 text-sm font-medium">View all files in this task</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;