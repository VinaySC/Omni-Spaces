import React, { useState, useCallback, useEffect } from 'react';
import './MainContent.css';
import ConversationList from './ConversationList';
import ConversationView from './ConversationView';
import { MOCK_CONVERSATIONS } from '../data/mockConversations';

const MainContent = () => {
    const [selectedId, setSelectedId] = React.useState(MOCK_CONVERSATIONS[0].id);
    const [displayId, setDisplayId] = React.useState(MOCK_CONVERSATIONS[0].id);
    const [readIds, setReadIds] = React.useState(new Set([MOCK_CONVERSATIONS[0].id]));
    const [leftWidth, setLeftWidth] = useState(300); // Initial pixel width
    const [isResizing, setIsResizing] = useState(false);

    const activeConversation = MOCK_CONVERSATIONS.find(c => c.id === displayId);

    const handleSelect = (id) => {
        if (id === selectedId) return;

        setSelectedId(id);
        setDisplayId(id);
        setReadIds(prev => new Set(prev).add(id));
    };

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((mouseMoveEvent) => {
        if (isResizing) {
            const newWidth = mouseMoveEvent.clientX - 264 - 12;
            if (newWidth > 200 && newWidth < 600) {
                setLeftWidth(newWidth);
            }
        }
    }, [isResizing]);

    const handleMouseMoveResizer = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
        <div className="main-content">
            <div className="left-side" style={{ width: leftWidth }}>
                <ConversationList selectedId={selectedId} onSelect={handleSelect} readIds={readIds} />
            </div>
            <div className="resizer-v" onMouseDown={startResizing} onMouseMove={handleMouseMoveResizer}>
                <div className="resizer-handle">
                    <div className="resizer-line-small" />
                    <div className="resizer-line-main" />
                    <div className="resizer-line-small" />
                </div>
            </div>
            <div className="right-side">
                <ConversationView
                    conversation={activeConversation}
                />
            </div>
        </div>
    );
};

export default MainContent;
