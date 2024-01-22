'use client'
import Link from 'next/link'
import styles from './navBottomBar.module.css'
//import { fetchGalleries } from '@/lib/data.service'

const NavBottomBar = ({ data }) => {
  // let galleries = await fetchGalleries()

  return (
    <main className={styles.container}>
      <div className={styles.mainNav}>
        <ul>
          {data.map((gallery) => {
            return (
              <li key={gallery._id}>
                <Link href='/'>{gallery.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default NavBottomBar
