import styles from './NewsCard.module.scss'

interface INewsCard {
	img: string
	title: string
	isChecked: boolean
	handleCheck: (index: number) => void
	index: number
}

const NewsCard: React.FC<INewsCard> = (props) => {
	const { img, title, isChecked, index, handleCheck } = props

	const handleClick = () => {
		handleCheck(index)
	}

	return (
		<article className={styles.card} onClick={handleClick}>
			<div
				className={`${
					isChecked ? styles.card__outer_checked : styles.card__outer
				} ${styles.card__outer}`}
			>
				<div className={styles.card__inner}>
					<img className={styles.card__img} src={img} alt={`${title} img`} />
					<p className={styles.card__title}>{title}</p>
				</div>
			</div>
		</article>
	)
}

export default NewsCard
