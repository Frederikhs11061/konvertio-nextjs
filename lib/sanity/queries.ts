export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": mainImage.asset->url,
  author,
  "date": publishedAt,
  readTime,
  category,
  metaTitle,
  metaDescription,
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  "image": mainImage.asset->url,
  author,
  "date": publishedAt,
  readTime,
  category,
  metaTitle,
  metaDescription,
}`

export const allBlogSlugsQuery = `*[_type == "blogPost"] { "slug": slug.current }`
