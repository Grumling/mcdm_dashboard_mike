'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './navBottomBar.module.css'

const NavBottomBar = ({ data, showBar = true }) => {
  return (
    <>
      {showBar && (
        <main className={styles.container}>
          <div className={styles.mainNav}>
            <ul>
              {data.map((gallery) => {
                return (
                  <li key={gallery._id}>
                    <Link href={`/${gallery.name}`}>{gallery.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      )}
    </>
  )
}

export default NavBottomBar
