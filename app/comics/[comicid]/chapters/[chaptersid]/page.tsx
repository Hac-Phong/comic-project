import ImageChapter from '@/components/Chapter/ImageChapter'
import NextPrevChapter from '@/components/Chapter/NextPrevChapter'
import { useFetchData } from '@/composables/fetchData'
import Image from 'next/image'
import React from 'react'
interface ChapterIdProps {
  params: {
    comicid: string
    chaptersid: string
  }
}
interface ChapterIdData {
  images: {
    page: number
    src: string
    backup_src: string
  }[]
  chapters: {
    id: number
    name: string
  }[]

  chapter_name: string
  comic_name: string
}
const ChapterId = async ({ params }: ChapterIdProps) => {
  const sigleChapter = await useFetchData(
    `/comics/${params.comicid}/chapters/${params.chaptersid}`
  )
  const { images, chapter_name, comic_name, chapters }: ChapterIdData =
    sigleChapter
  console.log(sigleChapter)

  return (
    <div>
      <NextPrevChapter />
      <ul className="flex flex-col items-center justify-center mx-auto w-full ">
        {images.map((image) => (
          <li key={image.page}>
            <ImageChapter propsimg={image} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChapterId
