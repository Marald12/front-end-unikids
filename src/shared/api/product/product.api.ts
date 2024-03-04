import { axiosMain } from '@/shared/axios/axiosMain'
import { IProduct } from '@/shared/api/types'

interface IFindAllProducts {
	categoryId?: number
	sizeId?: number
	colorId?: number
}

export const ProductApi = {
	async getAllProducts(params?: IFindAllProducts): Promise<IProduct[]> {
		const request = await axiosMain().get('/product', {
			params
		})

		return request.data
	},
	async getOneProduct(id: number): Promise<IProduct> {
		const request = await axiosMain().get(`/product/${id}`)

		return request.data
	},
	async findPopularProducts(): Promise<IProduct[]> {
		const request = await axiosMain().get(`/product/find-popular`)

		return request.data
	}
}
