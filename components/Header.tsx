"use client"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import useAuthModal from "@/hooks/useAuthModal"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {

  const router = useRouter()
  const authModal = useAuthModal()

  const handleLogout = async () => {

  }

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="w-full mb-4 flex justify-between items-center">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.back()}>
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.forward()}>
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center jusitfy-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center jusitfy-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justufy-between items-center gap-x-4">
          {false ? (
            <div className="flex gap-x-4 items-center">
              <button onClick={handleLogout}>Logout</button>
              <button className="bg-white" onClick={() => router.push("/account")}>
                <FaUserAlt />
              </button>
            </div>
          ) : (
            <>
            <div>
              <button className="bg-transparent text-neutral-300 font-medium" onClick={authModal.onOpen}>
                Sign up
              </button>
            </div>
            <div>
              <button
                className="bg-white text-black font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition"
                onClick={authModal.onOpen}
              >
                Log in
              </button>
            </div>
          </>
          
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header