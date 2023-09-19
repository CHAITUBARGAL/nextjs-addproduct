import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Hello</h1>
     <Link href="/addproduct">add product</Link>
     <Link href="/products">Prroducts</Link>
    </main>
  )
}
