import 'styles/globals.css'
import 'styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'
import * as gtag from 'utils/gtag'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps}>
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="twitter:site" content="@osmiumcg" />
          <meta name="twitter:creator" content="@osmiumcg" />
          <meta
            name="description"
            content="Osmium Consulting Group” was founded with one single aim in mind - to provide professional recruitment and HR advisory services to our clients and candidates."
          />
        </Head>
      </Component>
    </>
  )
}

export default appWithTranslation(MyApp)
