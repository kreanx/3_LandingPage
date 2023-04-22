import uniqueId from '../../utils/idGenerator'
import truncateText from '../../utils/truncateText'
import styles from './News.module.scss'
import NewsCard from './NewsCard/NewsCard'

import { useState } from 'react'

const News: React.FC = () => {
	const [newsContent, setNewsContent] = useState([
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'Новые правила подачи на визу в Испанию',
			isChecked: false,
		},
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'Обновленная информация полетной программы 12312312312312312312',
			isChecked: false,
		},
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'Новые правила подачи документов на визу в Германию',
			isChecked: false,
		},
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'Санкт-Петербург: какой шенген оформить? ',
			isChecked: false,
		},
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'Подписывайтесь на наш канал в Telegram!',
			isChecked: false,
		},
		{
			img: 'https://lowdaily.ru/wp-content/uploads/2021/02/Nissan-Silvia-S14-Vertex.jpg',
			title: 'График работы визовых центров на новогодние праздники',
			isChecked: false,
		},
	])

	const handleCheck = (index: number) => {
		const newNewsContent = [...newsContent]
		newsContent[index].isChecked = true
		setNewsContent(newNewsContent)
	}

	return (
		<section className={styles.news}>
			<div className="container">
				<div className={styles.news__wrapper}>
					<div className={styles.news__block}>
						{newsContent.map((item, index) => {
							return (
								<NewsCard
									img={item.img}
									title={truncateText(item.title, 25)}
									key={uniqueId()}
									isChecked={item.isChecked}
									index={index}
									handleCheck={handleCheck}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default News
