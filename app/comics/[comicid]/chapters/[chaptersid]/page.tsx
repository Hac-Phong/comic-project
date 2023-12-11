import ImageChapter from '@/components/Chapter/ImageChapter'
import NextPrevChap from '@/components/Chapter/NextPrevChap'
import { useFetchData } from '@/composables/fetchData'
import { ChapterIdData, ChapterIdProps } from '@/types/types'
const ChapterId = async ({ params }: ChapterIdProps) => {
  const sigleChapter = await useFetchData(
    `/comics/${params.comicid}/chapters/${params.chaptersid}`
  )
  const { images, chapter_name, comic_name, chapters }: ChapterIdData =
    sigleChapter

  return (
    <div>
      <NextPrevChap propschap={chapters} />
      <ul className="flex flex-col items-center justify-center mx-auto w-full ">
        {images.map((image) => (
          <li key={image.page}>
            <ImageChapter propsimg={image} />
          </li>
        ))}
      </ul>
      <NextPrevChap propschap={chapters} />
    </div>
  )
}

export default ChapterId
