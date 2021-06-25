import { createStore } from 'redux'
import { userReducer } from './reducer'
import { saveToLocalStorage } from './persistant_storage'



export const mainStore = createStore(userReducer)


mainStore.subscribe(() => {
	saveToLocalStorage(mainStore.getState())
})