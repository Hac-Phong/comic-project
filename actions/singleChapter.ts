'use server'
import { useFetchData } from '@/composables/fetchData'
export async function ChapterID(id: string, chapter: string) {
  const sigleChapter = await useFetchData(`/comics/${id}/chapters/${chapter}`)
  return sigleChapter
}
