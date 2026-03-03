import React from 'react';
import { ReplyIcon, ReplyAllIcon, ForwardIcon, CollapseAllIcon } from './icons';

const FilterDropdown = ({ isOpen, onClose, anchorRef }) => {
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                anchorRef.current && !anchorRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, anchorRef]);

    return (
        <div className={`convo-dropdown ${isOpen ? 'show' : ''}`} ref={dropdownRef}>
            <div className="dropdown-content">
                <div className="dropdown-item">
                    <div className="item-icon">
                        <ReplyIcon size={16} />
                    </div>
                    <span className="item-label">Reply</span>
                </div>
                <div className="dropdown-item">
                    <div className="item-icon">
                        <ReplyAllIcon size={16} />
                    </div>
                    <span className="item-label">Reply All</span>
                </div>
                <div className="dropdown-item">
                    <div className="item-icon">
                        <ForwardIcon size={16} />
                    </div>
                    <span className="item-label">Forward</span>
                </div>
                <div className="dropdown-item">
                    <div className="item-icon">
                        <CollapseAllIcon size={16} />
                    </div>
                    <span className="item-label">Collapse All</span>
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
