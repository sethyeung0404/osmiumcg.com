import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
