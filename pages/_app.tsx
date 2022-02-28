import '../styles/globals.css'
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Component {...pageProps}>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
    </Component>
  )
}
