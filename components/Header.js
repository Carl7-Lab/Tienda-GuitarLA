import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <Link href="/">
          <Image width={400} height={100} src="/img/logo.svg" alt="Imagen Logo" />
        </Link>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
