import React from 'react';
import { CloseIcon, ChevronDownIcon } from './icons';
import './MainFilterPanel.css';

const MainFilterPanel = ({ isOpen, onClose }) => {
    return (
        <div className={`main-filter-panel ${isOpen ? 'open' : ''}`}>
            <div className="filter-header">
                <h2 className="filter-title">Filter</h2>
                <button className="icon-btn close-btn" onClick={onClose}>
                    <CloseIcon size={14} />
                </button>
            </div>

            <div className="filter-content scrollbar-hide">
                <div className="filter-field">
                    <label className="field-label">Assigned</label>
                    <div className="field-input-wrapper">
                        <div className="filter-chip">
                            <span>Joy Hurin</span>
                            <span className="chip-remove">×</span>
                        </div>
                        <div className="suffix-icon">
                            <ChevronDownIcon size={14} />
                        </div>
                    </div>
                </div>

                <div className="filter-field">
                    <label className="field-label">Channels</label>
                    <div className="field-input-wrapper">
                        <div className="chip-group">
                            <div className="filter-chip">
                                <span>support@acme.com</span>
                                <span className="chip-remove">×</span>
                            </div>
                            <div className="filter-chip badge-count">
                                <span>+3</span>
                            </div>
                        </div>
                        <div className="suffix-icon">
                            <ChevronDownIcon size={14} />
                        </div>
                    </div>
                </div>

                <div className="filter-field">
                    <label className="field-label">Status</label>
                    <div className="field-input-wrapper">
                        <div className="filter-chip">
                            <span>Open</span>
                            <span className="chip-remove">×</span>
                        </div>
                        <div className="suffix-icon">
                            <ChevronDownIcon size={14} />
                        </div>
                    </div>
                </div>

                <div className="tags-section">
                    <h3 className="section-title">Tags</h3>

                    <div className="filter-field">
                        <label className="field-label">Contains</label>
                        <div className="field-input-wrapper placeholder">
                            <span className="placeholder-text">Select tag(s)</span>
                            <div className="suffix-icon">
                                <ChevronDownIcon size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="filter-field">
                        <label className="field-label">Does not contain</label>
                        <div className="field-input-wrapper placeholder">
                            <span className="placeholder-text">Select tag(s)</span>
                            <div className="suffix-icon">
                                <ChevronDownIcon size={14} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filter-actions-inline">
                    <button className="btn-cancel" onClick={onClose}>
                        <span>Cancel</span>
                    </button>
                    <button className="btn-save-view">
                        <span>Save view</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainFilterPanel;
