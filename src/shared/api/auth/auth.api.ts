import { AuthDto, CreateUserDto, IAuth } from '@/shared/api/types'
import { axiosMain } from '@/shared/axios/axiosMain'

export const authApi = {
	async login(dto: AuthDto) {
		const request = await axiosMain().post<IAuth>('/auth/login', dto)

		return request.data
	},
	async register(dto: CreateUserDto) {
		const request = await axiosMain().post<IAuth>('/auth/register', dto)

		return request.data
	}
}
