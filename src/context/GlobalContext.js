import { createContext } from 'react'

export const GlobalContextValue = {
	Colors: {
		pageBackground: '#E8F0F2',
		header: {
			headerBackground: '#F9F9F9',
			buttonBackground: '#FF7600',
			buttonBackgroundHover: '#fff',
			buttonText: '#ffffff',
			buttonTextHover: '#ff7600',
			buttonBorder: '#ffffff',
			buttonBorderHover: '#ff7600'
		},
		loadingCircleColor: '#FF7600',
		pageButton: {
			buttonBackground: '#FF7600',
			buttonBackgroundHover: '#fff',
			buttonText: '#ffffff',
			buttonTextHover: '#ff7600',
			buttonBorder: '#ffffff',
			buttonBorderHover: '#ff7600'
		},
		homeCards: {
			background: '#f9f9f9'
		}
	}
}


export const GlobalContext = createContext(GlobalContextValue)