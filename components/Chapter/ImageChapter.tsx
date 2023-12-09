'use client'
import React, { useState } from 'react'
import Image from 'next/image'
interface ImageChapterProps {
  propsimg: {
    page: number
    src: string
    backup_src: string
  }
}
const ImageChapter = ({ propsimg }: ImageChapterProps) => {
  const [err, setErr] = useState<boolean>(false)
  const imgload = '/loading.png'
  return (
    <div>
      <Image
        src={err ? imgload : propsimg.backup_src}
        width={550}
        height={550}
        alt=""
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAAG4AgMAAAAmlDXUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURf////b29vz8/Gk/Je0AAALFSURBVHja7NexittAFEbhOwIXcq9+CahYP4WScisV+oVwJQJp/BSTrfICAymdgCHWU8bjsRevSZFqr4vzYaxR5cMdi0EGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/5VkZq06e3OMjjHRrNFsF9VB7jGdFeskdQ8S8yxdY5a9c8xB15gk9b4xSW8xkmbfGPnH7B4nRhpLzGa626bOI0Z5PC9JwyVmZ24xqcScjOXyZOY6mY3OLGmroTp2ZpWk6DKZoCJu4nk5u8VIqlVE2xw8Y6qtbibTSp4xQTcx1ryLsY9W38SMjxQzWKtsGzc/g0fMSiffJcV0idnF9UFDyIP6YOXnq51kSVO+G04pcozprJJM6m1dK/OKaW5iZqsONzGDfbR0E/P1qKuh9ojROSZIlW5NrjHjszLXyVTXmOxuMpPLadBtku70PjGj9Fl3tot5xNg/YnZ7M1t5vDa1w13MLtqi6BNTT+9j5vVRUucTU93EbH9J36QS4/La9Psas9tbLck1pioxQ6yitfKP+bJLmlr1lnQx567OJaazRtPpY3qUmFZDUDb5x/QrjfX5YeqTa8xsSdNKCjnmxdYr9TkmOk0mnU/GV6lV186tb4zUB6nT2KhL4yXG3GLmvF1pavSqMW+T/fjhElNC8nSaU0zQFMqx5BsztXMz1PnWMyaUP/Gwis1U567JGo2eMY3GtaUhaMwxyS2mlrry/KQxSME/ZiVFS4oaa9eYc8e5KGlu8zFlSYNvTDkXrJJrTJtjgtSbpH2bY+QW00jnxWTK/GLCNcZKg3tMeXTyt4q8mJy2SZcYeceEt5hGqpxjbFnisvwxs/Wy2FLkxd7cvT7F+PrJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/24MDAQAAAABB/tYLjFABIz+emEB5sAezAAAAAElFTkSuQmCC"
        loading="lazy"
        onError={() => setErr(true)}
      />
    </div>
  )
}

export default ImageChapter
