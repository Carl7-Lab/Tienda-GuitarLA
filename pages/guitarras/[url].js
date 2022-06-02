import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'

function Producto({guitarra}) {

  const { nombre, precio, descripcion, imagen } = guitarra[0]

  return (
    <Layout
      pagina = {`Guitarra ${nombre}`}
    >
      <main className='contenedor'>
        <div className={styles.guitarra}>
          <Image priority={true} layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/guitarras`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()

    const paths = guitarras.map(guitarra =>({
        params: { url: guitarra.url }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const urlGuitarra =`${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}

export default Producto
