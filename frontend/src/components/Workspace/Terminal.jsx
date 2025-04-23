import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Terminal = () => {
  const { terminalSessions } = useAppContext();
  const terminalRef = useRef(null);
  
  // Simulated terminal session (first one or default)
  const sessionId = Object.keys(terminalSessions)[0] || 'default';
  const session = terminalSessions[sessionId] || { commands: [] };
  
  // Auto-scroll terminal to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [session]);

  // Current executing command (for display above terminal)
  const currentCommand = session.commands && session.commands.length > 0
    ? session.commands[session.commands.length - 1].command
    : '';

  return (
    <div className="flex flex-col h-full bg-gray-900">
      {/* Command display */}
      <div className="bg-gray-800 bg-opacity-70 p-2 px-3 border-b border-gray-700 flex items-center">
        <div className="flex-shrink-0 mr-2">
          <div className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded">
            <span className="text-gray-300 text-xs">{'>'}</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <pre className="text-sm text-gray-300 whitespace-pre">
            <code>Executing command {currentCommand}</code>
          </pre>
        </div>
      </div>
      
      {/* Terminal window */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto bg-gray-950 font-mono text-sm p-4 text-gray-300 scrollbar-thin"
      >
        <div className="mb-4 text-center text-gray-600">
          <p>shell1</p>
        </div>
        
        {session.commands.map((cmd, index) => (
          <div key={index} className="mb-3">
            <div className="text-green-500 mb-1">
              ubuntu@sandbox:~/tesla_analysis $
              <span className="ml-1 text-gray-300">{cmd.command}</span>
            </div>
            {cmd.output && (
              <pre className="text-gray-400 whitespace-pre-wrap pl-2">
                {cmd.output}
              </pre>
            )}
          </div>
        ))}
        
        <div className="text-green-500">
          ubuntu@sandbox:~ $
          <span className="ml-1 animate-pulse">▋</span>
        </div>
      </div>
      
      {/* Terminal controls */}
      <div className="border-t border-gray-800 p-2 flex items-center justify-center space-x-4 text-gray-400">
        <button className="p-1 rounded hover:bg-gray-800">
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <div className="flex items-center">
          <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
        
        <button className="p-1 rounded hover:bg-gray-800">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Terminal;