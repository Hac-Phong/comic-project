import React from 'react'
import RankCard from '@/components/RankCard/RankCard'
import Carousel from '@/components/Carousel/Carousel'
import ComicDetail from '@/components/ComicPage/ComicDetail'
import ComicChapterList from '@/components/ComicPage/ComicChapterList'
import { useFetchData } from '@/composables/fetchData'
import { notFound } from 'next/navigation'
import { ComicIdProps } from '@/types/types'

const ComicId = async ({ params }: ComicIdProps) => {
  const [comicdetail, newcomic_1, newcomic_2] = await Promise.all([
    useFetchData(`/comics/${params.comicid}`),
    useFetchData('/new-comics'),
    useFetchData('/new-comics?page=2'),
  ])

  const newcomic = {
    comics: [...newcomic_1.comics, ...newcomic_2.comics],
  }

  if (!comicdetail.id) return notFound()
  return (
    <div className="px-5 lg:px-0 pt-10 lg:pt-0 flex flex-col lg:flex-row lg:mt-6 w-full">
      <div className="lg:pl-3 flex w-full mb-2 lg:mb-0 lg:w-9/12 flex-col h-full">
        <ComicDetail props={comicdetail} />
        {/* Chapter List */}
        <ComicChapterList props={comicdetail} />
        {/* Chapter List */}
        <Carousel
          autoplay={false}
          items={4}
          data={newcomic.comics}
          h1={'New Comics'}
        />
      </div>
      <RankCard />
    </div>
  )
}

export default ComicId
