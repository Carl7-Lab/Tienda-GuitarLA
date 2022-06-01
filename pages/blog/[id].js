import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

function entradaBlog({entrada}) {

  console.log(entrada)
  const { titulo, contenido, imagen, published_at } = entrada

  return (
    <Layout
      pagina="Blog"
    >
      <main className='contenedor'>
        <h2 className='heading'>{titulo}</h2>
        <article className={styles.entrada}>
          <Image priority={true} layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen entrada ${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada =>({
        params: { id: entrada.id }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {id}}) {

    const url =`${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({query: {id}}) {

//     const url =`${process.env.API_URL}/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }

export default entradaBlog
