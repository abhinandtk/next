import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <main className={styles.main}>
       <p>API URL: {apiUrl}</p>
    </main>
  )
}
