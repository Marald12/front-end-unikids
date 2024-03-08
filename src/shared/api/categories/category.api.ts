import { axiosMain } from '@/shared/axios/axiosMain'
import { ICategory, IMainCategory } from '@/shared/api/types'

export const categoryApi = {
	async getAllCategories() {
		const request = await axiosMain().get<ICategory[]>('/category')

		return request.data
	},
	async getOneCategory(id: number) {
		const request = await axiosMain().get<ICategory>(`/category/${id}`)

		return request.data
	},
	async getAllMainCategories() {
		const request = await axiosMain().get<IMainCategory[]>(
			'/category/main-category'
		)

		return request.data
	},
	async getOneMainCategories(id: number) {
		const request = await axiosMain().get<IMainCategory>(
			`/category/main-category/${id}`
		)

		return request.data
	}
}
