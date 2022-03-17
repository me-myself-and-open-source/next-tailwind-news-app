import { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

type CustomFeed = { foo: string };
type CustomItem = {};

const parser: Parser = new Parser({
	customFields: {
		item:
			[
				['media:content', 'mediacontent', {keepArray: true}]
			]
	}
});

const news = async (req: NextApiRequest,
	res: NextApiResponse<any>) => {

	const url: string = process.env.FREE_CODE_CAMP;

	const feed = await parser.parseURL(url);

	res.status(200).json(feed);

}

export default news;
