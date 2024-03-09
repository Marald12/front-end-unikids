import { axiosMain } from '@/shared/axios/axiosMain'
import { IBasket } from '@/shared/api/types'

export const basketApi = {
	async getOneProduct(id: number) {
		const request = await axiosMain().get<IBasket>('/basket')

		return request.data
	},
	async addProduct(id: number) {
		const request = await axiosMain().post<IBasket>(`/basket/add-product/${id}`)

		return request.data
	},
	async removeProduct(id: number) {
		const request = await axiosMain().post<IBasket>(
			`/basket/remove-product/${id}`
		)

		return request.data
	}
}
