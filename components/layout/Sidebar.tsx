import React from 'react'
import { BeakerIcon, ChevronRightIcon } from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleIsOpen } from '../../redux/sidebar/sidebarSlice'

const Sidebar = () => {

    const { isOpen, isMobileOpen } = useAppSelector((state) => state.sidebar)
    const dispatch = useAppDispatch()

    return (
        <>
            {/* Sidebar */}
            <div className={`sidebar sm:py-4 space-y-4 sm:space-y-12 ${isOpen ? 'w-64' : 'w-64 sm:w-12'} ${isMobileOpen ? '' : '-left-64 sm:left-0'}`}>

                {/* Sidebar open/close */}
                <button className="sidebar-desktop-toggle"
                    onClick={() => dispatch(toggleIsOpen())}>
                    <ChevronRightIcon className={`h-4 w-4 text-theme-label-invert ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <ul className="">

                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />

                </ul>
                <ul className="">

                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />
                    <SideBarIcon icon={<BeakerIcon className="sidebar-icon" />}
                        text="Baker" />

                </ul>


            </div>
        </>

    )
}

export default Sidebar