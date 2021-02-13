import React from "react"
import { Link } from "gatsby"
import { GlobalContext } from "../../context/GlobalContext"

interface NavLinkProps {
  children: JSX.Element[] | JSX.Element
  link: string
  func?: React.Dispatch<React.SetStateAction<boolean>>
  compState?: boolean
  location?: any
  linkClass?: string
}

const NavLink = ({
  children,
  link,
  func,
  compState,
  linkClass,
}: NavLinkProps) => {
  const {
    globalState: { path },
  } = React.useContext(GlobalContext)

  const conditionClass = linkClass ? `${linkClass} link` : "link"

  return (
    <>
      {path === link ? (
        <span className={conditionClass}>{children}</span>
      ) : (
        <Link
          onClick={() => func(!compState)}
          to={path === link ? null : link}
          className={conditionClass}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default NavLink
