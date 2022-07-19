import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { useTheme } from "next-themes"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    // <Component {...pageProps} />
  )
}

export default MyApp
