import React from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="relative">
        <textarea
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pr-12 text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="2"
          placeholder="Ask Darwin..."
          value={value}
          onChange={onChange}
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSubmit(e);
            }
          }}
        />
        
        <button
          type="submit"
          disabled={isLoading || !value.trim()}
          className={`absolute right-3 bottom-3 p-1 rounded-md ${
            isLoading || !value.trim() 
              ? 'text-gray-500' 
              : 'text-blue-500 hover:bg-gray-700'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-xs text-gray-500 mt-1 text-right">
        <span>Press Enter to send, Shift+Enter for new line</span>
      </div>
    </form>
  );
};

export default MessageInput;