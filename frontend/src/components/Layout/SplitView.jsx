import React, { useState, useEffect } from 'react';

// Resizable split view component
const SplitView = ({ leftPanel, rightPanel }) => {
  // Default split: 40% left, 60% right
  const [splitPercentage, setSplitPercentage] = useState(40);
  const [isDragging, setIsDragging] = useState(false);

  // Handle mouse drag to resize panels
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const container = document.getElementById('split-container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const newPercentage = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        
        // Limit the resize range (20% - 80%)
        if (newPercentage >= 20 && newPercentage <= 80) {
          setSplitPercentage(newPercentage);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Set up and clean up event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      id="split-container"
      className="flex h-full relative"
      style={{ cursor: isDragging ? 'col-resize' : 'auto' }}
    >
      {/* Left panel */}
      <div 
        className="overflow-y-auto"
        style={{ width: `${splitPercentage}%` }}
      >
        {leftPanel}
      </div>
      
      {/* Resizer */}
      <div 
        className="w-1 bg-gray-800 hover:bg-blue-500 cursor-col-resize relative z-10"
        onMouseDown={handleMouseDown}
      >
        {/* Optional drag handle indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-8 flex flex-col justify-center items-center space-y-1">
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>
      
      {/* Right panel */}
      <div 
        className="overflow-y-auto"
        style={{ width: `${100 - splitPercentage}%` }}
      >
        {rightPanel}
      </div>
    </div>
  );
};

export default SplitView;