import React from 'react';
import Header from './Header';
import SplitView from './SplitView';
import ChatContainer from '../Chat/ChatContainer';
import WorkspacePanel from '../Workspace/WorkspacePanel';
import { useAppContext } from '../../context/AppContext';

const MainLayout = () => {
  const { showRightPanel } = useAppContext();

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <Header />
      
      <main className="flex-1 overflow-hidden">
        {showRightPanel ? (
          <SplitView
            leftPanel={<ChatContainer />}
            rightPanel={<WorkspacePanel />}
          />
        ) : (
          <div className="flex justify-center h-full">
            <div className="w-full max-w-3xl px-4">
              <ChatContainer />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainLayout;