import Link from 'next/link'
import ImgCard from './ImgCard'
interface CardImgProps {
  props: {
    id: string
    thumbnail: string
    short_description: string
    last_chapter: {
      id: string
      name: string
    }
    followers: number
    title: string
    total_views: number
    genres: genresProps[]
  }
}

interface genresProps {
  id: string
  name: string
}

const CardImg = ({ props }: CardImgProps) => {
  const { id, thumbnail, title, total_views, last_chapter, followers, genres } =
    props
  return (
    <Link href={`/comics/${id}`} className="overflow-hidden group ">
      <div className="overflow-hidden relative">
        {/* <div className="h-80 max-w-xs w-96">
          <Image
            src={err ? imgerr : thumbnail}
            width={350}
            height={405}
            alt={title}
            onLoad={() => setIsComplete(true)}
            onError={() => setErr(true)}
            loading="lazy"
            className={`object-cover h-full w-full ${
              isComplete ? 'opacity-100 blur-none' : 'opacity-0 blur-lg'
            }`}
          />
        </div> */}
        <ImgCard thumbnail={thumbnail} title={title} />
        <div className="z-10 absolute bottom-0 w-full h-14 px-3 pb-2 bg-gradient-to-t from-black to-transparent">
          <p className="text-lg truncate font-medium" title={title}>
            {title}
          </p>
          <div className="text-[#bebebe] flex gap-2 text-xs">
            {genres.slice(0, 2).map((genre, index) => (
              <p
                key={index}
                className="px-1 py-0.5 bg-[#ffffff14] whitespace-nowrap"
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-black to-transparent mt-2 border-t border-t-[#6e6e6e] px-3 pt-2 pb-4 bg-accent-content rounded-b-lg group-hover:bg-[#5d0914]">
        <div className="flex justify-between">
          <p className="text-xs flex items-center ">
            <i className="bi bi-heart text-xs flex pr-1"></i>
            {followers}
          </p>
          <p className="text-xs flex">
            <span>
              <i className="bi bi-youtube pr-1 text-xs"></i>
            </span>
            {total_views}
          </p>
        </div>
        <p className="text-xs text-[#6e6e6e] truncate mt-1">
          {last_chapter.name}
        </p>
      </div>
    </Link>
  )
}

export default CardImg
