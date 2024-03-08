'use client'
import { IoIosSearch } from 'react-icons/io'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './SearchHeader.module.scss'
import { IoClose } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '@/shared/api/product/product.api'
import { IProduct } from '@/shared/api/types'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

interface ISearchHeaderProps {
	setIsActiveSearch: Dispatch<SetStateAction<boolean>>
}

const SearchHeader: FC<ISearchHeaderProps> = ({ setIsActiveSearch }) => {
	const [isActive, setIsActive] = useState(false)
	const [products, setProducts] = useState<IProduct[]>()
	const [searchContext, setSearchContext] = useState('')
	const { refetch } = useQuery({
		queryKey: ['products'],
		queryFn: () => productApi.getAllProducts({ search: searchContext })
	})

	const toggleActiveSearch = async (active: boolean) => {
		setIsActive(active)
		setIsActiveSearch(active)
		if (!active) {
			setProducts([])
			setSearchContext('')
		}
	}

	const searchHandler = async (searchContext: string) => {
		setSearchContext(searchContext)
		if (searchContext.length === 0) return setProducts([])
		const { data: refData } = await refetch()
		setProducts(refData)
	}

	return (
		<div className={styles.button}>
			{isActive && (
				<input
					type='text'
					className={classNames(styles.input, isActive && styles.active)}
					onChange={e => searchHandler(e.target.value)}
					value={searchContext}
				/>
			)}
			{!isActive && (
				<button onClick={() => toggleActiveSearch(true)}>
					<IoIosSearch size={24} color='#fff' />
				</button>
			)}
			{isActive && (
				<button onClick={() => toggleActiveSearch(false)}>
					<IoClose size={24} color='#fff' />
				</button>
			)}
			{products && (
				<div className={styles.search_items}>
					{products.map(product => (
						<Link
							href={`/product/${product.id}`}
							key={product.id}
							className={styles.search_item}
						>
							<div>
								<Image
									src={product.imagePath}
									alt={product.imagePath}
									width={40}
									height={40}
								/>
								<span>{product.title}</span>
							</div>
							<b>{product.price} UAH</b>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchHeader
