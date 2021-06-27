import { types } from './variables'
import { loadFromLocalStorage, resetStoreState } from './persistant_storage'


const initialState = loadFromLocalStorage()


export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN: {
			return { ...state, loggedIn: true, accessToken: action.payload.accessToken }
		}
		case types.LOGOUT: {
			resetStoreState()
			return loadFromLocalStorage()
		}
		default:
			return { ...state }
	}
}