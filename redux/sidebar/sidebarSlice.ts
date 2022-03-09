import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface SidebarState {
	isOpen: boolean
	isMobileOpen: boolean
}

const initialState: SidebarState = {
	isOpen: false,
	isMobileOpen: false,
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {

		toggleIsOpen: (state) => {
			state.isOpen = !state.isOpen
		},

		toggleIsMobileOpen: (state) => {
			state.isMobileOpen = !state.isMobileOpen
		},

		setSidebarMobileOpenTo: (state, action: PayloadAction<boolean>) => {
			state.isMobileOpen = action.payload
		},
	},
})

export const { toggleIsOpen, toggleIsMobileOpen, setSidebarMobileOpenTo } = sidebarSlice.actions

export const selectSidebarIsOpen = (state: RootState) => state.sidebar.isOpen
export const selectSidebarIsMobileOpen = (state: RootState) => state.sidebar.isMobileOpen

export default sidebarSlice.reducer
