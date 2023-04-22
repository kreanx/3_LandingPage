import uniqueId from '../../utils/idGenerator'
import styles from './HowWorks.module.scss'

const HowWorks: React.FC = () => {
	const howWorksContent = [
		{
			title: '1 шаг',
			subtitle: 'Поиск и выбор билета',
			paragraph: 'Мы бронируем их для визы или прохождения ',
			img: '/',
		},
		{
			title: '2 шаг',
			subtitle: 'Заполнение данных',
			paragraph:
				'Мы бронируем их для визы или прохождения пограничного контроля в стране вылета или прилета',
			img: '/',
		},
		{
			title: '3 шаг',
			subtitle: 'Оплата брони',
			paragraph:
				'Вы оплачиваете только наш сервисный сбор - 699 ₽, не думая о полной стоимости билета',
			img: '/',
		},
		{
			title: 'Срок действия',
			subtitle: 'до 7 дней',
			paragraph:
				'Оплаченное бронирование будет доступно 7 дней, после истечение срока оно анулируется',
			img: '/',
		},
		{
			title: '4 шаг',
			subtitle: 'Отправляем бронь <br/> на электронную почту',
			paragraph:
				'После оплаты брони мы отправляем документ “Подтверждения бронирования” электронную почту',
			img: '/',
		},
	]

	return (
		<section className={styles.how}>
			<div className="container">
				<div className={styles.how__wrapper}>
					<h2 className={styles.how__title}>Как работает КупиТрип</h2>
					<div className={styles.how__block}>
						{howWorksContent.map((item) => {
							return (
								<div key={uniqueId()} className={styles.how__block_item}>
									<p className={styles.how__block_title}>{item.title}</p>
									<h3
										className={styles.how__block_subtitle}
										dangerouslySetInnerHTML={{ __html: item.subtitle }}
									></h3>
									<p className={styles.how__block_paragraph}>
										{item.paragraph}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowWorks
