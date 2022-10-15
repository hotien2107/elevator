import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon-hungphugia.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          src="https://hungphugiaelevator.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1"
          id="jquery-core-js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="https://hungphugiaelevator.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2"
          id="jquery-migrate-js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/vendors/js/main.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/vendors/js/bootstrap.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/vendors/js/aos.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/vendors/js/swiper-bundle.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
