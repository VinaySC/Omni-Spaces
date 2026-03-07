import React, { useState, useRef, useLayoutEffect } from 'react';
import {
    MailIcon,
    PositiveIcon,
    OpenIcon,
    TagIcon,
    CustomFieldIcon,
    ContactIcon,
    AccountIcon,
    RightChevronIcon,
    CollapseRightPanelIcon
} from './icons';
import './DetailsPanel.css';

export default function DetailsPanel() {
    const [activeTab, setActiveTab] = useState('Details');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef({});

    const [expandedSections, setExpandedSections] = useState({
        tags: true, // Defaulting some to expanded for demo
        customFields: true,
        contact: false,
        account: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const tabs = ['Details', 'Co-Pilot', 'Apps'];

    useLayoutEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            const { offsetLeft, offsetWidth } = activeTabElement;
            setIndicatorStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`
            });
        }
    }, [activeTab]);

    return (
        <aside className="details-panel">
            {/* Header Tabs */}
            <div className="panel-header">
                <div className="tabs-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            ref={el => tabRefs.current[tab] = el}
                            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                    <div
                        className="tab-indicator"
                        style={indicatorStyle}
                    ></div>
                </div>
                <button className="panel-action-btn">
                    <CollapseRightPanelIcon size={16} />
                </button>
            </div>

            <div className="panel-content">
                <div
                    className="tab-slider"
                    style={{ transform: `translateX(-${tabs.indexOf(activeTab) * 100}%)` }}
                >
                    {/* Details Tab Pane */}
                    <div className={`tab-pane ${activeTab === 'Details' ? 'active' : ''}`}>
                        {/* Metadata Section */}
                        <div className="metadata-section">
                            <div className="metadata-row">
                                <span className="metadata-label">Channel</span>
                                <div className="metadata-value">
                                    <div className="meta-icon-wrapper channel-icon">
                                        <MailIcon size={20} />
                                    </div>
                                    <span className="meta-text">support@acme.com</span>
                                </div>
                            </div>

                            <div className="metadata-row">
                                <span className="metadata-label">Assignee</span>
                                <div className="metadata-value">
                                    <div className="meta-avatar">
                                        <img src="https://i.pravatar.cc/150?u=joy" alt="Joy" />
                                    </div>
                                    <span className="meta-text">Joy Hurin</span>
                                </div>
                            </div>

                            <div className="metadata-row">
                                <span className="metadata-label">Status</span>
                                <div className="metadata-value">
                                    <div className="meta-icon-wrapper status-icon">
                                        <OpenIcon size={20} />
                                    </div>
                                    <span className="meta-text">Open</span>
                                </div>
                            </div>

                            <div className="metadata-row">
                                <span className="metadata-label ai-sentiment-label">
                                    AI Sentiment
                                </span>
                                <div className="metadata-value">
                                    <div className="meta-icon-wrapper sentiment-icon">
                                        <PositiveIcon size={20} />
                                    </div>
                                    <span className="meta-text sentiment-text">Very Positive</span>
                                </div>
                            </div>
                        </div>

                        {/* Collapsible Sections List */}
                        <div className="sections-list">
                            {/* Tags Section */}
                            <div className={`section-block ${expandedSections.tags ? 'expanded' : ''}`}>
                                <button className="section-row" onClick={() => toggleSection('tags')}>
                                    <div className="section-left">
                                        <TagIcon size={16} className="section-icon" />
                                        <span className="section-text">Tags</span>
                                    </div>
                                    <div className="section-right">
                                        <RightChevronIcon size={14} className="chevron-icon" />
                                    </div>
                                </button>
                                <div className={`section-expanded-wrapper ${expandedSections.tags ? 'expanded' : ''}`}>
                                    <div className="section-expanded-content">
                                        <div className="section-expanded-inner tags-content">
                                            <div className="tag-badge add-tag">
                                                <span className="tag-icon">+</span>
                                                <span>Add</span>
                                            </div>
                                            <div className="tag-badge tag-blue">Priority</div>
                                            <div className="tag-badge tag-violet">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Custom Fields Section */}
                            <div className={`section-block ${expandedSections.customFields ? 'expanded' : ''}`}>
                                <button className="section-row" onClick={() => toggleSection('customFields')}>
                                    <div className="section-left">
                                        <CustomFieldIcon size={16} className="section-icon" />
                                        <span className="section-text">Custom Fields</span>
                                    </div>
                                    <div className="section-right">
                                        <RightChevronIcon size={14} className="chevron-icon" />
                                    </div>
                                </button>
                                <div className={`section-expanded-wrapper ${expandedSections.customFields ? 'expanded' : ''}`}>
                                    <div className="section-expanded-content">
                                        <div className="section-expanded-inner field-content">
                                            <div className="field-row">
                                                <span className="field-label">MRR</span>
                                                <span className="field-value empty">Empty</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Domain</span>
                                                <span className="field-value">google.com</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Location</span>
                                                <span className="field-value">US</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className={`section-block ${expandedSections.contact ? 'expanded' : ''}`}>
                                <button className="section-row" onClick={() => toggleSection('contact')}>
                                    <div className="section-left">
                                        <ContactIcon size={16} className="section-icon" />
                                        <span className="section-text">Contact</span>
                                    </div>
                                    <div className="section-right">
                                        <RightChevronIcon size={14} className="chevron-icon" />
                                    </div>
                                </button>
                                <div className={`section-expanded-wrapper ${expandedSections.contact ? 'expanded' : ''}`}>
                                    <div className="section-expanded-content">
                                        <div className="section-expanded-inner field-content">
                                            <div className="field-row">
                                                <span className="field-label">Name</span>
                                                <div className="field-value user-value">
                                                    <div className="meta-avatar mini">
                                                        <span className="avatar-initial pink">K</span>
                                                    </div>
                                                    <span>Kate Hyde</span>
                                                </div>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Email</span>
                                                <span className="field-value">kate@google.com</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Account</span>
                                                <span className="field-value">Google</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Recent conversations</span>
                                                <span className="field-value link">4 conversations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Section */}
                            <div className={`section-block ${expandedSections.account ? 'expanded' : ''}`}>
                                <button className="section-row" onClick={() => toggleSection('account')}>
                                    <div className="section-left">
                                        <AccountIcon size={16} className="section-icon" />
                                        <span className="section-text">Account</span>
                                    </div>
                                    <div className="section-right">
                                        <RightChevronIcon size={14} className="chevron-icon" />
                                    </div>
                                </button>
                                <div className={`section-expanded-wrapper ${expandedSections.account ? 'expanded' : ''}`}>
                                    <div className="section-expanded-content">
                                        <div className="section-expanded-inner field-content">
                                            <div className="field-row">
                                                <span className="field-label">Name</span>
                                                <div className="field-value user-value">
                                                    <div className="meta-avatar mini">
                                                        <span className="avatar-initial gray">G</span>
                                                    </div>
                                                    <span>Google</span>
                                                </div>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Domain</span>
                                                <span className="field-value">google.com</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Contacts</span>
                                                <span className="field-value link">7 contacts</span>
                                            </div>
                                            <div className="field-row">
                                                <span className="field-label">Recent conversations</span>
                                                <span className="field-value link">24 conversations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Co-Pilot Tab Pane */}
                    <div className={`tab-pane ${activeTab === 'Co-Pilot' ? 'active' : ''}`}>
                        <div className="empty-tab-content">
                            Co-Pilot page comes here
                        </div>
                    </div>

                    {/* Apps Tab Pane */}
                    <div className={`tab-pane ${activeTab === 'Apps' ? 'active' : ''}`}>
                        <div className="empty-tab-content">
                            Apps page comes here
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
