'use client'
import { useParams, useRouter } from 'next/navigation'
const NextPrevChap = ({ propschap }: any) => {
  const { comicid, chaptersid } = useParams()
  const router = useRouter()
  const changeChapter = (type: 'next' | 'prev') => {
    const epsodes = [...propschap].reverse()
    const chapterIdx = epsodes.findIndex(
      (chapter) => chapter.id === Number(chaptersid)
    )
    const nextChapter = chapterIdx + (type === 'next' ? 1 : -1)
    router.push(`/comics/${comicid}/chapters/${epsodes[nextChapter].id}`)
  }

  return (
    <div className="flex text-[#bebebe] text-sm font-medium justify-center py-4 space-x-2">
      <button
        onClick={() => changeChapter('prev')}
        disabled={Number(chaptersid) === propschap.at(-1).id}
        className={`border-r border-r-[#bebebe] pr-2 ${
          Number(chaptersid) === propschap.at(-1).id ? 'text-gray-400' : ''
        }`}
      >
        Chuơng Trước
      </button>
      <button
        onClick={() => changeChapter('next')}
        disabled={Number(chaptersid) === propschap[0].id}
        className={`${
          Number(chaptersid) === propschap[0].id ? 'text-gray-400' : ''
        }`}
      >
        Chương Sau
      </button>
    </div>
  )
}

export default NextPrevChap
