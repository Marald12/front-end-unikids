import { axiosMain } from '@/shared/axios/axiosMain'
import { IProduct } from '@/shared/api/types'

interface IFindAllProducts {
	categoryId?: number
	sizeId?: number
	colorId?: number
}

export const ProductApi = {
	async getAllProducts(params?: IFindAllProducts) {
		const request = await axiosMain().get<IProduct[]>('/product', {
			params
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
