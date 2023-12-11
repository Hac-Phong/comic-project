import React from 'react'
import RankCard from '@/components/RankCard/RankCard'
import Carousel from '@/components/Carousel/Carousel'
import ComicDetail from '@/components/ComicPage/ComicDetail'
import ComicChapterList from '@/components/ComicPage/ComicChapterList'
import { useFetchData } from '@/composables/fetchData'
import { notFound } from 'next/navigation'

interface ComicIdProps {
  params: {
    comicid: string
  }
}

const ComicId = async ({ params }: ComicIdProps) => {
  const [comicdetail, recomend] = await Promise.all([
    useFetchData(`/comics/${params.comicid}`),
    useFetchData('/recommend-comics'),
  ])

  if (!comicdetail.id) return notFound()
  return (
    <div className="px-5 lg:px-0 flex flex-col lg:flex-row mt-6 w-full">
      <div className="lg:pl-3 flex w-full mb-2 lg:mb-0 lg:w-9/12 flex-col h-full">
        <ComicDetail props={comicdetail} />
        {/* Chapter List */}
        <ComicChapterList props={comicdetail} />
        {/* Chapter List */}
        {/* <Carousel
          autoplay={false}
          items={4}
          data={recomend}
          h1={'Recomend Comic'}
        /> */}
      </div>
      <RankCard />
    </div>
  )
}

export default ComicId
