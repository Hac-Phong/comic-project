import React from 'react'
import CardImg from '@/components/Card/CardImg'
import Carousel from '@/components/Carousel/Carousel.jsx'
import { useFetchData } from '@/composables/fetchData'
const ListUpdate = async () => {
  const [updatelistpage_1, updatelistpage_2] = await Promise.all([
    useFetchData('/recent-update-comics').then((res) => res.comics),
    useFetchData('/recent-update-comics?page=2').then((res) => res.comics),
  ])
  const updatelistpage = [...updatelistpage_1, ...updatelistpage_2]

  return (
    <div className="w-9/12 px-3 ">
      <div className="z-50 py-4 bg-gradient-to-r from-[#5d0914] to-transparent mb-5 flex justify-between items-center pl-3">
        <p className="text-lg uppercase font-semibold">Recently Update</p>
        <div className="bg-yellow-400 rounded-l-2xl hover:rounded-l-full font-medium flex items-center hover:px-4 transition-all duration-300 ease-in px-2 text-black py-1.5">
          <p className="flex items-center">All Update</p>
          <i className="bi bi-chevron-right  text-sm"></i>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {updatelistpage.slice(0, 16).map((updatelist) => (
          <CardImg key={updatelist.id} props={updatelist} />
        ))}
      </div>
      {/* <Carousel items={5} autoplay={false} /> */}
    </div>
  )
}

export default ListUpdate
