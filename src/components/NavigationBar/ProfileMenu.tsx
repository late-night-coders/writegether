"use client"
import { Menu, MenuItem } from "@mui/material"
import Image from "next/image"
import GoogleSignInButton from "./SignInButton"
import { useState } from "react"
import { signOut } from "next-auth/react"

const ProfileMenu = ({ imgSrc }: { imgSrc: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {imgSrc ? (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            overflow: "hidden"
          }}
        >
          <Image
            width={40}
            height={40}
            src={imgSrc}
            alt="Google user image"
            onClick={handleClick}
          />
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={() => signOut()}>Log out</MenuItem>
          </Menu>
        </div>
      ) : (
        <GoogleSignInButton />
      )}
    </>
  )
}

export default ProfileMenu
