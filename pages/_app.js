import '../styles/globals.css'
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { appWithTranslation } from 'next-i18next'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => {
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

export default appWithTranslation(MyApp)
