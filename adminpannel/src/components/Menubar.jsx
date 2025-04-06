import React from 'react';

const Menubar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
            <button className="btn btn-primary" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
            </button>
        </nav>
    );
};

export default Menubar;
