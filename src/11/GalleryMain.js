import GalleryCard from "./GalleryCard"
import gdata from './GalleryData.json'

export default function GalleryMain() {
    const imgUrl=gdata.galWebImageUrl
    const title=gdata.galTitle
    const ptitle=gdata.galPhotographyLocation
    const ktag=gdata.galSearchKeyword
  return (
    <div>
      <GalleryCard imgUrl={imgUrl}
                    title={title}
                    ptitle={ptitle}
                    ktag={ktag}
                    />
    </div>
  )
}
