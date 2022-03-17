declare global {
	namespace NodeJS {
		interface ProcessEnv {
			FREE_CODE_CAMP: string;
			SITE_URL: string;
		}
	}
}

export {}
