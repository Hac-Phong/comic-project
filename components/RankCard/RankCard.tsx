import { useFetchData } from '@/composables/fetchData'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ImgCard from '../Card/ImgCard'
interface RankCardProps {
  id: string
  title: string
  thumbnail: string
  genres: {
    id: string
    name: string
  }[]
  short_description: string
  total_views: number
  followers?: number
}
const RankCard = async () => {
  const rankweek: RankCardProps[] = await useFetchData('/top/weekly').then(
    (res) => res.comics
  )

  return (
    <div className="w-full lg:w-4/12 overflow-hidden rounded-b-lg text-white bg-gradient-to-br from-[#dc091480] to-transparent mr-3">
      <div className="w-full">
        <h1 className="text-2xl  uppercase font-semibold bg-gradient-to-r from-[#dc091480] to-transparent px-3 py-4 flex items-center">
          Hotest
        </h1>
      </div>
      {rankweek.slice(0, 10).map((rank: RankCardProps) => (
        <div
          key={rank.id}
          className="px-3 py-4 group hover:bg-gradient-to-r from-[#00000033] to-transparent"
        >
          <Link href={`/comics/${rank.id}`} className="flex items-center">
            <Image
              src={rank.thumbnail}
              width={70}
              height={105}
              alt={rank.title}
              className=" object-cover h-full"
            />
            {/* <div className="h-12">
              <ImgCard thumbnail={rank.thumbnail} title={rank.title} />
            </div> */}
            <div className="flex flex-col ml-3">
              <p className="text-base group-hover:text-yellow-500 line-clamp-2">
                {rank.title}
              </p>
              <div className="text-[#bebebe] flex gap-2 text-xs">
                {rank.genres.slice(0, 3).map((genre, index) => (
                  <p
                    key={index}
                    className="px-1 py-0.5 bg-[#ffffff14] whitespace-nowrap"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className="mt-2 space-x-1">
                <i className="bi bi-fire"></i>
                <span className="text-sm">{rank.total_views}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RankCard
