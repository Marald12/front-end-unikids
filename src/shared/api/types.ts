export interface IProduct {
	id: number
	createdAt: string
	updatedAt: string
	title: string
	description: string
	material: string
	packagingDimensions: string
	weight: number
	price: number
	imagePath: string
	viewsCount: number
	size: ISize[]
	category: ICategory
	mainCategory: IMainCategory
	color: IColor[]
	reviews: Review[]
}

export interface ISize {
	id: number
	createdAt: string
	updatedAt: string
	size: number
}

export interface ICategory {
	id: number
	createdAt: string
	updatedAt: string
	title: string
}

export interface IMainCategory {
	id: number
	createdAt: string
	updatedAt: string
	title: string
}

export interface IColor {
	id: number
	createdAt: string
	updatedAt: string
	color: string
	hex: string
}

export interface Review {
	id: number
	createdAt: string
	updatedAt: string
	description: string
	starCount: number
	dignity: any
	flaws: any
}
