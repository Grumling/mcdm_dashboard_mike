'use client'
import styles from './devSwiper.module.css'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const SwiperControlPanel = ({ nextSlide, previousSlide, images, slideTo }) => {
  return (
    <div className={styles.sliderControlsContainer}>
      <div className={styles.buttonStyle} onClick={() => nextSlide()}>
        Next
      </div>{' '}
      <div className={styles.buttonStyle} onClick={() => previousSlide()}>
        Previous
      </div>
    </div>
  )
}

const DevSwiper = ({ images }) => {
  const swiperRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showControls, setShowControls] = useState(false)

  // Register swiper
  useEffect(() => {
    console.log('swiper registered')
    register()
  }, [])

  // Listen for event
  useEffect(() => {
    console.log('Added Event Listner')
    swiperRef.current.addEventListener('swiperslidechange', (e) => {
      const [swiper] = e.detail

      console.log('slide change', swiper.activeIndex)
      setCurrentIndex(swiper.activeIndex)
    })
  }, [])

  const nextSlide = () => {
    const nextIndex = currentIndex + 1
    swiperRef.current.swiper.slideTo(nextIndex, 1000)
  }

  const previousSlide = () => {
    console.log('PREVIOUS')
    swiperRef.current.swiper.slidePrev(1000)
  }

  const slideTo = (index) => {
    console.log('PREVIOUS')
    swiperRef.current.swiper.slideTo(index, 1000)
  }

  return (
    <div className={styles.slider}>
      <button onClick={() => setShowControls(!showControls)}>
        ToggleControls {showControls.toString()}
      </button>
      {/* Toggle Control Panel */}
      {showControls ? (
        <SwiperControlPanel
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          currentIndex={currentIndex}
          images={images}
          slideTo={slideTo}
        ></SwiperControlPanel>
      ) : null}

      {/* Swiper Container */}
      <swiper-container slides-per-view='1' keyboard='true' ref={swiperRef}>
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
