import React from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Editor from './Editor';
import Terminal from './Terminal';

const WorkspacePanel = () => {
  const { 
    activePanel, 
    toggleRightPanel, 
    activeFile,
    editorFiles,
    terminalSessions
  } = useAppContext();
  
  // Determine the panel title
  const getPanelTitle = () => {
    if (activePanel === 'editor') {
      const file = editorFiles[activeFile];
      return `Darwin is using Editor${file ? `: ${file.path}` : ''}`;
    } else if (activePanel === 'terminal') {
      return 'Darwin is using Terminal';
    }
    return 'Darwin\'s Computer';
  };
  
  // Render the appropriate panel content
  const renderPanelContent = () => {
    if (activePanel === 'editor' && activeFile) {
      return <Editor fileId={activeFile} />;
    } else if (activePanel === 'terminal') {
      return <Terminal />;
    }
    
    // Default empty state
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-gray-500">
          <p>No active workspace</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 border-l border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <h2 className="text-gray-300 font-medium">{getPanelTitle()}</h2>
        
        <button 
          className="p-1 hover:bg-gray-800 rounded-full transition-colors"
          onClick={toggleRightPanel}
          title="Minimize"
        >
          <Minimize2 className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {renderPanelContent()}
      </div>
    </div>
  );
};

export default WorkspacePanel;