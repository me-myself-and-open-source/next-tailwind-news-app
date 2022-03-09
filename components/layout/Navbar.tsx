import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { toggleIsMobileOpen } from '../../redux/sidebar/sidebarSlice'

const Navbar = () => {
	const dispatch = useAppDispatch()

	return (
		<div className="navbar">
			{/* Mobile toggle */}
			<button className="sidebar-mobile-toggle" onClick={() => dispatch(toggleIsMobileOpen())}>
				<MenuIcon className="h-8 w-8" />
			</button>
			<div>
				Logo
			</div>
			<div>
				Avatar
			</div>
		</div>
	)
}

export default Navbar