import React from 'react';
import './MainContent.css';
import ConversationList from './ConversationList';
import ConversationView from './ConversationView';
import { MOCK_CONVERSATIONS } from '../data/mockConversations';

const MainContent = () => {
    const [selectedId, setSelectedId] = React.useState(2);
    const selectedConversation = MOCK_CONVERSATIONS.find(c => c.id === selectedId);

    return (
        <div className="main-content">
            <div className="left-side">
                <ConversationList selectedId={selectedId} onSelect={setSelectedId} />
            </div>
            <div className="right-side">
                <ConversationView conversation={selectedConversation} />
            </div>
        </div>
    );
};

export default MainContent;
