import { Html, Head, Main, NextScript } from 'next/document'
import {Navigation} from "../components/Navigation";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="main-layout">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
