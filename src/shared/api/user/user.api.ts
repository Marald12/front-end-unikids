import { axiosMain } from '@/shared/axios/axiosMain'
import { IUser } from '@/shared/api/types'

export const userApi = {
	async getAllUsers() {
		const request = await axiosMain().get<IUser[]>('/user')

		return request.data
	},
	async getOneUser(id: number) {
		const request = await axiosMain().get<IUser>(`/user/${id}`)

		return request.data
	},
	async getProfile() {
		const request = await axiosMain().get<IUser>(`/user/profile`)

		return request.data
	},
	async addLikesProduct(id: number) {
		const request = await axiosMain().post<IUser>(
			`/user/add-likes-product/${id}`
		)

		return request.data
	}
}
