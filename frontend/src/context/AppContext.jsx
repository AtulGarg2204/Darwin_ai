import React, { createContext, useState, useContext } from 'react';

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // UI state
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [activePanel, setActivePanel] = useState('none'); // 'none', 'terminal', 'editor'
  
  // Chat state
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Task state
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [expandedTasks, setExpandedTasks] = useState({});
  
  // Terminal and editor state
  const [terminalSessions, setTerminalSessions] = useState({});
  const [editorFiles, setEditorFiles] = useState({});
  const [activeFile, setActiveFile] = useState(null);
  
  // Toggle task expansion
  const toggleTaskExpansion = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };
  
  // Toggle right panel visibility
  const toggleRightPanel = () => {
    setShowRightPanel(prev => !prev);
  };
  
  // Open specific panel
  const openPanel = (panelType, fileId = null) => {
    setShowRightPanel(true);
    setActivePanel(panelType);
    if (fileId) {
      setActiveFile(fileId);
    }
  };
  
  // Add a new message
  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };
  
  // Add a new task
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
    setExpandedTasks(prev => ({
      ...prev,
      [task.id]: true
    }));
    setCurrentTask(task.id);
  };
  
  // Add execution step to a task
  const addExecutionStep = (taskId, step) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            steps: [...(task.steps || []), step]
          };
        }
        return task;
      });
    });
  };
  
  // Mark task as complete
  const completeTask = (taskId) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: true,
            completedAt: new Date()
          };
        }
        return task;
      });
    });
    setCurrentTask(null);
  };
  
  // Create or update editor file
  const updateEditorFile = (fileId, content, path) => {
    setEditorFiles(prev => ({
      ...prev,
      [fileId]: {
        id: fileId,
        content,
        path,
        updatedAt: new Date()
      }
    }));
  };
  
  // Create or update terminal session
  const updateTerminalSession = (sessionId, command, output) => {
    setTerminalSessions(prev => {
      const session = prev[sessionId] || { commands: [] };
      return {
        ...prev,
        [sessionId]: {
          ...session,
          commands: [...session.commands, { command, output, timestamp: new Date() }]
        }
      };
    });
  };
  
  // Context value
  const contextValue = {
    // UI state
    showRightPanel,
    setShowRightPanel,
    activePanel,
    setActivePanel,
    toggleRightPanel,
    openPanel,
    
    // Chat state
    messages,
    setMessages,
    addMessage,
    isLoading,
    setIsLoading,
    
    // Task state
    tasks,
    setTasks,
    currentTask,
    setCurrentTask,
    expandedTasks,
    toggleTaskExpansion,
    addTask,
    addExecutionStep,
    completeTask,
    
    // Terminal and editor state
    terminalSessions,
    updateTerminalSession,
    editorFiles,
    updateEditorFile,
    activeFile,
    setActiveFile
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};