import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href=""
                    className="hover:underline">Ride.</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="ml-3">
                        <a href="./pages/About.html" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li className="ml-3">
                        <a href="./pages/" className="hover:underline me-4 md:me-6">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer