import { FC } from 'react'
import styles from './HeaderProfile.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/Unikids_logo.svg'
import { LuUser2 } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { BsBarChart } from 'react-icons/bs'
import { BiBasket } from 'react-icons/bi'

const HeaderProfile: FC = () => {
	return (
		<div className={styles.profile}>
			<Link href='/'>
				<Image src={Logo} alt={Logo} />
			</Link>
			<ul>
				<li>
					<LuUser2 size={20} />
					<Link href='/'>Личный кабинет</Link>
				</li>
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
