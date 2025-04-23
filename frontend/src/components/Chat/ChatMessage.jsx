import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ChatMessage = ({ message }) => {
  const { openPanel } = useAppContext();
  
  // Function to render message details (like bullet points) if present
  const renderDetails = (details) => {
    if (!details || !details.length) return null;
    
    return (
      <ul className="mt-2 space-y-1 text-gray-300">
        {details.map((detail, index) => (
          <li key={index} className="leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>
    );
  };
  
  // Function to handle clicks on any file references in the message
  const handleFileClick = (filePath) => {
    const fileId = filePath.split('/').pop();
    openPanel('editor', fileId);
  };
  
  // Render the user avatar based on role
  const renderAvatar = () => {
    if (message.role === 'user') {
      return (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-sm">U</span>
        </div>
      );
    } else if (message.role === 'assistant' || message.role === 'system') {
      return (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <svg 
            className="w-5 h-5" 
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
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-3xl ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className="flex-shrink-0 mt-1">
          {renderAvatar()}
        </div>
        
        {/* Message content */}
        <div className={`mx-2 ${message.role !== 'user' ? 'text-left' : 'text-right'}`}>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm text-gray-400">
              {message.role === 'user' ? 'You' : 'darwin'}
            </span>
          </div>
          
          <div className="mt-1">
            <p className="text-gray-100 leading-relaxed">{message.content}</p>
            {message.details && renderDetails(message.details)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;