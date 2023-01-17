import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
        <ThemeProvider enableSystem={false} attribute='class'>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    </>
  )
}
