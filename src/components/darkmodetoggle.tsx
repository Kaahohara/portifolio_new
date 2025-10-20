// DarkModeToggle.jsx

import React from 'react';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; 
import useDarkMode from './userdarkmode';


function DarkModeToggle() {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    
    const dotTransform = isDarkMode ? 'translate-x-full' : 'translate-x-0';
    
    return (
        <label className='flex cursor-pointer select-none items-center fixed top-4 right-4 z-50'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className='sr-only'
                />
                
                <div className='block h-8 w-14 rounded-full bg-gray-800 dark:bg-white transition-colors duration-300'></div>
                
                <div className={`
                    absolute left-1 top-1 h-6 w-6 rounded-full 
                    bg-white shadow-md transition-transform duration-300 ease-in-out
                    ${isDarkMode ? 'translate-x-0 bg-yellow-400 text-white' : 'translate-x-6 bg-white'}
                `}>
                     {isDarkMode ?  <SunIcon className="w-6 h-6" />  :  <MoonIcon className="w-6 h-6" /> }
                      
                </div>

            </div>
        </label>
    );
}

export default DarkModeToggle;