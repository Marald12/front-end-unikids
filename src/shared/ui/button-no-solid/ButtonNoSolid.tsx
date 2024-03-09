import { FC, PropsWithChildren } from 'react'
import { IButton } from '../button/button.interface'
import cn from 'classnames'

import styles from '../button/Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.buttonNoSolid, className)} {...rest}>
			{children}
		</button>
	)
}
export default Button
