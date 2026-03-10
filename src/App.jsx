import React, { useState, useCallback, useEffect } from 'react';
import SideNavbar from './components/SideNavbar';
import MainContent from './components/MainContent';
import DetailsPanel from './components/DetailsPanel';
import TagsBar from './components/TagsBar';
import './App.css';

function App() {
  const [detailsWidth, setDetailsWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);

  // Restored TagsBar state
  const [tagsContext, setTagsContext] = useState(null);
  const [isTagsClosing, setIsTagsClosing] = useState(false);

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

  const handleMouseMoveResizer = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  // Restored TagsBar handlers
  const handleTagsClick = (context) => {
    setTagsContext(context);
    setIsTagsClosing(false);
  };

  const handleTagsBack = () => {
    setIsTagsClosing(true);
    setTimeout(() => {
      setTagsContext(null);
      setIsTagsClosing(false);
    }, 350);
  };

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
        {/* z-index: 1 — always at the back */}
        <SideNavbar onTagsClick={handleTagsClick} isTagsActive={!!tagsContext} activeTagsContext={tagsContext} />

        {/* z-index: 2 — slides in over sidenav, under conversation list */}
        {tagsContext && (
          <TagsBar
            context={tagsContext}
            onBack={handleTagsBack}
            isClosing={isTagsClosing}
          />
        )}

        {/* z-index: 3 — always on top */}
        <div className="inner-container">
          <MainContent />
          <div className="resizer-v" onMouseDown={startResizing} onMouseMove={handleMouseMoveResizer}>
            <div className="resizer-handle">
              <div className="resizer-line-small" />
              <div className="resizer-line-main" />
              <div className="resizer-line-small" />
            </div>
          </div>
          <div style={{ width: detailsWidth, flexShrink: 0 }}>
            <DetailsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
