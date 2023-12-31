import styles from './Presentation.module.css'
import Image from 'next/image'
export default function Presentation() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tus Proyectos y documentos
        </h1>
        <div className={styles.subTitle}>Proyectos Colaborativos es el espacio de trabajo centralizado
donde se trabaja mejor mas alla de las distancias y encuentros.</div>
        <div className={styles.signup}>
            <a className={styles.buttonHasArrowRight} type='button' href='/signup'>Obten Proyectos Colaborativos gratis</a>
        </div>
      </header>
      <Image 
        src="/presentation.png" 
        alt="presentation" 
        width={200}
        height={160}
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        style={{ height: '100%', width: '100%' }}  priority/>

    </section>
  )
}
