import React from 'react'
import ImgCard from '../Card/ImgCard'
interface ComicDetail {
  props: ComicDetailProps
}
export interface ComicDetailProps {
  title: string
  thumbnail: string
  genres: {
    id: string
    name: string
  }[]
  total_views: number
  followers: number
  description: string
  author: string
  status: string
  chapters: {
    id: number
    name: string
  }[]
  id: string
  other_names: string[]
}
const ComicDetail = ({ props }: ComicDetail) => {
  const { title, thumbnail, genres, description }: ComicDetailProps = props

  return (
    <div className="flex flex-col space-y-14 items-center lg:flex-row w-full">
      <div className="max-w-xs h-80 w-96">
        {/* <Image
          src={thumbnail}
          width={350}
          height={405}
          alt={title}
          loading="lazy"
          className="object-cover h-full w-full"
        /> */}
        <ImgCard thumbnail={thumbnail} title={title} />
        <button className="btn btn-warning btn-outline w-full mt-1 uppercase text-sm">
          Add to favorite
          <span>
            <i className="bi bi-journal-bookmark text-2xl pl-2"></i>
          </span>
        </button>
      </div>
      <div className="lg:ml-5 flex flex-col w-full">
        <div className=" bg-gradient-to-r from-[#000] to-transparent px-5 py-3 ">
          <p className="text-white text-3xl font-medium line-clamp-2 max-w-lg">
            {title}
          </p>
          <div className="text-[#bebebe] flex gap-2 mt-2 text-sm flex-wrap">
            {genres.map((genre) => (
              <p
                key={genre.id}
                className="px-2 py-1 bg-[#ffffff14] whitespace-nowrap"
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-8 pl-5  ">
          <p className="text-[#bebebe]  uppercase text-sm pb-3 tracking-wide">
            Sumary
          </p>
          <p className="border-t-[#bebebe] pt-5 border-t text-white line-clamp-[7]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail
