import React from 'react';
import { ArrowLeft, Plus, Search } from 'lucide-react';
import { TagsIcon } from './icons';
import './TagsBar.css';

const TAGS_DATA = [
    { id: 1, name: 'Active', count: 5, color: '#334155' },
    { id: 2, name: 'Career', count: 2, color: '#FF7DFF' },
    { id: 3, name: 'Management', count: 8, color: '#4ADE80' },
    { id: 4, name: 'Skills', count: 3, color: '#334155' },
    { id: 5, name: 'Solving', count: 7, color: '#60A5FA' },
];

export default function TagsBar({ context = 'Support', onBack, isClosing = false }) {
    return (
        <div className={`tags-bar ${isClosing ? 'closing' : ''}`}>
            {/* Header */}
            <div className="tags-bar-header">
                <div className="header-left">
                    <button className="back-button icon-btn" onClick={onBack}>
                        <ArrowLeft size={16} />
                    </button>
                    <span className="tags-bar-title">{context} / Tags</span>
                </div>
                <button className="add-button icon-btn">
                    <Plus size={16} />
                </button>
            </div>

            {/* Search */}
            <div className="tags-bar-search">
                <div className="search-input-wrapper">
                    <Search size={16} className="search-icon" />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
            </div>

            {/* Tags List */}
            <div className="tags-list-container">
                <ul className="tags-list">
                    {TAGS_DATA.map((tag) => (
                        <li key={tag.id} className={`tag-item ${tag.name === 'Active' ? 'active' : ''}`}>
                            <div className="tag-link">
                                <div className="tag-content">
                                    <TagsIcon size={14} style={{ color: tag.color }} />
                                    <span className="tag-name">{tag.name}</span>
                                </div>
                                <span className="tag-count">{tag.count}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
