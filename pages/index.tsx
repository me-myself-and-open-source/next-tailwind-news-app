import type { NextPage } from 'next'
import Home from '../components/Home'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'

const Main: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<Home />
			</div>
		</>
	)
}

export default Main
