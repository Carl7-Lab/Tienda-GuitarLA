import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

function Nosotros() {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

          <div>
            <p>Cras tincidunt nulla leo, id vestibulum ante ullamcorper eu. Morbi sit amet mattis urna. Donec vestibulum in mauris at efficitur. Nulla at neque et est feugiat tempus in non eros. Sed arcu risus, vestibulum quis sem eget, consequat laoreet arcu. Aenean a nisi dolor. Suspendisse pharetra vel risus non vestibulum. Fusce suscipit dignissim nisl, sit amet elementum nunc euismod a. Nullam hendrerit ullamcorper dui et egestas. Suspendisse eu accumsan ex, at efficitur metus. Nulla vel risus gravida lectus maximus malesuada in sed erat.</p>
            <p>Cras tincidunt nulla leo, id vestibulum ante ullamcorper eu. Morbi sit amet mattis urna. Donec vestibulum in mauris at efficitur. Nulla at neque et est feugiat tempus in non eros. Sed arcu risus, vestibulum quis sem eget, consequat laoreet arcu. Aenean a nisi dolor. Suspendisse pharetra vel risus non vestibulum. Fusce suscipit dignissim nisl, sit amet elementum nunc euismod a. Nullam hendrerit ullamcorper dui et egestas. Suspendisse eu accumsan ex, at efficitur metus. Nulla vel risus gravida lectus maximus malesuada in sed erat.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
