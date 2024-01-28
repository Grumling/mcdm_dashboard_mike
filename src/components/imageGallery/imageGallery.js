'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './imageGallery.module.css'
import DevSwiper from '../devSwiper/devSwiper'

const ImageGallery = ({ images }) => {
  const [showSwiper, setShowSwiper] = useState(true)

  const toggleView = () => {
    setShowSwiper(!showSwiper)
  }

  return (
    <section className={styles.container}>
      {showSwiper ? (
        <DevSwiper images={images} />
      ) : (
        images.map((image) => {
          return (
            <Image
              className={styles.imageEffect}
              key={image._id}
              src={image.path}
              width={150}
              height={250}
              alt={''}
            />
          )
        })
      )}
      {/* <button onClick={toggleView}>Toggle Slider</button> */}
    </section>
  )
}

export default ImageGallery
