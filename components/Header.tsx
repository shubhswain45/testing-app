"use client"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import useAuthModal from "@/hooks/useAuthModal"
import { useCurrentUser, useLogoutUser } from "@/hooks/auth"
import ConfirmationModel from "./ConfirmationModel"
import { useState } from "react"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const authModal = useAuthModal()
  const { data, isLoading } = useCurrentUser() // Fetch the current user data
  const { mutate: logoutUser } = useLogoutUser()

  // State to manage the confirmation dialog visibility
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);


  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="w-full mb-4 flex justify-between items-center">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
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
        <div className="flex justify-between items-center gap-x-4">
          {isLoading ? (
            <>
              {/* Show loading buttons while data is loading */}
              <div className="flex gap-x-4 items-center">
                <button
                  className="bg-white text-black font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition"
                >
                </button>
                <button
                  className="bg-white text-black font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition content-center"
                >
                </button>
              </div>
            </>
          ) : data?.getCurrentUser && data.getCurrentUser.isVerified ? (
            // If user is logged in, show Account and Logout buttons
            <div className="flex gap-x-4 items-center">
              <button
                onClick={() => setIsConfirmationOpen(true)} // Open confirmation dialog
                className="bg-white text-black font-medium text-sm rounded-full px-6 py-2 hover:bg-gray-100 transition"
              >
                Logout
              </button>

              <button
                className="bg-white text-black font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition content-center"
                onClick={() => router.push("/account")}
              >
                <FaUserAlt size={19} />
              </button>
            </div>
          ) : (
            // If no user is logged in, show Sign Up and Log In buttons
            <>
              <div>
                <button
                  className="bg-transparent text-sm text-neutral-300 font-medium"
                  onClick={authModal.onOpen}
                >
                  Sign up
                </button>
              </div>
              <div>
                <button
                  className="bg-white text-black  text-sm font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition"
                  onClick={authModal.onOpen}
                >
                  Log in
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {/* ConfirmationModel for logout */}
      <ConfirmationModel
        open={isConfirmationOpen}
        onOpenChange={setIsConfirmationOpen}
        title="Confirm Logout"
        description="Are you sure you want to log out? You will need to log in again to access your account."
        onConfirm={() => logoutUser()} // Perform logout on confirmation
        onCancel={() => setIsConfirmationOpen(false)} // Close dialog on cancel
      />
      {children}
    </div>
  )
}

export default Header
