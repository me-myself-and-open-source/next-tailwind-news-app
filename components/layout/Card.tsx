import { ArrowCircleUpIcon, BookmarkIcon, ChatAltIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import React from 'react'
import { NewsItem } from '../../types/news-item'

interface CardProps {
	item: NewsItem
}

const Card = ({item}: CardProps) => {
	console.log(item);
	
	return (
		<div className="relative min-w-[280px] max-w-[350px] justify-between flex-1 flex flex-col p-2 rounded-2xl bg-theme-bg-secondary border border-theme-divider-tertiary hover:border-theme-divider-secondary shadow-md group">

			<a href={item.link} target="_blank" className="absolute inset-0 w-full h-full focus:outline-none"></a>

			{/* Card Header */}
			<div className="flex flex-col mx-4">
				<div className="h-8 flex items-center justify-between">
					<div className="relative h-8 w-8 bg-white rounded-full"></div>
					<button className="relative menu">
						<DotsVerticalIcon className="h-4 w-4 text-theme-bg-secondary group-hover:text-theme-label-primary" />
					</button>
				</div>
				<h3 className="font-bold my-2 text-theme-label-primary">
					{item.title}
				</h3>
			</div>

			{/* Date and read time */}
			<div className="flex items-center text-theme-label-tertiary mx-4">
				<time dateTime="2022-03-09T08:12:22.743Z">
					Today
				</time>
				<div className="mx-1 w-1 h-1 rounded-full bg-theme-label-tertiary"></div>
				<span>
					1m read time
				</span>
			</div>

			{/* Card Image */}
			<div className=" h-40 my-2 rounded-xl relative overflow-hidden">
				<img className="absolute block inset-0 w-full h-full m-auto object-cover"
					src={item.mediacontent[0].$.url}
					alt="Article image here" />
			</div>

			{/* Card barter */}
			<div className="flex flex-row items-center justify-between mx-4">

				<div className="relative flex flex-row items-stretch cursor-pointer select-none text-theme-label-tertiary hover:text-avocado-70 group-icon">
					<button className="flex flex-row items-center justify-center no-underline shadow-none cursor-pointer select-none focus:outline relative rounded-lg p-1 m-1 group-icon-hover:bg-avocado-90/25">
						<ArrowCircleUpIcon className="w-6 h-6" />
					</button>
					<span className="flex items-center font-bold">4</span>
				</div>

				<div className="relative flex flex-row items-stretch cursor-pointer select-none text-theme-label-tertiary hover:text-avocado-70 group-icon">
					<button className="flex flex-row items-center justify-center no-underline shadow-none cursor-pointer select-none focus:outline relative rounded-lg p-1 m-1 group-icon-hover:bg-avocado-90/25">
						<ChatAltIcon className="w-6 h-6" />
					</button>
					<span className="flex items-center font-bold">4</span>
				</div>

				<div className="relative flex flex-row items-stretch cursor-pointer select-none text-theme-label-tertiary hover:text-avocado-70 group-icon">
					<button className="flex flex-row items-center justify-center no-underline shadow-none cursor-pointer select-none focus:outline relative rounded-lg p-1 m-1 group-icon-hover:bg-avocado-90/25">
						<BookmarkIcon className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card