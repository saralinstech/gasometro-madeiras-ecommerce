import Benefits from '@/components/Benefits'
import styles from './page.module.css'
import Categories from '@/components/Categories'
import FullScreenBanner from '@/components/Banners/FullScreenBanner'
import DoubleBanner from '@/components/Banners/DoubleBanner'
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <main className={styles.main}>
      <Benefits />
      <Categories />
      <FullScreenBanner />
      <DoubleBanner />
      <NewsLetter />
    </main>
  )
}
