import React from 'react'
import { useAppSelector } from '../../redux/hooks';

interface SidebarRowProps {
    icon: React.ComponentProps<'svg'>
    text: string
    tooltip?: string
};

const SideBarIcon: React.FC<SidebarRowProps> = ({ icon, text, tooltip = text }) => {

    const isOpen = useAppSelector((state) => state.sidebar.isOpen)

    return (
        <div className="text-theme-label-primary flex items-center h-12 cursor-pointer group">
            <div className="">
                {icon}
            </div>
            <div className={`${isOpen ? 'opacity-100' : 'sm:opacity-0'} transition-opacity duration-300 `}>
                {text}
            </div>

            <div className={`sidebar-tooltip flex ${ isOpen ? '' : 'sm:group-hover:scale-100'}`}>
                {tooltip + ' 💡'}
            </div>
        </div>
    )
};

export default SideBarIcon
