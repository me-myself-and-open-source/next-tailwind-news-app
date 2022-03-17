import axios from 'axios'
import type { NextPage } from 'next'
import Home from '../components/Home'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setSidebarMobileOpenTo } from '../redux/sidebar/sidebarSlice'
import { NewsItem } from '../types/news-item'

interface MainProps {
	news?: [NewsItem]
}

const Main: NextPage<MainProps> = ({news}: MainProps) => {
	const { isMobileOpen } = useAppSelector((state) => state.sidebar)
	const dispatch = useAppDispatch()

	return (
		<>
			{
				isMobileOpen &&
				<div onClick={ () => dispatch(setSidebarMobileOpenTo(false)) }
					className={`sm:hidden fixed w-full h-full bg-theme-overlay-quaternary z-3 cursor-pointer inset-0 z-10`}></div>
			}
			<Navbar />
			<div className="flex yinyleon">
				<Sidebar />
				<Home news={news} />
			</div>
		</>
	)
}

export const getServerSideProps = async () => {

	const url = process.env.SITE_URL + '/api/news';
	console.log(url);

	const news = await axios.get(url);
	console.log(news.data);

	return {
		props: {
			news: news.data
		}
	}

}

export default Main
