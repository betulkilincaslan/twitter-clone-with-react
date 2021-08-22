import React from 'react';
import { Icon } from '../icon';

const SearchField = () => {
    return (
        <div className="searchFieldContainer">
            <input
                type="text"
                className="searchFieldContainer__input"
                placeholder="Search Twitter"
            />
            <div className="searchFieldIcon">
                <Icon size={18} iconName="search" />
            </div>
            <div className="searchField__autocomplete">
                <span>Try searching for people, topics, or keywords.</span>
            </div>
        </div>
    );
}

export default SearchField;