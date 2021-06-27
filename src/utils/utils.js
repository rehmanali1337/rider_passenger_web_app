import { toast } from 'react-toastify';

toast.configure()

export const notify_success = (text) => {
	toast.success(text, { autoClose: 2000 })
}
export const notify_error = (text) => {
	toast.error(text, { autoClose: 2000 })
}