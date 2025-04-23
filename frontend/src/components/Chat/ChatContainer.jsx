import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import TaskItem from './TaskItem';

const ChatContainer = () => {
  const { 
    messages, 
    tasks, 
    currentTask,
    isLoading, 
    addMessage, 
    addTask,
    completeTask
  } = useAppContext();
  
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState('');

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, tasks]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    addMessage(userMessage);
    setInput('');
    
    // Simulate assistant response (this would be replaced with actual API call)
    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've created a detailed plan for your Tesla stock analysis. I'll now begin gathering Tesla's company overview information, including their business profile, leadership team, and key metrics. I'll work through each section systematically to provide you with a comprehensive analysis.",
        timestamp: new Date()
      };
      
      addMessage(assistantMessage);
      
      // Create a simulated task
      const task = {
        id: `task-${Date.now()}`,
        title: "Gather Tesla company overview and key information",
        status: "in_progress",
        steps: [],
        createdAt: new Date()
      };
      
      addTask(task);
      
      // Simulate task execution steps with delay
      simulateTaskExecution(task.id);
    }, 1000);
  };

  // Simulate task execution with steps
  const simulateTaskExecution = (taskId) => {
    const steps = [
      {
        id: `step-${Date.now()}`,
        type: 'command',
        content: 'mkdir -p /home/ubuntu/tesla_analysis/data',
        timestamp: new Date()
      },
      {
        id: `step-${Date.now() + 100}`,
        type: 'command',
        content: 'cd /home/ubuntu/tesla_analysis/data && touch tesla_company_profile.py',
        timestamp: new Date()
      },
      {
        id: `step-${Date.now() + 200}`,
        type: 'file',
        content: 'tesla_analysis/data/tesla_company_profile.py',
        action: 'creating',
        timestamp: new Date()
      },
      {
        id: `step-${Date.now() + 300}`,
        type: 'command',
        content: 'cd /home/ubuntu/tesla_analysis/data && python3 tesla_company_profile.py',
        timestamp: new Date()
      }
    ];

    // Add each step with delay to simulate real-time execution
    steps.forEach((step, index) => {
      setTimeout(() => {
        addExecutionStep(taskId, step);
        
        // Complete task after last step
        if (index === steps.length - 1) {
          setTimeout(() => {
            completeTask(taskId);
          }, 2000);
        }
      }, index * 1500);
    });
  };

  // Helper function to add execution step
  const addExecutionStep = (taskId, step) => {
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.steps = [...(task.steps || []), step];
      }
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Messages */}
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id || message.timestamp || Math.random()} 
              message={message} 
            />
          ))}
          
          {/* Tasks */}
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
            />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-center py-4">
              <div className="animate-pulse flex space-x-2">
                <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-800 p-4">
        <MessageInput 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatContainer;