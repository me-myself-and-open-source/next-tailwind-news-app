import type { NextPage } from 'next'
import Home from '../components/Home'
import Sidebar from '../components/layout/Sidebar'

const Main: NextPage = () => {
	return (
		<div className="flex">
			<Sidebar/>
			<Home/>
		</div>
	)
}

export default Main
