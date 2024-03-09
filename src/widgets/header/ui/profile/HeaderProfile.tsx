'use server'
import { FC } from 'react'
import styles from './HeaderProfile.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/Unikids_logo.svg'
import { LuUser2 } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { BsBarChart } from 'react-icons/bs'
import { BiBasket } from 'react-icons/bi'
import { hasCookie } from 'cookies-next'
import { cookies } from 'next/headers'

const HeaderProfile: FC = () => {
	const isToken = hasCookie('token', { cookies })

	return (
		<div className={styles.profile}>
			<Link href='/'>
				<Image src={Logo} alt={Logo} />
			</Link>
			<ul>
				{isToken && (
					<li>
						<LuUser2 size={20} />
						<Link href='/profile'>Личный кабинет</Link>
					</li>
				)}
				{!isToken && (
					<li>
						<LuUser2 size={20} />
						<Link href='/login'>Войти / Зарегестрироваться</Link>
					</li>
				)}
				<li>
					<FaRegHeart size={20} />
					<Link href='/'>Избранное</Link>
				</li>
				<li>
					<BsBarChart size={20} />
					<Link href='/'>Сравнение</Link>
				</li>
				<li>
					<BiBasket size={20} />
					<Link href='/'>Корзина</Link>
				</li>
			</ul>
		</div>
	)
}

export default HeaderProfile
