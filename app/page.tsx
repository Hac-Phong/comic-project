import Bannar from '@/components/Bannar'
import ListUpdate from '@/components/ListUpdate'
import RankCard from '@/components/RankCard/RankCard'

export default function Home() {
  return (
    <main className=" text-white flex flex-col w-full">
      <Bannar />
      <div className="flex flex-col lg:flex-row">
        <ListUpdate />
        <RankCard />
      </div>
    </main>
  )
}
