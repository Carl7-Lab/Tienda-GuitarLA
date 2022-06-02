import Layout from '../components/Layout'
import Listado from '../components/Listado'

function Tienda({guitarras}) {
  return (
    <Layout
      pagina='Tienda Virtual'
    >
      <main>
        <h1 className='heading'>Nuestra Collección</h1>
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

export default Tienda
