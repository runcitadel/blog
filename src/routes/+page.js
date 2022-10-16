export const prerender = false

export const load = async ({ fetch }) => {
  return {
  recentPosts: await fetch('/posts.json?limit=2').then((res) => res.json())
}
}
