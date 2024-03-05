import { IMedia } from '@/shared/api/types'
import { axiosMain } from '@/shared/axios/axiosMain'

export const uploadMedia = async (media: FormData, folder?: string) => {
	const request = await axiosMain().post<IMedia>('/media', media, {
		params: { folder },
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	return request.data
}
