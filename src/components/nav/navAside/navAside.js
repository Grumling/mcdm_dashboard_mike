import Link from 'next/link'
import styles from './navAside.module.css'

const NavAside = async ({ data }) => {
  return (
    <main className={styles.container}>
      <div className={styles.sideNav}>
        <ul>
          {data.map((authors) => {
            return (
              <li key={authors._id}>
                <Link href='/'>{authors.author}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default NavAside
