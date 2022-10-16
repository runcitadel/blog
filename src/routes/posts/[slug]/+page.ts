import { error } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params, fetch }) {
  const { slug } = params

  // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
  const posts = await fetch('/posts.json').then((res) => res.json())
  const post = posts.find((post) => slug === post.slug)

  if (!post) {
    throw error(404, 'Post not found');
  }

  const component = post.isIndexFile
    ? // vite requires relative paths and explicit file extensions for dynamic imports
      await import(`../../../../posts/${post.slug}/index.md`)
    : await import(`../../../../posts/${post.slug}.md`)

  return {
  ...post,
  component: component.default
}
}
