declare global {
	namespace NodeJS {
		interface ProcessEnv {
			FREE_CODE_CAMP: string;
			NEWS_SOURCES: string;
			SITE_URL: string;
		}
	}
}

export {}
