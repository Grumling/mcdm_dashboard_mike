import NavTopBar from '@/components/nav/navTopBar/navTopBar'
import './globals.css'
import { poppinsFont } from '@/utils/fonts'
import NavBottomBar from '@/components/nav/navBottomBar/navBottomBar'
import NavAside from '@/components/nav/navAside/navAside'
import { fetchGalleries } from '@/lib/data.service'
import { fetchAuthors } from '@/lib/data.service'

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default async function RootLayout({ children }) {
  let galleries = await fetchGalleries()
  let authors = await fetchAuthors()

  return (
    <html lang='en'>
      <body className={poppinsFont.className}>
        <NavTopBar />
        <NavBottomBar data={galleries} />
        <NavAside data={authors} />
        {children}
      </body>
    </html>
  )
}
