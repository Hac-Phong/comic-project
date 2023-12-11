'use client'
import React, { useState } from 'react'
import Image from 'next/image'
interface ImgProps {
  thumbnail: string
  title: string
}
const ImgCard = ({ thumbnail, title }: ImgProps) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [err, setErr] = useState<boolean>(false)
  const imgerr = '/error.png'
  return (
    <div
      className={`h-80 max-w-xs ${
        isComplete ? 'animate-none' : 'animate-pulse'
      }`}
    >
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
    </div>
  )
}

export default ImgCard
