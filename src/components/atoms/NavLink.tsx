import React from "react"
import { Link } from "gatsby"

interface NavLinkProps {
  children: any
  link: string
}

const NavLink = ({ children, link }: NavLinkProps) => {
  return (
    <Link to={link} className="link">
      {children}
    </Link>
  )
}

export default NavLink
