import React from 'react';
import { MenuCollapseIcon, MenuFilterIcon } from './icons';
import ConversationItem from './ConversationItem';
import { MOCK_CONVERSATIONS } from '../data/mockConversations';

const ConversationList = ({ selectedId, onSelect, readIds, isFilterActive, onFilterClick }) => {
    return (
        <>
            <div className="list-header">
                <div className="icon-btn">
                    <MenuCollapseIcon />
                </div>
                <div className="header-title">Mine</div>
                <div className={`icon-btn ${isFilterActive ? 'active' : ''}`} onClick={onFilterClick}>
                    <MenuFilterIcon size={20} />
                </div>
            </div>
            <div className="conversations-scroll">
                {MOCK_CONVERSATIONS.map((convo, index) => {
                    const isUnread = convo.unread && !readIds.has(convo.id);
                    return (
                        <React.Fragment key={convo.id}>
                            <ConversationItem
                                {...convo}
                                unread={isUnread}
                                isSelected={selectedId === convo.id}
                                onClick={() => onSelect(convo.id)}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};

export default ConversationList;
