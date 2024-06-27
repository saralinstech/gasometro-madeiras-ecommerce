import Benefits from '@/components/Benefits'
import styles from './page.module.css'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <main className={styles.main}>
      <Benefits />
      <Categories />
      <p>oi mundo</p>
    </main>
  )
}
