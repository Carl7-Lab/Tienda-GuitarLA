import Layout from '../components/Layout'

function Tienda({guitarras}) {
  console.log(guitarras)
  return (
    <Layout
      pagina='Tienda Virtual'
    >
      <main>
        <h1 className='heading'>Nuestra Collección</h1>
        <div>
          {guitarras.map(guitarra => (
            <div key={guitarra.id}>
              <h1>{guitarra.nombre}</h1>
            </div>
          ))}
        </div>
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
