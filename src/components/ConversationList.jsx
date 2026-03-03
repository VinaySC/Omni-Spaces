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
                {MOCK_CONVERSATIONS.map((convo, index) => (
                    <React.Fragment key={convo.id}>
                        <ConversationItem
                            {...convo}
                            isSelected={selectedId === convo.id}
                            onClick={() => onSelect(convo.id)}
                        />
                        {index < MOCK_CONVERSATIONS.length - 1 && <div className="list-divider" />}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default ConversationList;
