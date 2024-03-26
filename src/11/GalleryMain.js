import GalleryCard from "./GalleryCard"
import gdata from './GalleryData.json'

export default function GalleryMain() {
    const imgUrl=gdata.galWebImageUrl
    const title=gdata.galTitle
    const ptitle=gdata.galPhotographyLocation
    const ktag=gdata.galSearchKeyword//매개변수로 전달되는 상수를 정의할 필요가 없다.
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
