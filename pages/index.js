import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="hulu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>First  Next App</h1>
    </div>
  )
}
