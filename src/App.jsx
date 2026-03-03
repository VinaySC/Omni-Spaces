import React, { useState, useCallback, useEffect } from 'react';
import SideNavbar from './components/SideNavbar';
import MainContent from './components/MainContent';
import DetailsPanel from './components/DetailsPanel';
import './App.css'; // We'll create this for resizer styles

function App() {
  const [detailsWidth, setDetailsWidth] = useState(320); // Initial pixel width
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((mouseMoveEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - mouseMoveEvent.clientX - 12; // 12px padding
      if (newWidth > 200 && newWidth < 600) {
        setDetailsWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <SideNavbar />
        <div className="inner-container">
          <MainContent />
          <div className="resizer-v" onMouseDown={startResizing} />
          <div style={{ width: detailsWidth, flexShrink: 0 }}>
            <DetailsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
