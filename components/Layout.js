import Head from 'next/head'
import Header from './Header'

function Layout({children, pagina}) {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio Web de Ventas de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout