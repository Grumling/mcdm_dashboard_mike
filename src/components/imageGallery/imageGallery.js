import GalleryCard from '../galleryCard/galleryCard'
import styles from './imageGallery.module.css'
import Image from 'next/image'

const ImageGallery = async () => {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <GalleryCard>{/* image  */}</GalleryCard>
      </section>
    </main>
  )
}

export default ImageGallery
