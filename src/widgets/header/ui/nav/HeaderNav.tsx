'use client'
import styles from './HeaderNav.module.scss'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { categoryApi } from '@/shared/api/categories/category.api'
import SearchHeader from '@/widgets/header/ui/search/SearchHeader'
import { useState } from 'react'

const HeaderNav = () => {
	const [isActiveSearch, setIsActiveSearch] = useState(false)
	const { data: mainCategoryData } = useQuery({
		queryKey: ['mainCategory'],
		queryFn: () => categoryApi.getAllMainCategories()
	})

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>Главная</Link>
				</li>
				{mainCategoryData?.map(mainCategory => (
					<li key={mainCategory.id}>
						<Link href={`/main-category/${mainCategory.id}`}>
							{mainCategory.title}
						</Link>
					</li>
				))}
				<li>
					<Link href='/'>Новинки</Link>
				</li>
				{!isActiveSearch && (
					<>
						<li>
							<Link href='/'>Популярное</Link>
						</li>
						<li>
							<Link href='/'>Акции</Link>
						</li>
					</>
				)}
				<li>
					<SearchHeader setIsActiveSearch={setIsActiveSearch} />
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav
