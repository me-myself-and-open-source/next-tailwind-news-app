import { NewsItem } from "./news-item";

export interface News {
    "title": string;
    "description": string;
    "generator": string;
    "link": string;
    "lastBuildDate": string;
    "ttl": string;
    "feedUrl": string;
    "image": {
        link: string;
        url: string;
        title: string;
    }
    items: [NewsItem]
}