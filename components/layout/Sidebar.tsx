import React from 'react'
import { BeakerIcon, MenuIcon, ChevronRightIcon } from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleIsMobileOpen, toggleIsOpen } from '../../redux/sidebar/sidebarSlice'

const Sidebar = () => {

    const {isOpen, isMobileOpen} = useAppSelector((state) => state.sidebar)
    const dispatch = useAppDispatch()

    return (
        <>
            {/* Mobile toggle */}
            <button className="sidebar-mobile-toggle" onClick={() => dispatch(toggleIsMobileOpen())}>
                <MenuIcon className="h-8 w-8" />
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'w-64' : 'w-64 sm:w-12'} ${isMobileOpen ? '' : '-left-64 sm:left-0'}`}>

                {/* Sidebar open/close */}
                <button className="sidebar-desktop-toggle"
                    onClick={() => dispatch(toggleIsOpen())}>
                    <ChevronRightIcon className={`h-4 w-4 text-theme-label-primary ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                    text="Baker" />

            </div>
        </>

    )
}

export default Sidebar