import Link from 'next/link'
import styles from './navAside.module.css'
import { fetchAuthorsByGalleryName } from '@/lib/data.service'

const NavAside = async ({ gallery }) => {
  const authorsForGallery = await fetchAuthorsByGalleryName(gallery)

  return (
    <main className={styles.container}>
      <div className={styles.sideNav}>
        <ul>
          {authorsForGallery.map((authors) => {
            return (
              <li key={authors._id}>
                <Link href={`/${authors.gallery}/${authors.niceUrl}`}>
                  {authors.author}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default NavAside
