import React from 'react';
import { PrintTopBarIcon, VerticalMenuIcon, AIIcon, ChevronDownIcon, ReplyIcon, ForwardIcon, MailThreadTopBarIcon, ConversationIcon, ReplyAllIcon, ActivityIcon, InternalThreadsIcon, CollapseTopBarIcon } from './icons';
import FilterDropdown from './FilterDropdown';

const ConversationView = ({ conversation }) => {
    const [activeTab, setActiveTab] = React.useState('Conversation');
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const filterAnchorRef = React.useRef(null);

    const tabs = [
        { name: 'Conversation', icon: <ConversationIcon size={16} /> },
        { name: 'Activity', icon: <ActivityIcon size={16} /> },
        { name: 'Internal threads', icon: <InternalThreadsIcon size={16} /> }
    ];

    if (!conversation) {
        return <div className="convo-view empty">Select a conversation</div>;
    }

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div className="convo-view">
            {/* Header / Breadcrumbs - "this-bar" */}
            <div className="view-header">
                <div className="header-left">
                    <div className="support-group">
                        <div className="support-icon">S</div>
                        <span className="support-label">Support</span>
                    </div>
                    <div className="header-divider" />
                    <div className="header-actions">
                        <div className="icon-btn">
                            <MailThreadTopBarIcon size={16} />
                        </div>
                        <div className="icon-btn">
                            <PrintTopBarIcon size={16} />
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="icon-btn collapse-toggle">
                        <CollapseTopBarIcon size={16} />
                    </div>
                </div>
            </div>

            {/* Subject Area */}
            <div className="subject-area">
                <div className="subject-header">
                    <h1 className="subject-title">
                        {conversation.subject}
                    </h1>
                    <div
                        className={`icon-btn ${isFilterOpen ? 'active' : ''}`}
                        onClick={toggleFilter}
                        ref={filterAnchorRef}
                    >
                        <VerticalMenuIcon size={20} />
                    </div>
                </div>
                <FilterDropdown
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                    anchorRef={filterAnchorRef}
                />
                <div className="ai-summary">
                    <AIIcon size={16} className="ai-sum-icon" />
                    <p className="ai-text">
                        Generate AI Summary
                    </p>
                </div>
            </div>


            {/* Message Thread */}
            <div className="message-thread">
                {conversation.messages.map(msg => (
                    <div key={msg.id} className="message-item">
                        <div className="message-header">
                            <div className="sender-avatar">{msg.sender[0]}</div>
                            <div className="sender-info">
                                <div className="sender-top">
                                    <div className="sender-name-group">
                                        <span className="sender-name">{msg.sender}</span>
                                        <span className="sender-email">&lt;{msg.email}&gt;</span>
                                    </div>
                                    <div className="message-actions">
                                        <span className="message-time">{msg.time}</span>
                                        <div className="icon-btn">
                                            <ReplyAllIcon size={16} />
                                        </div>
                                        <div className="icon-btn">
                                            <VerticalMenuIcon size={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className="sender-meta">
                                    <span className="to-info">To: support@acme.com</span>
                                    <ChevronDownIcon size={12} className="meta-chevron" />
                                </div>
                            </div>
                        </div>
                        <div className="message-body">
                            <p>{msg.body}</p>
                        </div>
                        <div className="message-footer">
                            <button className="reply-btn primary">
                                <ReplyIcon size={14} />
                                Reply
                            </button>
                            <button className="reply-btn secondary">
                                <ForwardIcon size={14} />
                                Forward
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Footer */}
            <div className="view-footer">
                <input type="text" placeholder="Add a internal note..." className="note-input" />
                <button className="btn-add-note">Add</button>
            </div>
        </div>
    );
};

export default ConversationView;
