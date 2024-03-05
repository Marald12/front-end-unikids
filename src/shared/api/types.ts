interface IBase {
	id: number
	createdAt: string
	updatedAt: string
}

export interface IProduct extends IBase {
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
	reviews: IReview[]
}

export interface ISize extends IBase {
	size: number
}

export interface ICategory extends IBase {
	title: string
	products: IProduct[]
}

export interface IMainCategory extends IBase {
	title: string
	products: IProduct[]
}

export interface IColor extends IBase {
	color: string
	hex: string
}

export interface IReview extends IBase {
	description: string
	starCount: number
	dignity: any
	flaws: any
	product: IProduct
	user: IUser
}

export interface IUser extends IBase {
	email: string
	name: string
	surname: string
	phone: number | null
	dateBirthday: string | null
	country: string | null
	city: string | null
	avatarPath: string
	sex: string | null
	basket: IBasket
	reviews: IReview[]
	likesProduct: IProduct[]
}

export interface IBasket extends IBase {
	user: IUser
	products: IBasketItem[]
}

export interface IBasketItem extends IBase {
	count: number
	product: IProduct
}

export interface IQuestion extends IBase {
	question: string
	answer: string
}

export interface IOrder extends IBase {
	typeDelivery: string
	timeDelivery: string
	typePay: string
	city: string
	street: string
	house: string
	room: string
	entrance: string
	floor: string
	products: IProduct[]
	user: IUser
}

export interface CreateUserDto {
	email: string
	name: string
	password: string
}

export interface AuthDto {
	email: string
	password: string
}

export interface IAuth {
	user: IUser
	token: string
}

export interface IMedia {
	url: string
	name: string
}
