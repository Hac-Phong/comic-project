import ImageChapter from '@/components/Chapter/ImageChapter'
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
  const { images, chapter_name, comic_name }: ChapterIdData = sigleChapter
  console.log(sigleChapter)

  return (
    <div>
      <div className="flex text-[#bebebe] text-sm font-medium justify-center mb-4 space-x-2">
        <p className="border-r border-r-[#bebebe] pr-2">Chuơng Trước</p>
        <p>Chương Sau</p>
      </div>
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
