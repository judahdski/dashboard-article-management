import React from 'react';

const Header = ({navText}) => {
    return (
        <header className="h-14 flex items-center ps-8">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{navText}</span>
        </header>
    );
};

export default Header;
