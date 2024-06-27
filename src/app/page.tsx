import Benefits from '@/components/Benefits'
import styles from './page.module.css'
import Categories from '@/components/Categories'
import FullScreenBanner from '@/components/Banners/FullScreenBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Benefits />
      <Categories />
      <FullScreenBanner />
      <p>oi mundo</p>
    </main>
  )
}
