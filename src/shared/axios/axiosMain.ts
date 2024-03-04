import axios from 'axios'

export const axiosMain = (token: string = '') =>
	axios.create({
		baseURL: 'http://localhost:3001/api',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
