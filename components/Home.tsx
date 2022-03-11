import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import Card from './layout/Card'

const Home = () => {
	const [mounted, setMounted] = useState(false)

	const { theme, setTheme } = useTheme()
	const { isOpen } = useAppSelector((state) => state.sidebar)

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<div className={`${isOpen ? 'sm:ml-64' : 'sm:ml-12'} bg-theme-bg-primary transition-width duration-300 flex-grow`}>

			<div className={styles.container}>
				<Head>
					<title>Daily Dev Clone</title>
					<meta name="description" content="DailyDev clone using Tailwind, NextJS and ReduxToolkit" />
					<meta property="og:image" content="https://next-tailwind-news-app.netlify.app/preview.png" />
					<link rel="image_src" href="https://next-tailwind-news-app.netlify.app/preview.png" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						<div>
							<span>Switch to: </span>
							{
								theme == 'dark'
									? <button onClick={() => setTheme('light')}>Light Mode</button>
									: <button onClick={() => setTheme('dark')}>Dark Mode</button>
							}

						</div>
					</h1>

					<div className="w-full flex gap-4 flex-wrap"></div>
					<div className="w-full flex gap-4 flex-wrap">

						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />

					</div>


				</main>

				<footer className={styles.footer}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{' '}
						<span className={styles.logo}>
							<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
						</span>
					</a>
				</footer>
			</div>

		</div>

	)
}

export default Home
