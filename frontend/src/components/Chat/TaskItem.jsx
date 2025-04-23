import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { ChevronDown, ChevronUp, Terminal, Code, FileText, CheckCircle } from 'lucide-react';

const TaskItem = ({ task }) => {
  const { expandedTasks, toggleTaskExpansion, openPanel } = useAppContext();
  const isExpanded = expandedTasks[task.id] ?? true;
  
  // Handle clicking on a step that should open a panel
  const handleStepClick = (step) => {
    if (step.type === 'command') {
      openPanel('terminal');
    } else if (step.type === 'file') {
      openPanel('editor', step.content);
    }
  };

  // Render the appropriate icon for each step type
  const renderStepIcon = (step) => {
    if (step.type === 'command') {
      return <Terminal className="w-4 h-4" />;
    } else if (step.type === 'file') {
      if (step.action === 'creating') {
        return <FileText className="w-4 h-4" />;
      } else if (step.action === 'editing') {
        return <Code className="w-4 h-4" />;
      }
      return <FileText className="w-4 h-4" />;
    }
    return null;
  };

  // Get step title based on type and content
  const getStepTitle = (step) => {
    if (step.type === 'command') {
      return `Executing command ${step.content}`;
    } else if (step.type === 'file') {
      if (step.action === 'creating') {
        return `Creating file ${step.content}`;
      } else if (step.action === 'editing') {
        return `Editing file ${step.content}`;
      }
      return `File ${step.content}`;
    }
    return 'Step';
  };

  return (
    <div className="border border-gray-800 rounded-md bg-gray-800 bg-opacity-50 mt-4">
      {/* Task header */}
      <div 
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => toggleTaskExpansion(task.id)}
      >
        <div className="flex items-center space-x-2">
          {task.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-gray-600 border-t-blue-500 animate-spin"></div>
          )}
          <span className="font-medium">{task.title}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {task.completed && (
            <span className="text-xs bg-green-900 text-green-300 py-0.5 px-2 rounded">
              Complete
            </span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      
      {/* Task steps */}
      {isExpanded && task.steps && task.steps.length > 0 && (
        <div className="p-3 pt-0 border-t border-gray-700">
          <div className="ml-6 pl-3 border-l border-gray-700">
            {task.steps.map((step, index) => (
              <div 
                key={step.id || index}
                className="py-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 px-2 rounded transition-colors"
                onClick={() => handleStepClick(step)}
              >
                <div className="flex-shrink-0 text-gray-400">
                  {renderStepIcon(step)}
                </div>
                <div className="text-sm text-gray-300">
                  {getStepTitle(step)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Task completion indicator */}
      {task.completed && (
        <div className="flex justify-between items-center p-3 border-t border-gray-700 bg-gray-800 bg-opacity-30 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-gray-300">Task completed</span>
          </div>
          
          {task.steps && (
            <div className="text-gray-500">
              {task.steps.length} step{task.steps.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;