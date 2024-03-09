'use client'
import { FC } from 'react'
import styles from './LoginPage.module.scss'
import Field from '@/shared/ui/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidate } from '@/shared/utils/email.validate'
import Button from '@/shared/ui/button/Button'
import { ILoginDto } from '@/pages/login/loginPage.inteface'
import { authApi } from '@/shared/api/auth/auth.api'
import { setCookie } from 'cookies-next'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import ButtonNoSolid from '@/shared/ui/button-no-solid/ButtonNoSolid'
import { FaCheck } from 'react-icons/fa6'

const LoginPage: FC = () => {
	const router = useRouter()
	const { register, handleSubmit, formState } = useForm<ILoginDto>({
		mode: 'onChange'
	})

	const clickHandler = () => {
		if (formState.errors) {
			if (formState.errors.email) toast.error(formState.errors.email.message)
			if (formState.errors.password)
				toast.error(formState.errors.password.message)
		}
	}

	const submitHandler: SubmitHandler<ILoginDto> = async data => {
		try {
			const authData = await authApi.login(data)

			setCookie('token', authData.token)
			toast.success('Авторизация прошла успешна')
			router.push('/')
		} catch (e: any) {
			toast.error(e.response.data.message)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.login}>
				<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
					<h1>Вход</h1>
					<Field
						placeholder='E-mail'
						type='email'
						{...register('email', {
							pattern: {
								value: emailValidate,
								message: 'E-mail не валидный'
							},
							maxLength: {
								value: 32,
								message: 'Максимальная длинна E-mail 32 символа'
							},
							required: {
								value: true,
								message: 'Поле E-mail пустое'
							}
						})}
					/>
					<Field
						placeholder='Пароль'
						type='password'
						{...register('password', {
							maxLength: {
								value: 32,
								message: 'Максимальная длинна пароля 32 символа'
							},
							minLength: {
								value: 6,
								message: 'Минимальная длинна пароля 6 символов'
							},
							required: {
								value: true,
								message: 'Поле пароль пустое'
							}
						})}
					/>
					<Button type='submit' onClick={clickHandler}>
						Войти
					</Button>
				</form>
			</div>
			<div className={styles.register}>
				<h1>Вы здесь впервые?</h1>
				<ButtonNoSolid onClick={() => router.push('/register')}>
					Создать аккаунт
				</ButtonNoSolid>
				<p>Вы получите:</p>
				<ul>
					<li>
						<FaCheck color='#1788CA' /> Скидку 10% на первую покупку
					</li>
					<li>
						<FaCheck color='#1788CA' /> Доступ к специальным предложениям
					</li>
					<li>
						<FaCheck color='#1788CA' /> Уведомления о поступлении товара /
						размера
					</li>
				</ul>
			</div>
		</div>
	)
}

export default LoginPage
