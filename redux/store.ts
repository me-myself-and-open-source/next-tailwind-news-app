import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './sidebar/sidebarSlice'

export const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		//news: newsSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
