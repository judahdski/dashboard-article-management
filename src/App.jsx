import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllPostsPage from './pages/AllPostsPage';
import AddNewPage from './pages/AddNewPage';

function App() {
    const [navText, setNavText] = useState('All Posts');

    const handleSetNavText = (text) => {
        setNavText(text);
    };

    return (
        <div className="w-full h-full flex">
            <Sidebar setNavTextHanlde={handleSetNavText} />
            <main className="flex-1 flex flex-col">
                <Header navText={navText} />
                <section className="flex-1">
                    <Routes>
                        <Route path="/" element={<AllPostsPage />} />
                        <Route path="/add_new" element={<AddNewPage />} />
                        <Route path="/preview" element={<p>Preview</p>} />
                    </Routes>
                </section>
                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023{' '}
                            <a href="https://flowbite.com/" className="hover:underline">
                                Flowbite™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
