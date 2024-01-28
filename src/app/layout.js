import './globals.css'
import { poppinsFont } from '@/utils/fonts'

import { fetchGalleries } from '@/lib/data.service'
import { fetchAuthors } from '@/lib/data.service'
import Navigation from '@/components/nav/navigation/navigation'

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
        <Navigation galleries={galleries}></Navigation>

        {children}
      </body>
    </html>
  )
}
