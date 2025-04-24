import React from 'react';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/Layout/MainLayout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<MainLayout />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;