'use client'
import styles from './devSwiper.module.css'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'
import { useEffect } from 'react'

const DevSwiper = ({ images }) => {
  useEffect(() => {
    console.log('swiper registered')
    register()
  }, [])

  return (
    <div className={styles.slider}>
      <swiper-container
        class='mySwiper'
        keyboard='true'
        navigation='true'
        loop='true'
        pagination='true'
        pagination-clickable='true'
        slides-per-view='4'
        centered-slides='true'
        space-between='30'
      >
        {images.map((image) => {
          return (
            <swiper-slide key={image._id} className={styles.slide}>
              <Image
                src={image.path}
                alt={image.name}
                width={image.width}
                height={image.height}
              ></Image>
            </swiper-slide>
          )
        })}
      </swiper-container>
    </div>
  )
}

export default DevSwiper
