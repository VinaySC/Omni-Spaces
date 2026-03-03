import React from 'react';
import { MailIconNew, SlackIcon, ChatIcon } from './icons';

const ConversationItem = ({ id, name, time, subject, snippet, channel, tags, unread, active, isSelected, onClick }) => {
    const PlatformIcon = () => {
        if (channel === 'email') return <MailIconNew className="sender-icon" />;
        if (channel === 'slack') return <SlackIcon className="sender-icon" />;
        if (channel === 'chat') return <ChatIcon className="sender-icon" />;
        return null;
    };

    return (
        <div className={`convo-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div className="convo-top">
                <div className="convo-sender">
                    <PlatformIcon />
                    <span className="sender-name">{name}</span>
                </div>
                <span className="convo-time">{time}</span>
            </div>
            {subject && <div className="convo-headline">{subject}</div>}
            <div className="convo-bottom">
                {tags && tags.length > 0 && (
                    <div className="convo-tags">
                        {tags.map((tag, idx) => {
                            let tagClass = "list-tag tag-purple";
                            if (tag === 'Support') {
                                tagClass = "tag-badge tag-blue";
                            } else if (tag === 'Finance') {
                                tagClass = "tag-badge tag-violet";
                            }
                            return (
                                <span key={idx} className={tagClass}>
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                )}
                <p className="convo-snippet">{snippet}</p>
                {unread && <div className="unread-dot" />}
            </div>
        </div>
    );
};

export default ConversationItem;
