import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class CustomDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }
  render () {
    return (
      <html lang='en-US'>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Montserrat:300,500|Nanum+Gothic:400,800' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
