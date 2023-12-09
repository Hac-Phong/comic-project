import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="text-white px-8 py-5 hidden lg:flex items-center sticky bg-accent-content z-50 top-0">
      <Link href="/">
        <Image
          src="https://mangaplus.shueisha.co.jp/img/web_logo_190118_light-txt.06756983.png"
          width={120}
          height={30}
          alt="logo"
          className=" object-cover"
        />
      </Link>

      <div className="flex items-center space-x-10 uppercase text-base text-[#bebebe] ml-12 font-semibold">
        <p>Update</p>
        <p>FEATURED</p>
        <p>Manga</p>
        <p>Creator</p>
        <p>Favorite</p>
        <p>About</p>
      </div>
      <form
        role="form"
        className="relative flex-1 flex z-50 bg-accent-content rounded-full ml-8"
      >
        <input
          type="text"
          placeholder="enter your search here"
          className="rounded-full flex-1 px-4 py-2 bg-accent-content text-[#bebebe] focus:outline-none"
        />
        <button className=" text-[#bebebe] rounded-full font-semibold px-4 py-2 focus:outline-none">
          <i className="bi bi-search text-xl flex items-center"></i>
        </button>
      </form>
      <div className="ml-8 ">
        <i className="bi bi-person-circle flex items-center text-[#bebebe] text-4xl"></i>
      </div>
    </nav>
  )
}

export default NavBar
