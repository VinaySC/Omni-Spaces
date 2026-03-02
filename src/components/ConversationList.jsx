import React from 'react';
import { MenuCollapseIcon, MenuFilterIcon } from './icons';
import ConversationItem from './ConversationItem';
import { MOCK_CONVERSATIONS } from '../data/mockConversations';

const ConversationList = ({ selectedId, onSelect }) => {
    return (
        <>
            <div className="list-header">
                <div className="icon-btn">
                    <MenuCollapseIcon />
                </div>
                <div className="header-title">Mine</div>
                <div className="icon-btn">
                    <MenuFilterIcon size={20} />
                </div>
            </div>
            <div className="conversations-scroll">
                {MOCK_CONVERSATIONS.map(convo => (
                    <ConversationItem
                        key={convo.id}
                        {...convo}
                        isSelected={selectedId === convo.id}
                        onClick={() => onSelect(convo.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default ConversationList;
