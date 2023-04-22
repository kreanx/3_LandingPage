import BookingHeader from '../../components/BookingHeader/BookingHeader'
import HowWorks from '../../components/HowWorks/HowWorks'
import News from '../../components/News/News'
import styles from './Home.module.scss'

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<BookingHeader />
			<News />
			<HowWorks />
		</div>
	)
}

export default Home
