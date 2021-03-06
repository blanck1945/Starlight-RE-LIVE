import React from "react"

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
  divClass?: string
  width?: string
  flex?: boolean
  flexDirection?: any
  justifyContent?: string
  display?: string
  alignItems?: string
  margin?: string
  marginTop?: string
  marginBottom?: string
  bg?: string
}

const Container = ({
  children,
  divClass,
  width,
  display,
  justifyContent,
  alignItems,
  margin,
  flexDirection,
  marginTop,
  marginBottom,
  bg,
}: ContainerProps) => {
  return (
    <div
      className={divClass}
      style={{
        backgroundColor: bg,
        width: width,
        margin: margin,
        marginTop: marginTop,
        marginBottom: marginBottom,
        display: display,
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  )
}

export default Container
