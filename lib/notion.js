
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_SECRET })

export async function getBlogPosts(databaseId) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true }
    }
  })

  return response.results.map(page => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text || 'Untitled',
    slug: page.properties.Slug.rich_text[0]?.plain_text || '',
    date: page.properties.Date.date?.start || null
  }))
}
