import styles from './BookingHeader.module.scss'

const BookingHeader: React.FC = () => {
	return (
		<section className={styles.booking}>
			<div className="container">
				<div className={styles.booking__wrapper}>
					<h1 className={styles.booking__title}>
						Бронирование
						<br /> авиабилетов для визы
					</h1>
					<p className={styles.booking__subtitle}>
						Бронируйте авибилеты для визы онлайн за 699 ₽
					</p>
					<div className={styles.booking__form}>
						<div className={styles.booking__form_inputs}>
							<div className={styles.booking__form_input}>
								<label htmlFor="fruits">Выберите фрукт:</label>
								<select id="fruits" name="fruits">
									<option value="apple">Яблоко</option>
									<option value="banana">Банан</option>
									<option value="orange">Апельсин</option>
								</select>
							</div>
							<div className={styles.booking__form_input}>
								<label htmlFor="fruits1">Выберите фрукт:</label>
								<select id="fruits1" name="fruits1">
									<option value="apple">Яблоко</option>
									<option value="banana">Банан</option>
									<option value="orange">Апельсин</option>
								</select>
							</div>
							<div className={styles.booking__form_input}>
								<label htmlFor="fruits2">Выберите фрукт:</label>
								<select id="fruits2" name="fruits2">
									<option value="apple">Яблоко</option>
									<option value="banana">Банан</option>
									<option value="orange">Апельсин</option>
								</select>
							</div>
							<div className={styles.booking__form_input}>
								<label htmlFor="fruits2">Выберите фрукт:</label>
								<select id="fruits2" name="fruits2">
									<option value="apple">Яблоко</option>
									<option value="banana">Банан</option>
									<option value="orange">Апельсин</option>
								</select>
							</div>
							<div className={styles.booking__form_input}>
								<label htmlFor="fruits2">Выберите фрукт:</label>
								<select id="fruits2" name="fruits2">
									<option value="apple">Яблоко</option>
									<option value="banana">Банан</option>
									<option value="orange">Апельсин</option>
								</select>
							</div>
						</div>
						<div className={styles.booking__form_btn}>
							<button>Найти</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BookingHeader
