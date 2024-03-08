'use client'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '@/shared/api/product/product.api'
import styles from './MainPageCategoriesList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const MainPageCategoriesList = () => {
	const { data: productData } = useQuery({
		queryKey: ['product'],
		queryFn: () => productApi.getOneProduct(1)
	})
	const { data: categoryData } = useQuery({
		queryKey: ['category'],
		queryFn: () => productApi.getOneProduct(2)
	})

	return (
		<div className={styles.wrapper}>
			{productData && (
				<div className={styles.product}>
					<Image
						src={productData.imagePath}
						alt={productData.imagePath}
						width={704}
						height={832}
					/>
					<div>
						<h1>{productData.category.title}</h1>
						<p>{productData.description}</p>
						<Link href={`/category/${productData.category.id}`}>
							Подробнее <FaArrowRight size={16} />
						</Link>
					</div>
				</div>
			)}
			{categoryData && (
				<div className={styles.category}>
					<div>
						<h1>Для девочек</h1>
						<p>{categoryData.description}</p>
						<Link href={`/main-category/${categoryData.mainCategory.id}`}>
							Подробнее <FaArrowRight size={16} />
						</Link>
					</div>
					<Image
						src={categoryData.imagePath}
						alt={categoryData.imagePath}
						width={704}
						height={832}
					/>
				</div>
			)}
		</div>
	)
}

export default MainPageCategoriesList
