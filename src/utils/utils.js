import { toast } from 'react-toastify';

toast.configure()

export const notify_success = (text) => {
	toast.success(text, { autoClose: 2000 })
}
export const notify_error = (text) => {
	toast.error(text, { autoClose: 2000 })
}



export const convertToDate = (timestamp) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dateTime = new Date(timestamp * 1000)
	const year = dateTime.getFullYear()
	const month = months[dateTime.getMonth()]
	const day = dateTime.getDate()
	const hour = dateTime.getHours()
	const minutes = dateTime.getMinutes()
	const date = `${day}-${month}-${year} ${hour}:${minutes}`
	return date
}