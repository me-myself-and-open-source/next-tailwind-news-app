export interface NewsItem {
    "creator": string;
    "title": string;
    "link": string;
    "pubDate": string;
    "content:encoded": string;
    "content:encodedSnippet": string;
    "dc:creator": string;
    "mediacontent": [{
        $: {
            url: string,
            medium: string
        }
    }];
    "content": string;
    "contentSnippet": string;
    "guid": string;
    "isoDate": string;
    "categories": string[];
}