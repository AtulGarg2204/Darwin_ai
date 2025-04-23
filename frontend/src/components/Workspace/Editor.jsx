import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Editor = ({ fileId }) => {
  const { editorFiles, updateEditorFile } = useAppContext();
  const [content, setContent] = useState('');
  
  // Get file info or use defaults
  const file = editorFiles[fileId] || { 
    path: fileId, 
    content: '',
    updatedAt: new Date()
  };
  
  // Initialize editor with file content
  useEffect(() => {
    setContent(file.content || '');
  }, [fileId, file.content]);
  
  // Extract filename from path
  const filename = file.path.split('/').pop();
  
  // Handle content changes
  const handleContentChange = (e) => {
    setContent(e.target.value);
    
    // Update the file in context
    updateEditorFile(fileId, e.target.value, file.path);
  };
  
  // Generate info display based on file extension
  const getFileTypeInfo = () => {
    if (filename.endsWith('.md')) {
      return 'Markdown';
    } else if (filename.endsWith('.py')) {
      return 'Python';
    } else if (filename.endsWith('.js')) {
      return 'JavaScript';
    } else if (filename.endsWith('.jsx')) {
      return 'React';
    } else if (filename.endsWith('.html')) {
      return 'HTML';
    } else if (filename.endsWith('.css')) {
      return 'CSS';
    }
    return 'Text';
  };
  
  // Simulated file content - Tesla stock analysis todo list
  const defaultContent = `# Tesla Stock Analysis Todo List

## 1. Create Todo List
- [x] Create project directory structure
- [x] Create todo.md file
- [x] Outline all required analysis components

## 2. Gather Tesla Company Overview
- [x] Collect basic company information (ticker, exchange, etc.)
- [x] Get company profile and business summary
- [x] Identify key executives and leadership team
- [x] Document company history and major milestones
- [x] Analyze business model and revenue streams

## 3. Collect Tesla Financial Data
- [x] Retrieve historical stock price data
- [x] Analyze revenue trends over past 5 years
- [x] Calculate profit margins and profitability metrics
- [x] Examine balance sheet strength and liabilities`;
  
  return (
    <div className="flex flex-col h-full">
      {/* File info */}
      <div className="bg-gray-800 bg-opacity-70 p-2 px-3 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            <div className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded">
              <span className="text-gray-300 text-xs">{'<>'}</span>
            </div>
          </div>
          <div className="text-sm">
            <span>Darwin is using Editor</span>
          </div>
        </div>
        <div className="text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-300">
          Editing file <span className="text-blue-400">{file.path}</span>
        </div>
      </div>
      
      {/* Editor tabs */}
      <div className="flex items-center bg-gray-850 border-b border-gray-800">
        <div className="px-3 py-1 bg-gray-900 text-gray-300 text-sm border-r border-gray-800">
          {filename}
        </div>
        <div className="flex-1"></div>
        <div className="p-1 text-xs flex items-center space-x-2 text-gray-500 mr-2">
          <span>Diff</span>
          <span>Original</span>
          <span className="text-blue-400">Modified</span>
        </div>
      </div>
      
      {/* Editor content */}
      <div className="flex-1 overflow-hidden">
        <textarea
          className="w-full h-full bg-gray-900 text-gray-300 p-4 font-mono text-sm resize-none focus:outline-none"
          value={content || defaultContent}
          onChange={handleContentChange}
          spellCheck="false"
        />
      </div>
      
      {/* Editor controls */}
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

export default Editor;