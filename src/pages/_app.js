import Head from 'next/head'
import '../styles/globals.css'
import Nav from "../components/nav";


function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <title>Next JS MDX Blog</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
    </Head>
    <div className="container">
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
    <footer>
      <a>

      </a>
    </footer>
    </>
}

export default MyApp
