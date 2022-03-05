import React, { useState } from 'react'
import { BeakerIcon, MenuIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const toggleIsMobileOpen = () => {
        setIsMobileOpen(!isMobileOpen)
    }

    return (
        <>
            {/* Mobile toggle */}
            <button className="sidebar-mobile-toggle" onClick={toggleIsMobileOpen}>
                <MenuIcon className="h-8 w-8" />
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'w-64' : 'w-64 sm:w-12'} ${isMobileOpen ? '' : '-left-64 sm:left-0'}`}>

                {/* Sidebar open/close */}
                <button className="sidebar-desktop-toggle"
                    onClick={toggleIsOpen}>
                    <ChevronRightIcon className="h-4 w-4 text-white" />
                </button>

                <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                    isOpen={isOpen} isMobileOpen={isMobileOpen} text="Baker" />

            </div>
        </>

    )
}

interface SidebarRowProps {
    icon: React.ComponentProps<'svg'>
    text: string
    isOpen: boolean
    isMobileOpen: boolean
};



const SideBarIcon: React.FC<SidebarRowProps> = ({ icon, isOpen = false, isMobileOpen = false, text = 'tooltip 💡' }) => {
    return (
        <div className="h-16 text-white flex items-center group">
            <div className="">
                {icon}
            </div>
            <div className={`${isOpen ? 'opacity-100' : 'sm:opacity-0'} transition-opacity duration-300 `}>
                {text}
            </div>

            <span className={`sidebar-tooltip ${ isOpen ? '' : 'sm:group-hover:scale-100'}`}>
                {text}
            </span>
        </div>
    )
};

export default Sidebar