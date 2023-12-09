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

  // if (!comicdetail.id) return notFound()
  return (
    <div className="flex mt-6 w-full">
      <div className="pl-5 flex w-9/12 flex-col h-full">
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
