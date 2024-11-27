"use client"

import React from "react"
import useAuthModal from "@/hooks/useAuthModal"
import Modal from "./Modal"


const AuthModal = () => {
  const { onClose, isOpen } = useAuthModal()


  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Modal title="Welcome back" description="Login to your account." isOpen={isOpen} onChange={onChange}>
hello
    </Modal>
  )
}

export default AuthModal