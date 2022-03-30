import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/Favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Noto+Sans+SC&family=Noto+Sans+TC&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD79idHoy-q4euSg7fF3p84YL5a_4c7m70&callback=initMap"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
