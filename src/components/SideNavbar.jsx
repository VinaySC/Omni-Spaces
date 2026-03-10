import React, { useState, useEffect } from 'react';
import {
    AllViewsIcon,
    AnalyticsIcon,
    CustomersIcon,
    LiveInboxIcon,
    MineIcon,
    MoreIcon,
    MyInboxIcon,
    NotificationIcon,
    SearchIcon,
    EditIcon,
    TagsIcon,
    TeamsIcon,
    TemplatesIcon
} from './icons';
import { Settings, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './SideNavbar.css';

export default function SideNavbar({ onTagsClick, isTagsActive, activeTagsContext }) {
    const [expandedSpaces, setExpandedSpaces] = useState({
        support: true,
        finance: false
    });

    // Collapse all spaces when tags bar becomes active
    useEffect(() => {
        if (isTagsActive) {
            setExpandedSpaces({ support: false, finance: false });
        }
    }, [isTagsActive]);

    const toggleSpace = (space) => {
        setExpandedSpaces(prev => ({
            ...prev,
            [space]: !prev[space]
        }));
    };

    return (
        <nav className={`sidenav${isTagsActive ? ' tags-active' : ''}`}>
            {/* Header */}
            <div className="sidenav-header">
                <div className="company-logo-container">
                    <div className="company-logo">
                        <div className="logo-inner"></div>
                    </div>
                    <span className="company-name">Hiver</span>
                </div>
                <div className="header-actions">
                    <button className="action-button icon-btn">
                        <SearchIcon size={16} />
                    </button>
                    <button className="action-button icon-btn">
                        <EditIcon size={16} />
                    </button>
                </div>
            </div>

            <div className="divider"></div>

            {/* Main Navigation */}
            <ul className="nav-list">
                <li className="nav-item">
                    <div className="nav-link">
                        <div className="nav-content">
                            <MyInboxIcon size={16} className="nav-icon" /></div>
                        <div className="nav-label-container">
                            <span className="nav-text">My Inbox</span>
                            <span className="badge">8</span>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <div className="nav-content">
                            <LiveInboxIcon size={16} className="nav-icon" /></div>
                        <div className="nav-label-container">
                            <span className="nav-text">Live Inbox</span>
                            <span className="badge">8</span>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <div className="nav-content">
                            <NotificationIcon size={16} className="nav-icon" /></div>
                        <div className="nav-label-container">
                            <span className="nav-text">Notification</span>
                            <span className="badge">8</span>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="divider"></div>

            {/* Spaces Section */}
            <div className="section-label">Spaces</div>

            {/* Support Group */}
            <div className={`nav-group ${expandedSpaces.support ? 'is-expanded' : ''}`}>
                <div className="nav-item space-header" onClick={() => toggleSpace('support')}>
                    <div className={`nav-link ${isTagsActive && activeTagsContext === 'Support' ? 'active-trigger' : ''}`}>
                        <div className="nav-content">
                            <div className="avatar support-avatar">S</div></div>
                        <div className="nav-label-container">
                            <span className="nav-text">Support</span>
                        </div><div className="header-toggle">
                            {expandedSpaces.support ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                    </div>
                </div>

                <div className={`nested-container ${expandedSpaces.support ? 'is-expanded' : ''}`}>
                    <ul className="nav-list nested-list">
                        <li className="nav-item nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <MineIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">My Inbox</span>
                                    <span className="badge">8</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested active-item">
                            <div className="nav-link active">
                                <div className="nav-content">
                                    <MineIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text active-text">Mine</span>
                                    <span className="badge">8</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <TeamsIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">Teams</span>
                                </div></div>
                        </li>
                        <li className="nav-item nested">
                            <div className={`nav-link ${isTagsActive && activeTagsContext === 'Support' ? 'active-trigger' : ''}`} onClick={() => onTagsClick?.('Support')}>
                                <div className="nav-content">
                                    <TagsIcon size={14} className="nav-icon" />
                                </div>
                                <div className="nav-label-container">
                                    <span className="nav-text">Tags</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested last-nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <AllViewsIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">All views</span>
                                </div></div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Finance Group */}
            <div className={`nav-group ${expandedSpaces.finance ? 'is-expanded' : ''}`}>
                <div className="nav-item space-header" onClick={() => toggleSpace('finance')}>
                    <div className={`nav-link ${isTagsActive && activeTagsContext === 'Finance' ? 'active-trigger' : ''}`}>
                        <div className="nav-content">
                            <div className="avatar finance-avatar">F</div></div>
                        <div className="nav-label-container">
                            <span className="nav-text">Finance</span>
                        </div><div className="header-toggle">
                            {expandedSpaces.finance ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                    </div>
                </div>

                <div className={`nested-container ${expandedSpaces.finance ? 'is-expanded' : ''}`}>
                    <ul className="nav-list nested-list">
                        <li className="nav-item nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <MineIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">My Inbox</span>
                                    <span className="badge">8</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <MineIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">Mine</span>
                                    <span className="badge">8</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <TeamsIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">Teams</span>
                                </div></div>
                        </li>
                        <li className="nav-item nested">
                            <div className={`nav-link ${isTagsActive && activeTagsContext === 'Finance' ? 'active-trigger' : ''}`} onClick={() => onTagsClick?.('Finance')}>
                                <div className="nav-content">
                                    <TagsIcon size={14} className="nav-icon" />
                                </div>
                                <div className="nav-label-container">
                                    <span className="nav-text">Tags</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nested last-nested">
                            <div className="nav-link">
                                <div className="nav-content">
                                    <AllViewsIcon size={14} className="nav-icon" /></div>
                                <div className="nav-label-container">
                                    <span className="nav-text">All views</span>
                                </div></div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* More */}
            <div className="nav-item space-item">
                <div className="nav-link">
                    <div className="nav-content">
                        <MoreIcon size={16} className="nav-icon" /></div>
                    <div className="nav-label-container">
                        <span className="nav-text nav-text-faint">More</span>
                    </div></div>
            </div>

            <div className="divider"></div>

            {/* Browse Section */}
            <div className="section-label">Browse</div>

            <ul className="nav-list secondary-nav">
                <li className="nav-item">
                    <button className="nav-link as-button">
                        <div className="nav-content">
                            <CustomersIcon size={16} className="nav-icon" />
                        </div>
                        <div className="nav-label-container">
                            <span className="nav-text">Customers</span>
                        </div>
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link as-button">
                        <div className="nav-content">
                            <AnalyticsIcon size={16} className="nav-icon" />
                        </div>
                        <div className="nav-label-container">
                            <span className="nav-text">Analytics</span>
                        </div>
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link as-button">
                        <div className="nav-content">
                            <TemplatesIcon size={16} className="nav-icon" />
                        </div>
                        <div className="nav-label-container">
                            <span className="nav-text">Templates</span>
                        </div>
                    </button>
                </li>
            </ul>

            <div className="spacer"></div>

            {/* Footer */}
            <div className="sidenav-footer">
                <div className="user-profile">
                    <div className="profile-image">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" />
                    </div>
                    <div className="status-indicator"></div>
                </div>
                <div className="footer-actions">
                    <button className="action-button icon-btn">
                        <Settings size={20} />
                    </button>
                    <button className="action-button icon-btn">
                        <HelpCircle size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
