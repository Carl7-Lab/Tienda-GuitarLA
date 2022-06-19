import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'

function Producto({guitarra, agregarCarrito}) {
  const [cantidad, setCantidad] = useState(1)
  const { nombre, precio, descripcion, imagen, id } = guitarra[0]
  const handleSubmit = (e) => {
    e.preventDefault()

    if(cantidad < 1) {
      alert('Cantidad no válida')
      return
    }

    //Agregarlo al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    }
    agregarCarrito(guitarraSeleccionada)
  }

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

            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label>Cantidad:</label>
              <select
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
              >
                  <option value="0">-- Seleccione --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
              </select>
              <input
                type="submit"
                value="Agregar al Carrito"
              />
            </form>
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
