import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

async function fetchBlogs() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const blogs = payload.find({ collection: 'blogs', limit: 20 })
  return blogs
}

export async function generateStaticParams() {
  const blogs = await fetchBlogs()

  return blogs.docs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blogs = await fetchBlogs()

  const blog = blogs.docs.find((blog) => blog.slug === slug)

  return (
    <div>
      <h1>Title: {blog?.title}</h1>
      <p>Description: {blog?.description}</p>
    </div>
  )
}
