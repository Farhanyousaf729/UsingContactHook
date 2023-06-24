import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from './contaxt'


export default function App({ Component, pageProps }: AppProps) {




  return (

    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )

}
