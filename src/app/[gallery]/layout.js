import NavAside from '@/components/nav/navAside/navAside'

export default function GalleryLayout({ children, params }) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  return (
    <div>
      <NavAside gallery={params.gallery} />
      <div>{children}</div>
    </div>
  )
}
