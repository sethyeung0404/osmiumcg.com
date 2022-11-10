import { Html, Head, Main, NextScript } from 'next/document'
import Facebook from 'utils/Facebook'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/Favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Facebook />
    </Html>
  )
}
