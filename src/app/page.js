import styles from './page.module.css'
import Link from 'next/link'
import BubbleWrap from './components/bubblewrap/page'

export default function Home() {
	return (
		<main className={styles.main}>
			{/* <Link href='/about'>To about page</Link> */}
      <BubbleWrap />
		</main>
	)
}
