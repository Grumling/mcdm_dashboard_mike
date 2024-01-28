import ImageGallery from '@/components/imageGallery/imageGallery'
import { fetchImagesForAuthor, fetchAuthorByNicUrl } from '@/lib/data.service'
import Image from 'next/image'

export default async function Page({ params }) {
  const author = await fetchAuthorByNicUrl(params.author)
  const imagesForAuthor = await fetchImagesForAuthor(author.author)

  // console.log('TEST', imagesForAuthor, params.author, author)
  return <ImageGallery images={imagesForAuthor}></ImageGallery>
}
