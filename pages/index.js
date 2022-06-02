import Layout from '../components/Layout'
import Listado from '../components/Listado'

export default function Home({guitarras}) {
  return (
    <Layout
      pagina='Inicio'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url =`${process.env.API_URL}/guitarras`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  return {
    props : {
      guitarras
    }
  }
}
