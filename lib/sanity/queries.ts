// Blog
export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt,
  "image": mainImage.asset->url,
  author, "date": publishedAt, readTime, category, metaTitle, metaDescription,
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, excerpt, content,
  "image": mainImage.asset->url,
  author, "date": publishedAt, readTime, category, metaTitle, metaDescription,
}`

export const allBlogSlugsQuery = `*[_type == "blogPost"] { "slug": slug.current }`

// Services
export const allServicesQuery = `*[_type == "service"] {
  _id, "slug": slug.current, title, shortTitle, description, shortDescription,
  icon, features, benefits, packages, packageNote, process, metaTitle, metaDescription,
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id, "slug": slug.current, title, shortTitle, description, shortDescription,
  icon, features, benefits, packages, packageNote, process, metaTitle, metaDescription,
}`

export const allServiceSlugsQuery = `*[_type == "service"] { "slug": slug.current }`

// Testimonials
export const allTestimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id, quote, name, company, initial,
}`

// FAQ
export const allFaqCategoriesQuery = `*[_type == "faqCategory"] | order(order asc) {
  _id, name, items,
}`

// Site settings
export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  hero, contact, about,
}`
