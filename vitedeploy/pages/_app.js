import { Navbar } from '../coponent/navbar'
import '../styles/globals.css'
import Counter from './counter'

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
<ChakraProvider>
     
      <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
  )
}
