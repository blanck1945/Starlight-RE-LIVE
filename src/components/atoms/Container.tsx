import React from "react"

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
  width?: string
  flex?: boolean
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
  width,
  display,
  justifyContent,
  alignItems,
  margin,
  marginTop,
  marginBottom,
  bg,
}: ContainerProps) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        width: width,
        margin: margin,
        marginTop: marginTop,
        marginBottom: marginBottom,
        display: display,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  )
}

export default Container
