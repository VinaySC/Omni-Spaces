import React from 'react';
import { MailIconNew, SlackIcon, ChatIcon, MailIconNewV2, SlackIconV2, ChatNewIconV2 } from './icons';

const ConversationItem = ({ id, name, time, subject, snippet, channel, tags, unread, active, isSelected, onClick }) => {
    const PlatformIcon = () => {
        if (channel === 'email') return <div className="platform-icon-wrapper email"><MailIconNewV2 size={24} /></div>;
        if (channel === 'slack') return <div className="platform-icon-wrapper slack"><SlackIconV2 size={24} /></div>;
        if (channel === 'chat') return <div className="platform-icon-wrapper chat"><ChatNewIconV2 size={24} /></div>;
        return null;
    };

    const isEmail = channel === 'email';

    return (
        <div className={`convo-item ${isSelected ? 'selected' : ''} ${unread ? 'unread' : ''} ${channel}-card`} onClick={onClick}>
            <div className="convo-top">
                <div className="convo-sender">
                    <PlatformIcon />
                    <span className="sender-name">{name}</span>
                    {unread && <div className="unread-dot" />}
                </div>
                <div className="convo-meta">
                    <span className="convo-time">{time}</span>
                </div>
            </div>

            <div className="convo-content-wrapper">
                {isEmail && subject && (
                    <div className="convo-headline">{subject}</div>
                )}
                <p className="convo-snippet">{snippet}</p>
            </div>
        </div>
    );
};

export default ConversationItem;
