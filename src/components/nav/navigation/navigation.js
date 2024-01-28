'use client'
import { useState } from 'react'
import NavBottomBar from '../navBottomBar/navBottomBar'
import NavTopBar from '../navTopBar/navTopBar'

const Navigation = ({ galleries }) => {
  const [show, setShow] = useState(true)

  const toggleBar = () => {
    setShow(!show)
  }

  return (
    <div>
      <NavTopBar toggleBar={toggleBar} showBar={show} />
      <NavBottomBar data={galleries} showBar={show} />
    </div>
  )
}

export default Navigation
