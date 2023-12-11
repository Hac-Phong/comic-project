'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
interface ComicChapterListProps {
  props: {
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
}
const ComicChapterList = ({ props }: ComicChapterListProps) => {
  // const chapters = props.chapters
  const [eps, setEps] = useState(props.chapters)
  const [isShow, setIsShow] = useState<boolean>(false)
  const handleIsShow = () => {
    setEps([...props.chapters].reverse())
  }

  return (
    <div className="flex flex-col">
      <p className="text-[#bebebe] uppercase text-lg mt-8 border-b border-b-[#bebebe] pb-2">
        CHAPTER LIST
      </p>
      <button className=" bg-gradient-to-l py-3 pr-2 from-[#73262ae6] to-transparent flex justify-end">
        <i
          onClick={handleIsShow}
          className={` text-white text-3xl ${
            isShow ? 'bi bi-sort-down-alt' : 'bi bi-sort-down-alt'
          }`}
        ></i>
      </button>
      {/* List */}
      <div className="grid list  grid-cols-4 gap-1.5 mt-1 max-h-96 overflow-y-auto">
        {eps.map((chapter) => (
          <Link
            href={`/comics/${props.id}/chapters/${chapter.id}`}
            key={chapter.id}
          >
            <p className="px-5 py-3 h-12 flex items-center justify-center text-[#bebebe] text-lg hover:text-yellow-500 font-medium bg-[#73262ae6] text-center">
              {chapter.name}
            </p>
          </Link>
        ))}
      </div>
      {/* List */}
    </div>
  )
}

export default ComicChapterList
