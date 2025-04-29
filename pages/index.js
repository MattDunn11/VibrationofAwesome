
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🌟 Vibration of Awesome 🌟</h1>
      <p>Welcome to your high-frequency digital sanctuary.</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link href="/blog">🔮 Visit the Blog</Link>
      </nav>
    </main>
  )
}
