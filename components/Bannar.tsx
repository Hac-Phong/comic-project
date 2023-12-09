import React from 'react'
import Carousel from './Carousel/Carousel'
import { useFetchData } from '@/composables/fetchData'

const Bannar = async () => {
  const data = await useFetchData('trending-comics')
  const comics = data.comics
  return (
    <div className="px-3">
      <Carousel
        items={6}
        autoplay={true}
        data={comics}
        h1={'Comics Trending'}
      />
    </div>
  )
}

export default Bannar
