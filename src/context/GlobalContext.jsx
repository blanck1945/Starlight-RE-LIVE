import React, { createContext } from "react"

export const GlobalContext = createContext()

const GlobalProvider = ({ children, location }) => {
  const [globalState, setGlobalState] = React.useState({
    path: location.pathname,
    dark: false,
    isMobile: window.innerWidth < 500 ? true : false,
    toogleDark: () => {
      let dark = globalState.dark
      localStorage.setItem("dark", JSON.stringify(dark))
      setGlobalState({
        ...globalState,
        dark,
      })
    },
  })

  // React.useEffect(() => {
  //   if (window.innerWidth > 500) {
  //     console.log("adjusting width")
  //     setGlobalState({
  //       ...globalState,
  //       isMobile: false
  //     })
  //   }
  //   else {
  //     setGlobalState({
  //       ...globalState,
  //       isMobile: true
  //     })
  //   }
  // },[globalState.isMobile])

  // React.useEffect(() => {
  //   // Getting dark mode value from localStorage!
  //   const lsDark = JSON.parse(localStorage.getItem("dark"))
  //   if (lsDark) {
  //     setGlobalState({
  //       ...globalState,
  //       dark: lsDark,
  //     })
  //   }
  // })

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        setGlobalState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
