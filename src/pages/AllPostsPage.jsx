import React, { useState } from 'react';

const AllPostsPage = () => {
    const [selectedTab, setSelectedTab] = useState('published');

    const handleToggleSelectTab = (tabId) => {
        setSelectedTab(tabId);
    };

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px" role="tablist">
                    <li className="mr-2">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            type="button"
                            role="tab"
                            aria-controls="published"
                            aria-selected={selectedTab == 'published'}
                            id="published"
                            onClick={(e) => {
                                handleToggleSelectTab(e.target.id);
                            }}
                        >
                            Published
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                            type="button"
                            role="tab"
                            aria-controls="drafts"
                            aria-selected={selectedTab == 'drafts'}
                            id="drafts"
                            onClick={(e) => {
                                handleToggleSelectTab(e.target.id);
                            }}
                        >
                            Drafts
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            type="button"
                            role="tab"
                            aria-controls="trashed"
                            aria-selected={selectedTab == 'trashed'}
                            id="trashed"
                            onClick={(e) => {
                                handleToggleSelectTab(e.target.id);
                            }}
                        >
                            Trashed
                        </button>
                    </li>
                </ul>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4 mx-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">Silver</td>
                            <td class="px-6 py-4">Laptop</td>
                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">White</td>
                            <td class="px-6 py-4">Laptop PC</td>
                            <td class="px-6 py-4">$1999</td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Google Pixel Phone
                            </th>
                            <td class="px-6 py-4">Gray</td>
                            <td class="px-6 py-4">Phone</td>
                            <td class="px-6 py-4">$799</td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch 5
                            </th>
                            <td class="px-6 py-4">Red</td>
                            <td class="px-6 py-4">Wearables</td>
                            <td class="px-6 py-4">$999</td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllPostsPage;
