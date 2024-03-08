import { axiosMain } from '@/shared/axios/axiosMain'
import { IProduct } from '@/shared/api/types'

interface IProductParams {
	search?: string
	categoryId?: number
	sizeId?: number
	colorId?: number
}

export const productApi = {
	async getAllProducts(params?: IProductParams) {
		const request = await axiosMain().get<IProduct[]>('/product', {
			params: { ...params }
		})

		return request.data
	},
	async getOneProduct(id: number) {
		const request = await axiosMain().get<IProduct>(`/product/${id}`)

		return request.data
	},
	async findPopularProducts() {
		const request = await axiosMain().get<IProduct[]>(`/product/find-popular`)

		return request.data
	}
}
