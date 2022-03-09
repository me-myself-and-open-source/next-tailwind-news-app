import type { NextPage } from 'next'
import Home from '../components/Home'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setSidebarMobileOpenTo } from '../redux/sidebar/sidebarSlice'

const Main: NextPage = () => {
	const { isMobileOpen } = useAppSelector((state) => state.sidebar)
	const dispatch = useAppDispatch()

	return (
		<>
			{
				isMobileOpen &&
				<div onClick={ () => dispatch(setSidebarMobileOpenTo(false)) }
					className={`sm:hidden fixed w-full h-full bg-theme-overlay-quaternary z-3 cursor-pointer inset-0`}></div>
			}
			<Navbar />
			<div className="flex yinyleon">
				<Sidebar />
				<Home />
			</div>
		</>
	)
}

export default Main
