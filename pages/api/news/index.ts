import { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';
import { byPropertiesOf } from '../../../helpers/arraySort';
import { NewsItem } from '../../../types/news-item';

type CustomFeed = { foo: string };
type CustomItem = {};

const parser: Parser = new Parser({
	customFields: {
		item:
			[
				['media:content', 'mediacontent', { keepArray: true }]
			]
	}
});

const fetchContent = async (source: string) => {
	const feed = await parser.parseURL(source);
	return feed;
}

const news = async (req: NextApiRequest,
	res: NextApiResponse<any>) => {

	const sources = process.env.NEWS_SOURCES.split(' , ');

	let newsFeed: any[] = []

	for (const source of sources) {
		const feed = await parser.parseURL(source);
		newsFeed.push(...feed.items);
	};

	newsFeed.sort(byPropertiesOf<NewsItem>(['isoDate']))

	res.status(200).json(newsFeed);

}

export default news;
