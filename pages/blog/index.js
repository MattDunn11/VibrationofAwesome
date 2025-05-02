
import Link from 'next/link'
import { getBlogPosts } from '../../lib/notion'
import config from '../../notion.config'

export async function getStaticProps() {
  const posts = await getBlogPosts(config.notionDatabaseId)
  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>No published posts found in Notion.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <span style={{ marginLeft: '1rem', color: '#aaa' }}>{post.date}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
