import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    // <Component {...pageProps} />
  )
   

}

export default MyApp
