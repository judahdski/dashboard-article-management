import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ setNavTextHanlde }) => {
    return (
        <div className="w-64">
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <NavLink to="/" onClick={() => setNavTextHanlde('All Posts')} className="flex items-center pl-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Judah</span>
                    </NavLink>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to="/" onClick={() => setNavTextHanlde('All Posts')} className="activeLink flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">All posts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add_new" onClick={() => setNavTextHanlde('Add New')} className="activeLink flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">Add New</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/preview" onClick={() => setNavTextHanlde('Preview')} className="activeLink flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">Preview</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
