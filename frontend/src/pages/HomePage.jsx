import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatInterface from '../components/chat/ChatInterface';
import TerminalDisplay from '../components/terminal/TerminalDisplay';

const HomePage = () => {
  const [conversation, setConversation] = useState([
    {
      role: 'user',
      content: "I'd like a thorough analysis of Tesla stock, including:",
      details: [
        "Summary: Company overview, key metrics, performance data and investment recommendations",
        "Financial Data: Revenue trends, profit margins, balance sheet and cash flow analysis",
        "Market Sentiment: Analyst ratings, sentiment indicators and news impact",
        "Technical Analysis: Price trends, technical indicators and support/resistance levels",
        "Compare Assets: Market share and financial metrics vs. key competitors",
        "Value Investor: Intrinsic value, growth potential and risk factors",
        "Investment Thesis: SWOT analysis and recommendations for different investor types"
      ]
    },
    {
      role: 'assistant',
      content: "I'll help you create a comprehensive analysis of Tesla stock. I'll gather the latest financial data, market sentiment, technical analysis, competitive comparisons, and develop investment recommendations. This will take some time to research thoroughly, but I'll work on it right away and provide you with a detailed report."
    }
  ]);
  
  const [terminalOutput, setTerminalOutput] = useState({
    type: 'terminal',
    executing: 'cd /home/ubuntu/tesla_analysis/data && python3 tesla_leadership.py',
    output: `ubuntu@sandbox:~/tesla_analysis/data $ cd /home/ubuntu && cd /home/ubuntu/tesla_analysis/data && python3 tesla_leadership.py
Traceback (most recent call last):
  File "/home/ubuntu/tesla_analysis/data/tesla_leadership.py", line 6, in <module>
    from bs4 import BeautifulSoup
ModuleNotFoundError: No module named 'bs4'
ubuntu@sandbox:~/tesla_analysis/data $`
  });
  
  const [currentTask, setCurrentTask] = useState({
    description: "Gather Tesla company overview and key information",
    progress: 2,
    total: 10,
    status: "Thinking"
  });
  
  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // You can use this to fetch initial conversation or system status
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/session/init`);
        
        if (response.data.conversation) {
          setConversation(response.data.conversation);
        }
        
        if (response.data.terminal) {
          setTerminalOutput(response.data.terminal);
        }
        
        if (response.data.task) {
          setCurrentTask(response.data.task);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
        // Continue with default values in case of error
      }
    };
    
    // Uncomment when backend is ready
    // fetchInitialData();
  }, []);

  const handleSendMessage = async (message) => {
    // Add user message to conversation
    setConversation([...conversation, {
      role: 'user',
      content: message
    }, {
      role: 'assistant',
      content: "I'm processing your request. Let me work on that for you..."
    }]);
    
    try {
      // Call backend API directly with axios
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/chat/message`, {
        message: message
      });
      
      // Update conversation with actual response
      setConversation(prev => {
        const newConversation = [...prev];
        newConversation[newConversation.length - 1] = {
          role: 'assistant',
          content: response.data.reply || "I've processed your request."
        };
        return newConversation;
      });
      
      // Update terminal output if provided
      if (response.data.terminal) {
        setTerminalOutput(response.data.terminal);
      }
      
      // Update task status if provided
      if (response.data.task) {
        setCurrentTask(response.data.task);
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error - update the assistant message to show error
      setConversation(prev => {
        const newConversation = [...prev];
        newConversation[newConversation.length - 1] = {
          role: 'assistant',
          content: "I'm sorry, I encountered an error processing your request. Please try again."
        };
        return newConversation;
      });
    }
  };

  return (
    <div className="flex h-full">
      {/* Chat section */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Comprehensive Tesla Stock Analysis and Investment Insights</h2>
        </div>
        <ChatInterface 
          conversation={conversation} 
          onSendMessage={handleSendMessage} 
        />
      </div>
      
      {/* Terminal section */}
      <div className="w-1/2 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Manus's Computer</h2>
        </div>
        <TerminalDisplay 
          terminalOutput={terminalOutput}
          currentTask={currentTask}
        />
      </div>
    </div>
  );
};

export default HomePage;