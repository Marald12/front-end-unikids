'use client'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductApi } from '@/shared/api/product/product.api'

const MainPage: FC = () => {
	const { data } = useQuery({
		queryKey: ['product'],
		queryFn: () => ProductApi.findPopularProducts()
	})

	console.log(data)

	return <div></div>
}

export default MainPage
