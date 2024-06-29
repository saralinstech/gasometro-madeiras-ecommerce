import Benefits from '@/components/Benefits'
import styles from './page.module.css'
import Categories from '@/components/Categories'
import FullScreenBanner from '@/components/Banners/FullScreenBanner'
import DoubleBanner from '@/components/Banners/DoubleBanner'
import NewsLetter from '@/components/NewsLetter'
import Showcase from '@/components/Showcase'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className={styles.main}>
      <Benefits />
      <Hero />
      <Categories />
      <Showcase />
      <FullScreenBanner />
      <Showcase />
      <DoubleBanner />
      <Partners />
      <Testimonials />
      <NewsLetter />
    </main>
  )
}
