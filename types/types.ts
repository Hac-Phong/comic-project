export interface ChapterIdData {
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

export interface ChapterIdProps {
  params: {
    comicid: string
    chaptersid: string
  }
}
export interface ComicIdProps {
  params: {
    comicid: string
  }
}
